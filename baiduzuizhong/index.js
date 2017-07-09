//用户名的HOVER
$(document).ready(function() {
    $(".username").hover(function() {
        $(".usernav").css("display", "block");
    }, function() {

    });
    $(".usernav").mouseleave(function() {
        $(".usernav").css("display", "none");
    });
});
//设置的HOVER
$(document).ready(function() {
    $(".settingname").hover(function() {
        $(".settingnav").css("display", "block");
    }, function() {
        
    });
    $(".settingnav").mouseleave(function() {
        $(".settingnav").css("display", "none");
    });
});
//更多产品的hover
$(document).ready(function() {
    $(".nav-blue").hover(function() {
        $(".products-nav").css("display", "block");
    }, function() {
        
    });
    $(".products-con").mouseleave(function() {
        $(".products-nav").css("display", "none");
    });
});

// 左边导航的显示hover
$(function(){   
        // 导航左侧栏js效果 start
        $(".con-list li").hover(function(){
            var inq=$(this).index(".con-list li");
            $($(".con-a")[inq]).fadeIn()
        },function(){            
        })
        $(".con-list li").mouseleave(function(){
            $(".con-a").fadeOut();
            $(".123").css("display","block");
            $(".123 a").css("display","block")
        })
        // 导航左侧栏js效果  end
        
    })

// $(document).ready(function() {
//         $(".con-list li").click(function() {
//             var inq=$(this).index(".con-list li");
//             $($(".con-a")[inq]).css({
                
//                 "display": "block",
//             });
//         });
       
//     });
