if (!window["jQuery"])
  alert(
    "The jQuery library must be included before the smoothscroll.js file. The plugin will not work propery."
  );

(function (f) {
  "use strict";
  "function" === typeof define && define.amd
    ? define(["jquery"], f)
    : "underfined" !== typeof module && module.exports
    ? (module.exports = f(require("jquery")))
    : f(jQuery);
})(function ($) {
  "use strict";
  function n(a) {
    return (
      !a.nodeName ||
      -1 !==
        $.inArray(a.nodeName.toLowerCase(), [
          "iframe",
          "#document",
          "html",
          "body",
        ])
    );
  }
  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a };
  }
  var p = ($.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b);
  });
  p.defaults = { axis: "xy", duration: 0, limit: !0 };
  $.fn.scrollTo = function (a, d, b) {
    "object" === typeof d && ((b = d), (d = 0));
    "function" === typeof b && (b = { onAfter: b });
    "max" === a && (a = 9e9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete:
            a &&
            function () {
              a.call(q, e, b);
            },
        });
        r.animate(f, k);
      }
      if (null !== a) {
        var l = n(this),
        q = l ? this.contentWindow || window : this,
        r = $(q),
        e = a,
        f = {},
        t; 
        switch (typeof e) {
            case "number":
            case "string":
                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                    e = h(e);
                    break;
                }
                e = l ? $(e) : $(e, q);
            case "object":
                if (e.length === 0) return;
                if (e.js || e.style) t = (e = $ (e)).offset(); 
      } 
    });
  };
});
