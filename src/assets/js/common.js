$(function () {
  // $("#header").load("/global/india/include/test.txt");
  // $("#header").load("/global/india/include/header.html");
  $("#footer").load("/global/india/include/footer.html");
  $("#services").load("/global/india/include/services-under-industry.html");
  $("#software").load("/global/india/include/software-under-industry.html");
  $("#other-industry").load("/global/india/include/industry-under-industry.html");
  $("#clients").load("/global/india/include/clients.html");
  $("#other-software").load("/global/india/include/other-software.html");
  $("#industry-under-applications").load("/global/india/include/industry-under-applications.html");
  $("#services-under-applications").load("/global/india/include/services-under-applications.html");
  $("#software-under-services").load("/global/india/include/software-under-services.html");
  $("#other-services").load("/global/india/include/other-services.html");
  $("#about-link").load("/global/india/include/about-link.html");
});

$(document).ready(function () {

  /* Start Navigation */
  $(".hamburger-box").click(function () {
    $(this).toggleClass("toggle-active");
    $(".hambergar-menu").find(".level-1").removeClass("sub-active");
    $(".hambergar-menu").toggleClass("menus-active");
    $(".wrap-search .search-icon").removeClass("search-active");
    $(".wrap-search form").slideUp();

  });

  $(".sub-menu > a").click(function () {
    $(this).parent().find(".level-1").addClass("sub-active");
  });

  $(".back-menu-btn").click(function () {
    $(this).parent(".level-1").removeClass("sub-active");
  });


  // form need to be .wrap-search form slidUp();
  // remove class search-active
  $(".wrap-search .search-icon").click(function () {
    $(this).toggleClass("search-active");
    $(this).parent().find("form").stop(true, true).animate({
      width: 'toggle'
    }, "slow")
  });
  /* End Navigation */


  $('.requestCallBtn').click(function () {
    $('#requestCallBack').animate({ 'right': '0' });
  });

  $('.close-form').click(function () {
    $('#requestCallBack').animate({ 'right': '-295px' });
  });


  /* Start Client Page Testimonial  */





  $(document.body).on("load",".single-item",function()
  {
      $('.single-item').slick({
          adaptiveHeight: true
      });
  });

  /* End Client Page Testimonial  */


  //Angular hid menu

  $(document.body).on("click", ".ang-menu", function () {

    $(".hamburger-box").toggleClass("toggle-active");
    $(".hambergar-menu").find(".level-1").removeClass("sub-active");
    $(".hambergar-menu").removeClass("menus-active");
  });

/*start career js*/
// $('#loadMore span').click(function () {
//   $('#loadMore').hide();
//   $('.work-merino-container .col-md-4').show();
// });

$(document.body).on("click","#loadMore span",careerSlideDown);

 function careerSlideDown(){
  $('#loadMore').hide();
  $('.work-merino-container .col-md-4').show();
 }

$('#openingContainer label').click(function (e) {
  e.stopPropagation();
  $('#openingContainer label').removeClass('active');
  $(this).addClass('active');
});



// $('.plus-btn').click(function (e) {

// });


$(document.body).on("click",".plus-btn",function(e){

  e.stopPropagation();
  $(this).siblings('p').show();
  $(this).hide();

});


$('.go-next').click(function (e) {
  e.preventDefault();
  $(this).parents('.acc-block').slideUp();
  $('.applyOnline-inner-container h4').removeClass('minus');
  $('.applyOnline-inner-container h4:after').slideUp();

  $('.acc-block2').slideDown();
});


//start input file
const uploadButton = document.querySelector('.browse-btn');
const fileInfo = document.querySelector('.file-info');
const realInput = document.getElementById('careerfile');
/*end career js*/

$('.privacy-tc-close').click(function () {
  $(this).parent('div').hide();
  localStorage.setItem("home-ban", true);
});

var homeBan = localStorage.getItem("home-ban");

if (homeBan != null) {
  $(".privacy-tc").hide();
} else {
  $(".privacy-tc").show();
}


$("#ph").keypress(function (e) {
  console.log(e);
  if (e.which > 58 || (e.which > 30 && e.which < 42) || e.which == 42 || e.which == 47) {
    return false;
  }

});

$('.newsTab li').click(function () {
  $('.newsNevent').hide();
  $('.newsTab li').removeClass('activeTab');
  var clr = $(this).find('a').attr('class');
  $('#' + clr).show()
});

$('#id_of_your_checkbox').click(function () {
  if ($(this).is(':checked')) {
    $('.form-submit').removeAttr('disabled');
  } else {
    $('.form-submit').attr('disabled', 'disabled');
  }
});

$("footer h4").click(function(){
  $(this).parent().find("ul").stop(true, true).slideToggle();
  $(this).toggleClass("expend-links");
})


});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $("header").addClass("head-active");
  } else {
    $("header").removeClass("head-active");

  }
}); //missing );




