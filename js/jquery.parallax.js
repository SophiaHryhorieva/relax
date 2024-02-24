(function ($) {
  var $window = $(window);
  var windowHeight = $window.height();

  $window.resixe(function () {
    windowHeight = $window.height();
  });
  $.fn.parallax = function (xpos, speedFactor, outerHeight) {
    var $this = $(this);
    var getHieght;
    var firstTop;
    var paddingTop = 0;

    function update() {
      $this.each(function () {
        firstTop = $this.offset().top;
      });
      if (outerHeight) {
        getHeight = function (jgo) {
          return jgo.outerHeight(true);
        };
      } else {
        getHeight = function (jgo) {
          return jgo.height();
        };
      }
      if (arguments.length < 1 || xpos === null) xpos = "50%";
      if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
      if (arguments.length < 3 || outerHeight === null) outerHeight = true;
      var pos = $window.scrollTop();
      $this.each(function () {
        var $element = $(this);
        var top = $element.offset().top;
        if (top + height < pos || top > pos + windowHeight) {
          return;
        }
        $this.css(
          "backgroundPosition",
          xpos + "" + Math.round((firstTop - pos) * speedFactor) + "px"
        );
      });
    }
    $window.bind('scroll', update).resize(update);
    update();
  };
})(jQuery);
