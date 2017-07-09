// 搜索按钮start
    $(document).ready(function() {
        $("#search").click(function() {
            $(".red11").css({
                "opacity": "1",
                "display": "block",
            });
        });
        $("#close-btn").click(function() {//不能成功
            $(".red11").css({
                "opacity": "0",
                "display": "none",
            })
        });
    });
// 搜索按钮end

//第一个块的HOVER
$(document).ready(function(){
  $(".main-list ul li").hover(function(){
    $(this).find(".main-play").css("opacity","1");
    },function(){
    $(this).find(".main-play").css("opacity","0");
  });
});
//第一个块的hover下拉
$(document).ready(function(){
  $(".main-list ul li").hover(function(){
    $(this).find(".lesson-infor").css("height","175px");
    },function(){
    $(this).find(".lesson-infor").css("height","88px");
  });
});
// 第一个块hover里面的内容显示
$(document).ready(function(){
  $(".main-list ul li").hover(function(){
    $(this).find(".lesson-infor>p").css({
                "height": "52px",
		        "opacity": "1",
                "display": "block",
            });
    },function(){
    $(this).find(".lesson-infor>p").css({
                "height": "0px",
		        "opacity": "0",
                "display": "none",
            });
  });
});

$(document).ready(function(){
  $(".main-list ul li").hover(function(){
    $(".zhongji1").css("display","block");
    },function(){
    $(".zhongji1").css("display","none");
  });
});

// 左边导航的显示hover
$(function(){   
        // 导航左侧栏js效果 start
        $(".aside-cList li").hover(function(){
            var inq=$(this).index(".aside-cList li");
            $($(".list-show")[inq]).fadeIn()
        },function(){            
        })
        $(".aside-cList li").mouseleave(function(){
            $(".list-show").fadeOut();
            $(".123").css("display","block");
            $(".123 a").css("display","block")
        })
        // 导航左侧栏js效果  end
        
    })