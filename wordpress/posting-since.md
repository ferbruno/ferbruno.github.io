# Posting Since

Retrieve the date of the first post of the blog and print it.

```
$sticky = get_option( 'sticky_posts' );
$args = array(
    'posts_per_page' => 1,
    'order' => 'ASC',
    'ignore_sticky_posts' => 1,
    'post__not_in' => $sticky,
    );
$firstPost = new WP_Query($args);
        
if( $firstPost->have_posts() ):
            
    while( $firstPost->have_posts() ): $firstPost->the_post(); ?>
                
        <span class="site-started"><?php _e( 'Posting since ', 'theme_name' ); ?><?php the_date( 'F, Y' ); ?></span>
            
    <?php endwhile;
            
endif;
        
wp_reset_postdata();
```
    
