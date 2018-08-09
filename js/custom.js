(function($) {
    var extra_offset = $(window).height() * 0.04;

    // jQuery for page scrolling feature. Requires jQuery Easing plugin.
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - extra_offset)
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#cover').affix({
        offset: {
            top: extra_offset
        }
    })

})(jQuery)
