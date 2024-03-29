<?php // phpcs:ignore SlevomatCodingStandard.TypeHints.DeclareStrictTypes.DeclareStrictTypesMissing

namespace MailPoet\Tasks;

if (!defined('ABSPATH')) exit;


use MailPoet\Cron\Workers\SendingQueue\SendingQueue as SendingQueueAlias;
use MailPoet\DI\ContainerWrapper;
use MailPoet\Entities\ScheduledTaskEntity;
use MailPoet\Entities\ScheduledTaskSubscriberEntity;
use MailPoet\InvalidStateException;
use MailPoet\Logging\LoggerFactory;
use MailPoet\Models\ScheduledTask;
use MailPoet\Models\SendingQueue;
use MailPoet\Newsletter\Sending\ScheduledTasksRepository;
use MailPoet\Newsletter\Sending\ScheduledTaskSubscribersRepository;
use MailPoet\Newsletter\Sending\SendingQueuesRepository;
use MailPoet\Util\Helpers;

/**
 * A facade class containing all necessary models to work with a sending queue
 * @property string|null $status
 * @property int $taskId
 * @property int $id
 * @property int $newsletterId
 * @property string $newsletterRenderedSubject
 * @property string|array $newsletterRenderedBody
 * @property bool $nonExistentColumn
 * @property string $scheduledAt
 * @property int $priority
 */
class Sending {
  const TASK_TYPE = SendingQueueAlias::TASK_TYPE;

  /** @var ScheduledTask */
  private $task;

  /** @var SendingQueue */
  private $queue;

  private $queueFields = [
    'id',
    'task_id',
    'newsletter_id',
    'newsletter_rendered_subject',
    'newsletter_rendered_body',
    'count_total',
    'count_processed',
    'count_to_process',
    'meta',
  ];

