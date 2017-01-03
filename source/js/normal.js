/**
 * Created by Administrator on 2017/1/1.
 */
//rocket to top
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
    })
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
})()

//sidebar toggle
$("#sidebarToggle").click(function () {
    $(document.body).toggleClass("noscroll");
    $(this).addClass("animation").toggleClass("rotate sidebarstyle");
    $("#sidebar").addClass("animation").toggleClass("translateX");
    return false;
})