// jQuery(window).bind("load scroll resize", function () {
//   var $winHeight = jQuery(window).height();
//   var $winwidth = jQuery(window).width();
//   var $winTop = jQuery(window).scrollTop();


//   if ($winwidth > 767) {

//     /*
//      * Fadein up with normal delay
//      */

//     if (jQuery('.move-up.delay-0').length > 0) {
//       jQuery(".move-up.delay-0").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.3s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.3s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//      * Fadein up with delay of 0.6second
//      */
//     if (jQuery('.move-up.delay-1').length > 0) {
//       jQuery(".move-up.delay-1").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.6s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.6s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//      * Fadein up with delay of 0.9second
//      */
//     if (jQuery('.move-up.delay-2').length > 0) {
//       jQuery(".move-up.delay-2").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.9s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '0.9s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//    * Fadein up with delay of 1.2second
//    */
//     if (jQuery('.move-up.delay-3').length > 0) {
//       jQuery(".move-up.delay-3").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.2s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.2s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//  * Fadein up with delay of 1.5second
//  */
//     if (jQuery('.move-up.delay-4').length > 0) {
//       jQuery(".move-up.delay-4").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.5s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.5s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
// * Fadein up with delay of 1.8second
// */
//     if (jQuery('.move-up.delay-5').length > 0) {
//       jQuery(".move-up.delay-5").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.8s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '1.8s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
// * Fadein up with delay of 2.1second
// */
//     if (jQuery('.move-up.delay-6').length > 0) {
//       jQuery(".move-up.delay-6").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.1s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.1s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
// * Fadein up with delay of 1.5second
// */
//     if (jQuery('.move-up.delay-7').length > 0) {
//       jQuery(".move-up.delay-7").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.4s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.4s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
// * Fadein up with delay of 1.5second
// */
//     if (jQuery('.move-up.delay-8').length > 0) {
//       jQuery(".move-up.delay-8").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.7s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '2.7s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
// * Fadein up with delay of 3.5second
// */
//     if (jQuery('.move-up.delay-9').length > 0) {
//       jQuery(".move-up.delay-9").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//  * Fadein up with delay of 3.5second
//  */
//     if (jQuery('.move-up.delay-10').length > 0) {
//       jQuery(".move-up.delay-10").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.3s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.3s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//  * Fadein up with delay of 3.5second
//  */
//     if (jQuery('.move-up.delay-11').length > 0) {
//       jQuery(".move-up.delay-11").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.6s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.6s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//    * Fadein up with delay of 3.5second
//    */
//     if (jQuery('.move-up.delay-12').length > 0) {
//       jQuery(".move-up.delay-12").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.9s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '3.9s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//    * Fadein up with delay of 3.5second
//    */
//     if (jQuery('.move-up.delay-13').length > 0) {
//       jQuery(".move-up.delay-13").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.2s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.2s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//    * Fadein up with delay of 3.5second
//    */
//     if (jQuery('.move-up.delay-14').length > 0) {
//       jQuery(".move-up.delay-14").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.5s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.5s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//    * Fadein up with delay of 3.5second
//    */
//     if (jQuery('.move-up.delay-15').length > 0) {
//       jQuery(".move-up.delay-15").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.8s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '4.8s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//    * Fadein up with delay of 3.5second
//    */
//     if (jQuery('.move-up.delay-16').length > 0) {
//       jQuery(".move-up.delay-16").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.1s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.1s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//      * Fadein up with delay of 3.5second
//      */
//     if (jQuery('.move-up.delay-17').length > 0) {
//       jQuery(".move-up.delay-17").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.4s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.4s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//      * Fadein up with delay of 3.5second
//      */
//     if (jQuery('.move-up.delay-18').length > 0) {
//       jQuery(".move-up.delay-18").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.7s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '5.7s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//      * Fadein up with delay of 3.5second
//      */
//     if (jQuery('.move-up.delay-19').length > 0) {
//       jQuery(".move-up.delay-19").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }
//     /*
//      * Fadein up with delay of 3.5second
//      */
//     if (jQuery('.move-up.delay-20').length > 0) {
//       jQuery(".move-up.delay-20").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6.3s', 'animation-name': 'fadeInUp' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '0.5s', 'animation-delay': '6.3s', 'animation-name': 'fadeInUp' });
//         }
//       });
//     }



