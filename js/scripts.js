/*---------- Hero Flexslider ----------
$(document).ready(function() {
	$('#main-slider').flexslider({
		animation: "fade",//effects
		slideshowSpeed: 3500,//duration
		controlNav: false,
		directionNav: false
	});
});
----------*/

/*---------- Screenshots Owl Carousel----------
$(document).ready(function() {
 
var owl = $("#owl-demo");
 
owl.owlCarousel({
items : 4, //10 items above 1000px browser width
itemsDesktop : [1000,5], //5 items between 1000px and 901px
itemsDesktopSmall : [900,3], // betweem 900px and 601px
itemsTablet: [600,2], //2 items between 600 and 0
itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
})
});
----------*/

/*---------- Testimonials Carousel ----------
$('#testimonials .carousel').carousel({
  interval:6000
})
----------*/

/*---------- Magnific Popup Vimeo Video ----------
$(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title">Some caption</div>'+
                        '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%output=embed'
                    }
                },
                srcAction: 'iframe_src',
            },
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
----------*/

/*---------- Tooltip ----------
$('.social-icons a, .social-icons-bottom a').tooltip();
----------*/

/*---------- Sidebar ----------*/
$("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
/*----------*/


ko.bindingHandlers.localScroll = {
  init: function(element, valueAccessor) {
    var el, options;
    el = $(element);
    options = valueAccessor();
    el.localScroll({
      target: options.target,
      lazy: true,
      hash: true
    });
  }
};

ko.bindingHandlers.headroom = {
  init: function(element) {
    var el, options;
    el = document.querySelector("header");
  var headroom = new Headroom(el, {
    "tolerance": 5,
    "offset": 205,
    "classes": {
      "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp",
      "top": "headroom--top",
      "notTop": "headroom--not-top"
    }
  });
  headroom.init();
  }
};

ko.applyBindings();