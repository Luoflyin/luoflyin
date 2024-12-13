$(function() {
    "use strict";
    
    // Preloader
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;
    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })
    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }
    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 3500);
    });
// Preloader page
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};
Pace.on('done', function () {
    $('#preloader').addClass("isdone");
    $('.loading-text').addClass("isdone");
});


