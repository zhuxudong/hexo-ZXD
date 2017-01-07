/**
 * Created by Administrator on 2017/1/1.
 */
$.zxdRocket = function () {
    var rocketState = "end";
    var $rocket = $("#rocket");
    var $zxdNavbar = $(".zxd-navbar");
    var scrollTop = $(document).scrollTop();
    $rocket.click(function () {
        rocketState = "ing";
        var index = 0;
        var scrollTop = $(document).scrollTop();
        $rocket.addClass("rocketTop");
        setTimeout(scroll, 20);
        //closure
        function scroll() {
            $(document).scrollTop(scrollTop - scrollTop / 40 * (++index));
            if (index != 40) {
                setTimeout(scroll, 20);
            } else {
                rocketState = "end";
            }
        }

        return false;
    });
    $(document).on("scroll", function () {
        var scrollTopNow = $(document).scrollTop();
        //rocket 是否隐藏，是否变色
        if (rocketState == "end" && scrollTopNow < $(window).height()) {
            $rocket.addClass("hide").removeClass("rocketTop");
        }
        else {
            //火箭是否在底部，如果在底部，需要将火箭变成白色
            $rocket.removeClass("hide");
            $(document).height() - $(window).height() - scrollTopNow < 44 ?
                $rocket.addClass("color-white") : $rocket.removeClass("color-white");
        }
        //如果滚轮上滑，顶部菜单栏弹出，提示用户
        if (scrollTopNow < scrollTop&&scrollTop>300) {
            $zxdNavbar.addClass("zxd-navbar-pop");
            scrollTop = scrollTopNow;
        }
        else {
            $zxdNavbar.hasClass("zxd-navbar-pop") ? $zxdNavbar.removeClass("zxd-navbar-pop"):0;
            scrollTop = scrollTopNow;
        }
    })
};
$.zxdSidebar = function () {
    function toggleSidebar(){
        $(document.body).toggleClass("noscroll");
        $("#sidebarToggle").toggleClass("rotate color-white");
        $("#sidebar").toggleClass("translateX");
    }
    $("#sidebarToggle").click(function () {
      toggleSidebar();
        return false;
    });
    //手机端滑屏
    var pageX=0;
    $(document).bind("touchstart",function(e){
        pageX= e.changedTouches[0].pageX;
    }).bind("touchend",function(e){
        if(e.changedTouches[0].pageX- pageX<-100&& $("#sidebar").hasClass("translateX")){
            toggleSidebar();
        }
        else if(e.changedTouches[0].pageX- pageX>100&& !$("#sidebar").hasClass("translateX")){
           toggleSidebar();
        }
    });
    //代码段不能滑屏
    $("pre,code,.line").bind("toushstart touchend",function(){
        return false;
    })
};
$.zxdNavMenu = function () {
    $("#navbarToggle").click(function () {
        var $collapse = $("#navbarCollapse");
        if ($collapse.hasClass("collapse-xs")) {
            var height = $collapse.height(),
                width = $collapse.width();
            $collapse.css("height", 0).css("width", 0)
                .removeClass("collapse-xs")
                .animate({width: width + "px", height: height + "px"}, function () {
                        $collapse.css("height", "auto").css("width", "auto");
                    }
                );
        } else {
            $collapse.animate({width: 0, height: 0}, function () {
                $collapse.addClass("collapse-xs").css("height", "auto").css("width", "auto");
            })
        }
        return false;
    });
}

$.startFancybox=function () {
    $('img').each(function () {
      var $image = $(this);
      var imageTitle = $image.attr('title');
      var $imageWrapLink = $image.parent('a');

      if ($imageWrapLink.length < 1) {
        $imageWrapLink = $image.wrap('<a href="' + this.getAttribute('src') + '"></a>').parent('a');
      }

      $imageWrapLink.addClass('fancybox');
      $imageWrapLink.attr('rel', 'group');

      if (imageTitle) {
        $imageWrapLink.append('<p class="image-caption">' + imageTitle + '</p>');
        $imageWrapLink.attr('title', imageTitle); //make sure img title tag will show correctly in fancybox
      }
    });

    $('.fancybox').fancybox({
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  },

$(function () {
    $(document.body).removeClass("fade");
    $(".zxd-navbar a").add("#sidebar").add("#sidebarToggle").addClass("animation");
    $.zxdRocket();
    $.zxdSidebar();
    $.zxdNavMenu();
    $.startFancybox();
});

