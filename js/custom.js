$(function() {
    "use strict";
    
    // 检查用户是否为首次加载
    if (!localStorage.getItem('visited')) {
        // 如果是首次加载，启动进度条
        Pace.restart();
        
        // 设置本地存储标记，表示已经访问过了
        localStorage.setItem('visited', 'true');
    } else {
        // 如果已经访问过，禁用进度条
        Pace.options = {
            document: false,  // 禁用文档加载进度条
            eventLag: false,  // 禁用事件延迟检测
            ajax: false,      // 禁用 AJAX 进度条
        };
    }
    
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

    var wind = $(window);
    
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
});
