<?php
/**
 * Plugin Name: Heading Block Plugin
 * Description: A custom Gutenberg block for heading text
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: heading-block
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the block
 */
function heading_block_init() {
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'heading_block_init');

/**
 * Enqueue editor assets
 */
function heading_block_editor_assets() {
    wp_enqueue_script(
        'heading-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor')
    );
}
add_action('enqueue_block_editor_assets', 'heading_block_editor_assets');
