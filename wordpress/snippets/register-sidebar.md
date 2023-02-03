## Register Sidebar

To be implemented in **functions.php**.

Use the following code:



    function tuiti_sidebar_setup() {

    register_sidebar(array(
        'name' => 'Sidebar One',
        'id' => 'sidebar-one',
        'class' => 'custom',
        'description' => 'The first sidebar included on the footer',
        'before_widget'  => '<div id="%1$s" class="widget %2$s">',
        'after_widget'   => '</div>',
        'before_title'   => '<h2 class="widget-title">',
        'after_title'    => '</h2>',
    ));

    register_sidebar(array(
        'name' => 'Sidebar Two',
        'id' => 'sidebar-two',
        'class' => 'custom',
        'description' => 'The second sidebar included on the footer',
        'before_widget'  => '<div id="%1$s" class="widget %2$s">',
        'after_widget'   => '</div>',
        'before_title'   => '<h2 class="widget-title">',
        'after_title'    => '</h2>',
    ));

    }

    add_action( 'widgets_init', 'tuiti_sidebar_setup' );
    
    

Return