//     var $winHeight = jQuery(window).height();
//     var $winTop = jQuery(window).scrollTop();

//     if (jQuery('.ie9 .move-up.delay').length > 0) {
//       jQuery(".ie9 .move-up.delay").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 300);
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 300);
//         }
//       });
//     }
//     if (jQuery('.ie9 .move-up.delay-1').length > 0) {
//       jQuery(".ie9 .move-up.delay-1").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 600);
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 600);
//         }
//       });
//     }
//     if (jQuery('.ie9 .move-up.delay-2').length > 0) {
//       jQuery(".ie9 .move-up.delay-2").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 900);
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).animate({ 'opacity': '1', 'bottom': '0' }, 900);
//         }
//       });
//     }
//     if (jQuery('.ie9 .move-right').length > 0) {
//       jQuery(".ie9 .move-right").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).animate({ 'opacity': '1', 'left': '0' }, 500);
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).animate({ 'opacity': '1', 'left': '0' }, 500);
//         }
//       });
//     }
//     /*
//      * Fadein from left to right with normal delay
//      */

//     if (jQuery('.move-right').length > 0) {
//       jQuery(".move-right").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 150)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInRight' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInRight' });
//         }
//       });
//     }
//     /*
//      * Fadein from right to left with normal delay
//      */
//     if (jQuery('.move-left').length > 0) {
//       jQuery(".move-left").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 20)) && ($secPosition > -500)) {
//           jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInLeft' });
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).css({ 'animation-duration': '1.2s', 'animation-delay': '0.3s', 'animation-name': 'fadeInLeft' });
//         }
//       });
//     }
//     if (jQuery('.ie9 .move-left').length > 0) {
//       jQuery(".ie9 .move-left").each(function () {
//         var $offset = jQuery(this).parent().offset().top;
//         var $secHeight = jQuery(this).parent().outerHeight();
//         var $secPosition = $offset - $winTop;
//         if (($secPosition <= ($winHeight - 20)) && ($secPosition > -500)) {
//           jQuery(this).animate({ 'opacity': '1', 'right': '0' }, 500);
//         } else if ((($secPosition - 80) >= -($secHeight)) && ($secPosition <= ($winHeight - 150))) {
//           jQuery(this).animate({ 'opacity': '1', 'right': '0' }, 500);
//         }
//       });
//     }

//   }
// });

    // (function($){
    //   alert();
    //     $(window).on("load",function(){
    //         $(".scroll-content").mCustomScrollbar({
    //             theme:"minimal"
    //         });
    //     });
    // })(jQuery);



