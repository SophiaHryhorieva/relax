(function ($) {
    "use strict";
    $(window).load(function(){
        $('.preloader').fadeOut(1000);
    }) 

    function initParallax() {
        $('#home').parallax("100%", 0.3)
        $('#about').parallax("20%", 0.3)
        $('#work').parallax("40%", 0.3)
        $('#contact').parallax("60%", 0.3)
        $('#footer').parallax("80%", 0.3)
    }
    initParallax();

    new WOW ({mobile: false}).init();
})(jQuery)

