var top = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.btna = $('.uname,.usernav');
    },
    bind: function() {
        var me = this;
        me.btna.hover(function() {
            $('.usernav').stop(true, true).fadeIn(200);
        }, function() {
            $('.usernav').stop(true, true).delay(500).fadeOut(50);
        });
    },

}
top.init();


// $('.uname,.usernav').hover(function() {
//     $('.usernav').stop(true, true).fadeIn(200);
// }, function() {
//     $('.usernav').stop(true, true).delay(500).fadeOut(50);
// });
