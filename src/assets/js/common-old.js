$(document).ready(function () {

  /* Start Navigation */
  $(".hamburger-box").click(function(){
    $(this).toggleClass("toggle-active");
    $(".hambergar-menu").toggleClass("menus-active");
  });

  $(".sub-menu > a").click(function(){
    $(this).parent().find(".level-1").addClass("sub-active");
  });

  $(".back-menu-btn").click(function(){
    $(this).parent(".level-1").removeClass("sub-active");
  });

  
  $(".hamburger-box.toggle-active").click(function(){
    $(this).parents("header").removeClass("sub-active");
  });

  /* Start Navigation */
});






jQuery(window).bind("load scroll resize", function () {
  var $winHeight = jQuery(window).height();
  var $winwidth = jQuery(window).width();
  var $winTop = jQuery(window).scrollTop();


  if ($winwidth > 767) {

    /*
     * Fadein up with normal delay 
     */

    if (jQuery('.move-up.delay-0').length > 0) {
      jQuery(".move-up.delay-0").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.3s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.3s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
     * Fadein up with delay of 0.6second
     */
    if (jQuery('.move-up.delay-1').length > 0) {
      jQuery(".move-up.delay-1").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.6s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.6s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
     * Fadein up with delay of 0.9second
     */
    if (jQuery('.move-up.delay-2').length > 0) {
      jQuery(".move-up.delay-2").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.9s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.9s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
   * Fadein up with delay of 1.2second
   */
    if (jQuery('.move-up.delay-3').length > 0) {
      jQuery(".move-up.delay-3").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.2s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.2s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
 * Fadein up with delay of 1.5second
 */
    if (jQuery('.move-up.delay-4').length > 0) {
      jQuery(".move-up.delay-4").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.5s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.5s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
* Fadein up with delay of 1.8second
*/
    if (jQuery('.move-up.delay-5').length > 0) {
      jQuery(".move-up.delay-5").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.8s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.8s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
* Fadein up with delay of 2.1second
*/
    if (jQuery('.move-up.delay-6').length > 0) {
      jQuery(".move-up.delay-6").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.1s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.1s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
* Fadein up with delay of 1.5second
*/
    if (jQuery('.move-up.delay-7').length > 0) {
      jQuery(".move-up.delay-7").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.4s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.4s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
* Fadein up with delay of 1.5second
*/
    if (jQuery('.move-up.delay-8').length > 0) {
      jQuery(".move-up.delay-8").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.7s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.7s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
* Fadein up with delay of 3.5second
*/
    if (jQuery('.move-up.delay-9').length > 0) {
      jQuery(".move-up.delay-9").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
 * Fadein up with delay of 3.5second
 */
    if (jQuery('.move-up.delay-10').length > 0) {
      jQuery(".move-up.delay-10").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.3s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.3s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
 * Fadein up with delay of 3.5second
 */
    if (jQuery('.move-up.delay-11').length > 0) {
      jQuery(".move-up.delay-11").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.6s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.6s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
   * Fadein up with delay of 3.5second
   */
    if (jQuery('.move-up.delay-12').length > 0) {
      jQuery(".move-up.delay-12").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.9s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.9s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
   * Fadein up with delay of 3.5second
   */
    if (jQuery('.move-up.delay-13').length > 0) {
      jQuery(".move-up.delay-13").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.2s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.2s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
   * Fadein up with delay of 3.5second
   */
    if (jQuery('.move-up.delay-14').length > 0) {
      jQuery(".move-up.delay-14").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.5s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.5s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
   * Fadein up with delay of 3.5second
   */
    if (jQuery('.move-up.delay-15').length > 0) {
      jQuery(".move-up.delay-15").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.8s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.8s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
   * Fadein up with delay of 3.5second
   */
    if (jQuery('.move-up.delay-16').length > 0) {
      jQuery(".move-up.delay-16").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.1s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.1s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
     * Fadein up with delay of 3.5second
     */
    if (jQuery('.move-up.delay-17').length > 0) {
      jQuery(".move-up.delay-17").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.4s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.4s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
     * Fadein up with delay of 3.5second
     */
    if (jQuery('.move-up.delay-18').length > 0) {
      jQuery(".move-up.delay-18").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.7s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.7s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
     * Fadein up with delay of 3.5second
     */
    if (jQuery('.move-up.delay-19').length > 0) {
      jQuery(".move-up.delay-19").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6s', 'animation-name': 'fadeInUp' });
        }
      });
    }
    /*
     * Fadein up with delay of 3.5second
     */
    if (jQuery('.move-up.delay-20').length > 0) {
      jQuery(".move-up.delay-20").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6.3s', 'animation-name': 'fadeInUp' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6.3s', 'animation-name': 'fadeInUp' });
        }
      });
    }



    var $winHeight = jQuery(window).height();
    var $winTop = jQuery(window).scrollTop();

    if (jQuery('.ie9 .move-up.delay').length > 0) {
      jQuery(".ie9 .move-up.delay").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 300);
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 300);
        }
      });
    }
    if (jQuery('.ie9 .move-up.delay-1').length > 0) {
      jQuery(".ie9 .move-up.delay-1").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 600);
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 600);
        }
      });
    }
    if (jQuery('.ie9 .move-up.delay-2').length > 0) {
      jQuery(".ie9 .move-up.delay-2").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 900);
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 900);
        }
      });
    }
    if (jQuery('.ie9 .move-right').length > 0) {
      jQuery(".ie9 .move-right").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).animate({ 'opacity': '1', 'left': '0' }, 500);
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).animate({ 'opacity': '1', 'left': '0' }, 500);
        }
      });
    }
    /*
     * Fadein from left to right with normal delay
     */

    if (jQuery('.move-right').length > 0) {
      jQuery(".move-right").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInRight' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInRight' });
        }
      });
    }
    /*
     * Fadein from right to left with normal delay
     */
    if (jQuery('.move-left').length > 0) {
      jQuery(".move-left").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 20)) && ($secPosition > -500)) {
          jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInLeft' });
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInLeft' });
        }
      });
    }
    if (jQuery('.ie9 .move-left').length > 0) {
      jQuery(".ie9 .move-left").each(function () {
        var $offset = jQuery(this).parent().offset().top;
        var $secHeight = jQuery(this).parent().outerHeight();
        var $secPosition = $offset - $winTop;
        if (($secPosition <= ($winHeight - 20)) && ($secPosition > -500)) {
          jQuery(this).animate({ 'opacity': '1', 'right': '0' }, 500);
        } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
          jQuery(this).animate({ 'opacity': '1', 'right': '0' }, 500);
        }
      });
    }

  }
});

