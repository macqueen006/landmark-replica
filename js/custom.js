jQuery(window).load(function () {
  
  // The slider being synced must be initialized first
  jQuery('#carousel ul li').on('mouseover', function () {
    jQuery(this).trigger('click');
  });

  jQuery('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 280,
      itemMargin: 25,
      asNavFor: '#slider',
      pauseOnAction: true,
      directionNav: false
  });

  jQuery('#slider').flexslider({
      animation: "fade",
      controlNav: false,
      animationLoop: false,
      slideshow: true,
      directionNav: false,
      sync: "#carousel",
  });
   // owl carousel
      jQuery('.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        center: true,
        items: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });
});