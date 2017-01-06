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
    $("#sidebarToggle").click(function () {
        $(document.body).toggleClass("noscroll");
        $(this).addClass("animation").toggleClass("rotate color-white");
        $("#sidebar").addClass("animation").toggleClass("translateX");
        return false;
    });
}
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
$(function () {
    $(document.body).removeClass("fade");
    $(".zxd-navbar a").addClass("animation");
    $.zxdRocket();
    $.zxdSidebar();
    $.zxdNavMenu();
});

