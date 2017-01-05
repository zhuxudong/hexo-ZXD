/**
 * Created by Administrator on 2017/1/1.
 */

$(function () {
    $(document.body).removeClass("fade");
    $(".zxd-navbar a").addClass("animation");

    //start rocket to top
    (function () {
        //set the state for keeping on rocket
        var rocketState = "end";
        var $rocket = $("#rocket");
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
            if (rocketState == "end" && $(document).scrollTop() < $(window).height()) {
                $rocket.addClass("hide").removeClass("rocketTop");
            }
            else {
                $rocket.removeClass("hide");
                $(document).height() - $(window).height() - $(document).scrollTop() < 44 ?
                    $rocket.addClass("color-white") : $rocket.removeClass("color-white");
            }
        })
    })();
    //end rocket to top

    //start translate sidebar
    $("#sidebarToggle").click(function () {
        $(document.body).toggleClass("noscroll");
        $(this).addClass("animation").toggleClass("rotate color-white");
        $("#sidebar").addClass("animation").toggleClass("translateX");
        return false;
    });
    //end translate sidebar

    // start pop navbar-collapse
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
    //end pop navbar-collapse
});