  private $commonFields = [
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  /** @var ScheduledTaskSubscribersRepository */
  private $scheduledTaskSubscribersRepository;

  /** @var ScheduledTasksRepository */
  private $scheduledTasksRepository;

  /** @var ScheduledTaskEntity */
  private $scheduledTaskEntity;

  /** @var SendingQueuesRepository */
  private $sendingQueuesRepository;

  private function __construct(
    ScheduledTask $task = null,
    SendingQueue $queue = null
  ) {
    if (!$task instanceof ScheduledTask) {
      /** @var ScheduledTask $task */
      $task = ScheduledTask::create();
      $task->type = self::TASK_TYPE;
      $task->save();
    }
    if (!$queue instanceof SendingQueue) {
      /** @var SendingQueue $queue */
      $queue = SendingQueue::create();
      $queue->newsletterId = 0;
      $queue->taskId = $task->id;
      $queue->save();
    }

    if ($task->type !== self::TASK_TYPE) {
      throw new \Exception('Only tasks of type "' . self::TASK_TYPE . '" are accepted by this class');
    }

    $this->task = $task;
    $this->queue = $queue;
    $this->scheduledTaskSubscribersRepository = ContainerWrapper::getInstance()->get(ScheduledTaskSubscribersRepository::class);
    $this->scheduledTasksRepository = ContainerWrapper::getInstance()->get(ScheduledTasksRepository::class);
    $this->sendingQueuesRepository = ContainerWrapper::getInstance()->get(SendingQueuesRepository::class);

    // needed to make sure that the task has an ID so that we can retrieve the ScheduledTaskEntity while this class still uses Paris
    $this->save();

    $scheduledTaskEntity = $this->scheduledTasksRepository->findOneById($this->task->id);

    if (!$scheduledTaskEntity instanceof ScheduledTaskEntity) {
      throw new InvalidStateException('Scheduled task entity not found');
    }

    $this->scheduledTaskEntity = $scheduledTaskEntity;
  }

  public static function create(ScheduledTask $task = null, SendingQueue $queue = null) {
    return new self($task, $queue);
  }

  public static function createManyFromTasks($tasks) {
    if (empty($tasks)) {
      return [];
    }

    $tasksIds = array_map(function($task) {
      return $task->id;
    }, $tasks);

    $queues = SendingQueue::whereIn('task_id', $tasksIds)->findMany();
    $queuesIndex = [];
    foreach ($queues as $queue) {
      $queuesIndex[$queue->taskId] = $queue;
    }

    $result = [];
    foreach ($tasks as $task) {
      if (!empty($queuesIndex[$task->id])) {
        $result[] = self::create($task, $queuesIndex[$task->id]);
      } else {
        static::handleInvalidTask($task);
      }
    }
    return $result;
  }

  public static function handleInvalidTask(ScheduledTask $task) {
    $loggerFactory = LoggerFactory::getInstance();
    $loggerFactory->getLogger(LoggerFactory::TOPIC_NEWSLETTERS)->error(
      'invalid sending task found',
      ['task_id' => $task->id]
    );
    $task->status = ScheduledTask::STATUS_INVALID;
    $task->save();
  }

  public static function createFromScheduledTask(ScheduledTask $task) {
    $queue = SendingQueue::where('task_id', $task->id)->findOne();
    if (!$queue) {
      return false;
    }

    return self::create($task, $queue);
  }

  public static function createFromQueue(SendingQueue $queue) {
    $task = $queue->task()->findOne();
    if (!$task) {
      return false;
    }

    return self::create($task, $queue);
  }

  public static function getByNewsletterId($newsletterId) {
    $queue = SendingQueue::where('newsletter_id', $newsletterId)
      ->orderByDesc('updated_at')
      ->findOne();
    if (!$queue instanceof SendingQueue) {
      return false;
    }

    return self::createFromQueue($queue);
  }

  public function asArray() {
    $queue = array_intersect_key(
      $this->queue->asArray(),
      array_flip($this->queueFields)
    );
    $task = $this->task->asArray();
    return array_merge($task, $queue);
  }

  public function getErrors() {
    $queueErrors = $this->queue->getErrors();
    $taskErrors = $this->task->getErrors();
    if (empty($queueErrors) && empty($taskErrors)) {
      return false;
    }
    return array_merge((array)$queueErrors, (array)$taskErrors);
  }

  public function save() {
    $this->queue->save();
    $this->task->save();
    $errors = $this->getErrors();
    if ($errors) {
      $loggerFactory = LoggerFactory::getInstance();
      $loggerFactory->getLogger(LoggerFactory::TOPIC_NEWSLETTERS)->error(
        'error saving sending task',
        ['task_id' => $this->task->id, 'queue_id' => $this->queue->id, 'errors' => $errors]
      );
    }
    return $this;
  }

  public function delete() {
    $this->scheduledTaskSubscribersRepository->deleteByScheduledTask($this->scheduledTaskEntity);
    $this->scheduledTasksRepository->remove($this->scheduledTaskEntity);

    $sendingQueueEntity = $this->scheduledTaskEntity->getSendingQueue();

    if ($sendingQueueEntity) {
      $this->sendingQueuesRepository->remove($sendingQueueEntity);
    }

    $this->scheduledTasksRepository->flush();
  }

  public function queue() {
    return $this->queue;
  }

  public function task() {
    return $this->task;
  }

  public function getSubscribers($processed = null) {
    if (is_null($processed)) {
      $subscribers = $this->scheduledTaskSubscribersRepository->findBy(['task' => $this->task->id]);
    } else if ($processed) {
      $subscribers = $this->scheduledTaskSubscribersRepository->findBy(
        ['task' => $this->task->id, 'processed' => ScheduledTaskSubscriberEntity::STATUS_PROCESSED]
      );
    } else {
      $subscribers = $this->scheduledTaskSubscribersRepository->findBy(
        ['task' => $this->task->id, 'processed' => ScheduledTaskSubscriberEntity::STATUS_UNPROCESSED]
      );
    }

    return array_map(
      function(ScheduledTaskSubscriberEntity $scheduledTaskSubscriber) {
        return (string)$scheduledTaskSubscriber->getSubscriberId();
      },
      $subscribers
    );
  }

  public function setSubscribers(array $subscriberIds) {
    $this->scheduledTaskSubscribersRepository->setSubscribers($this->scheduledTaskEntity, $subscriberIds);
    $this->updateCount();
  }

  public function updateProcessedSubscribers(array $processedSubscribers): bool {
    $this->scheduledTaskSubscribersRepository->updateProcessedSubscribers($this->scheduledTaskEntity, $processedSubscribers);
    $this->scheduledTasksRepository->refresh($this->scheduledTaskEntity); // needed while Sending still uses Paris
    $this->status = $this->scheduledTaskEntity->getStatus();
    return $this->updateCount(count($processedSubscribers))->getErrors() === false;
  }

  public function updateCount(?int $count = null) {
    if ($count) {
      // increment/decrement counts based on known subscriber count, don't exceed the bounds
      $this->queue->countProcessed = min($this->queue->countProcessed + $count, $this->queue->countTotal);
      $this->queue->countToProcess = max($this->queue->countToProcess - $count, 0);
    } else {
      // query DB to update counts, slower but more accurate, to be used if count isn't known
      $this->queue->countProcessed = $this->scheduledTaskSubscribersRepository->countProcessed($this->scheduledTaskEntity);
      $this->queue->countToProcess = $this->scheduledTaskSubscribersRepository->countUnprocessed($this->scheduledTaskEntity);
      $this->queue->countTotal = $this->queue->countProcessed + $this->queue->countToProcess;
    }
    return $this->queue->save();
  }

  public function hydrate(array $data) {
    foreach ($data as $k => $v) {
      $this->__set($k, $v);
    }
  }

  public function validate() {
    return $this->queue->validate() && $this->task->validate();
  }

  public function getMeta() {
    return $this->queue->getMeta();
  }

  public function __isset($prop) {
    $prop = Helpers::camelCaseToUnderscore($prop);
    if ($this->isQueueProperty($prop)) {
      return isset($this->queue->$prop);
    } else {
      return isset($this->task->$prop);
    }
  }

  public function __get($prop) {
    $prop = Helpers::camelCaseToUnderscore($prop);
    if ($this->isQueueProperty($prop)) {
      return $this->queue->$prop;
    } else {
      return $this->task->$prop;
    }
  }

  public function __set($prop, $value) {
    $prop = Helpers::camelCaseToUnderscore($prop);
    if ($this->isCommonProperty($prop)) {
      $this->queue->$prop = $value;
      $this->task->$prop = $value;
    } elseif ($this->isQueueProperty($prop)) {
      $this->queue->$prop = $value;
    } else {
      $this->task->$prop = $value;
    }
  }

  public function __call($name, $args) {
    $obj = method_exists($this->queue, $name) ? $this->queue : $this->task;
    $callback = [$obj, $name];
    if (is_callable($callback)) {
      return call_user_func_array($callback, $args);
    }
  }

  private function isQueueProperty($prop) {
    return in_array($prop, $this->queueFields);
  }

  private function isCommonProperty($prop) {
    return in_array($prop, $this->commonFields);
  }
}
