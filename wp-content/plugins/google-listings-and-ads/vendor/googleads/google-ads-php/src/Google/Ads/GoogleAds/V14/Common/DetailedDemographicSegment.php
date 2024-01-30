<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v14/common/audiences.proto

namespace Google\Ads\GoogleAds\V14\Common;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Detailed demographic segment.
 *
 * Generated from protobuf message <code>google.ads.googleads.v14.common.DetailedDemographicSegment</code>
 */
class DetailedDemographicSegment extends \Google\Protobuf\Internal\Message
{
    /**
     * The detailed demographic resource.
     *
     * Generated from protobuf field <code>optional string detailed_demographic = 1;</code>
     */
    protected $detailed_demographic = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $detailed_demographic
     *           The detailed demographic resource.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V14\Common\Audiences::initOnce();
        parent::__construct($data);
    }

    /**
     * The detailed demographic resource.
     *
     * Generated from protobuf field <code>optional string detailed_demographic = 1;</code>
     * @return string
     */
    public function getDetailedDemographic()
    {
        return isset($this->detailed_demographic) ? $this->detailed_demographic : '';
    }

    public function hasDetailedDemographic()
    {
        return isset($this->detailed_demographic);
    }

    public function clearDetailedDemographic()
    {
        unset($this->detailed_demographic);
    }

    /**
     * The detailed demographic resource.
     *
     * Generated from protobuf field <code>optional string detailed_demographic = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setDetailedDemographic($var)
    {
        GPBUtil::checkString($var, True);
        $this->detailed_demographic = $var;

        return $this;
    }

}

