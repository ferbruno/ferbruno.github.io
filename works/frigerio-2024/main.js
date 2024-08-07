    

    $(document).ready(function() {
        $('#nav-icon3').click(function() {
            $(this).toggleClass('open');
            $('.nav-list').toggleClass('hide');
        });

        $('.menu li').click(function() {
            $('#nav-icon3').toggleClass('open');
            $('.nav-list').toggleClass('hide');
        });
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 270) {
            $('#nav-icon3').removeClass('open');
            $('.nav-list').removeClass('hide');
        } else {
            $('.a').fadeIn();
        }
    });