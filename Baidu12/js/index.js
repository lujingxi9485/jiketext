//头部
var header = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.btna = $('.uname,.usernav')
        me.btnb = $('.set,.settingnav')
        me.btnc = $('.blue,.products-nav')
    },
    bind: function() {
        var me = this;
        //用户名的hover
        me.btna.hover(function() {
            $('.usernav').stop(true, true).fadeIn(200);
        }, function() {
            $('.usernav').stop(true, true).delay(500).fadeOut(50);
        });
        //设置的hover
        me.btnb.hover(function() {
            $('.settingnav').stop(true, true).fadeIn(200);
        }, function() {
            $('.settingnav').stop(true, true).delay(500).fadeOut(50);
        });
        //更多产品的hover
        me.btnc.hover(function() {
            $('.products-nav').stop(true, true).fadeIn(200);
        }, function() {
            $('.products-nav').stop(true, true).delay(500).fadeOut(50);
        });
    },
};
header.init();

//con-nav
var con = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.btna = $('.con-nav a')
    },
    bind: function() {
        var me = this;
        //用户名的hover
        me.btna.click(function() {
            if (!$(this).hasClass('active')) {
                $('.con-nav a').removeClass('active').eq($(this).index()).addClass('active');
                $('.cbox').stop(true, true).animate({
                    top: 0
                }, 100).hide().eq($(this).index()).animate({
                    top: 0
                }, 400).show();
            }
        });
    },
};
con.init();

//用户名的hover
// $('.uname,.usernav').hover(function() {
//     $('.usernav').stop(true, true).fadeIn(200);
// }, function() {
//     $('.usernav').stop(true, true).delay(500).fadeOut(50);
// });
// //设置的hover
// $('.set,.settingnav').hover(function() {
//     $('.settingnav').stop(true, true).fadeIn(200);
// }, function() {
//     $('.settingnav').stop(true, true).delay(500).fadeOut(50);
// });
// //更多产品的hover
// $('.blue,.products-nav').hover(function() {
//     $('.products-nav').stop(true, true).fadeIn(200);
// }, function() {
//     $('.products-nav').stop(true, true).delay(500).fadeOut(50);
// });
// // con-nav
// $('.con-nav a').click(function() {
//     if (!$(this).hasClass('active')) {
//         $('.con-nav a').removeClass('active').eq($(this).index()).addClass('active');
//         $('.cbox').stop(true, true).animate({
//             top: 0
//         }, 100).hide().eq($(this).index()).animate({
//             top: 0
//         }, 400).show();
//     }
// });
