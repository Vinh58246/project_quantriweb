<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'datawp' );

/** Database username */
define( 'DB_USER', 'phuocvinhwp' );

/** Database password */
define( 'DB_PASSWORD', 'phuocvinh123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'N*wv78&B!g9XBVsp}}U.f6pl=V@M:_^1A,Wz+kKuMp@pC?<VzD%&`=hZ5$4P7!Oy' );
define( 'SECURE_AUTH_KEY',  '&XXi2@6C#~dZzQohV9d}uZ.%8l26p6j4m$.n]#v1v[4rhS%^FTL5jF&Pe+3PZqzX' );
define( 'LOGGED_IN_KEY',    'hbV]@M!,:18>Jj*W#]T56@juy6Z}STP$)WIf[o!W#CI~(sItY3y<cy<SOHB8]*2B' );
define( 'NONCE_KEY',        'Yb!@/@z{5n.]}P%ArJm3BiL7I1e@;SAMW_[}]&| jIX1(uxrA@P%hGJv:{`/&3Bb' );
define( 'AUTH_SALT',        'Zi)H3++gur.<>z_h7#zKhnPRt*l}zj )AYoYM$?gR+nr~Y([[?F=Ix`kp!A03R0u' );
define( 'SECURE_AUTH_SALT', '@LwtAzy1ose&]gEy0w8K_F2,T,5qKX3#pK+q|8vGg~Q$ToX*:q;|f|Af,7@/^vDa' );
define( 'LOGGED_IN_SALT',   '8CeAw(Taj6 8_K1IB](Z1u`5w!P^i6ql#>2YuceX)npX!Jw#8RQ.rm6hI]213})d' );
define( 'NONCE_SALT',       'J4-GH~s6.bN[L$R;L:#6m;?vW)TW53KuXkzl<7vAU%=Dh5cS4zpu>UP)?`Tn(&Zu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
