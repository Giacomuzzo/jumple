
$('#fullpage').fullpage({
  anchors: ['s1', 's2', 's3', 's4', 's5','s6'],
  });

* Performs the movement (by CSS3 or by jQuery)
   */
  function performMovement(v) {
    // using CSS3 translate functionality
    if (options.css3 && options.autoScrolling && !options.scrollBar) {

      if (v.anchorLink == 'footer') {
        footer_a = $('#section-footer').height();
        footer_h = $('#footer-text').height();
        var translate3d = 'translate3d(0px, -' + (v.dtop - footer_a + footer_h) + 'px, 0px)';
      } else {
        var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
      }

      transformContainer(translate3d, true);

      setTimeout(function() {
        afterSectionLoads(v);
      }, options.scrollingSpeed);
    }

    // using jQuery animate
    else {

      var scrollSettings = getScrollSettings(v);

      $(scrollSettings.element).animate(
        scrollSettings.options, options.scrollingSpeed, options.easing).promise().done(function() { //only one single callback in case of animating  `html, body`
        afterSectionLoads(v);
      });
    }
  }
