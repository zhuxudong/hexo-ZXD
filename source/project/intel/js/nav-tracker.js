$.extend({
  //console.log($targetArr);
  navTracker: function () {
    var $tracker = $("[data-tracker]");
    var $trackerArr = $tracker.find("li");
    var $string = $tracker.attr("data-tracker");
    var $target = $($string);
    //console.log($target);
    var $targetArr = $target.find("[data-index]");
    //判断元素是否（开始）进入视野
    function isIntoView(ele) {
      var scrollH = $(document).scrollTop();
      var offsetH = $(ele).offset().top;
      var delta = scrollH - offsetH;
      // console.log(delta);
      // delta为-0.8125
      return delta >= -1 && delta < $(ele).innerHeight();
    }
    $(document).bind("scroll",function () {
      for (var index = 0; index < $targetArr.length; index++) {
        if (isIntoView($targetArr.eq(index))) {
          $trackerArr.removeClass("active").eq(index).addClass("active")
        }
      }
    })
    //为tracker绑定click事件监听
    for (var index = 0; index < $targetArr.length; index++) {
      (function (k) {
        $trackerArr.eq(k).click(function () {
          $trackerArr.removeClass("active").eq(k).addClass("active");
          $targetArr[k].scrollIntoView();
        });
      })(index);
    }
  }
});
$.navTracker();