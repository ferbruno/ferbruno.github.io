# Register Sidebar

Register the sidebar in `functions.php`:

```
function themename_sidebar_setup() {

register_sidebar(array(
	'name' => 'Sidebar One',
	'id' => 'sidebar-one',
	'class' => 'custom',
	'description' => 'The first sidebar included on the footer',
	'before_widget' => '<div id="%1$s" class="widget %2$s">',
	'after_widget' => '</div>',
	'before_title' => '<h2 class="widget-title">',
	'after_title' => '</h2>',
	));

}

add_action( 'widgets_init', 'themename_sidebar_setup' );
``` 

Print the sidebar in any template:

```
<?php if ( is_active_sidebar( 'sidebar-one' ) ) : ?>
	<?php dynamic_sidebar( 'sidebar-one' ); ?>
<?php endif; ?>
```
