(function($) {
    var extra_offset = $(window).height() * 0.05;

    // jQuery for page scrolling feature. Requires jQuery Easing plugin.
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - extra_offset)
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the dropdown menu on item click
    $('.navbar-nav > li > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
})(jQuery)
