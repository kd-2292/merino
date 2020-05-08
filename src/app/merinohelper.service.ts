import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {  Observable } from 'rxjs';
declare var jQuery: any;



@Injectable({
  providedIn: 'root'
})
export class MerinohelperService {

  constructor() { }

   randomString(length)
    {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
    }



  customScrollAakash()
  {

  (function ($) {
    $(document).ready(function(){

      setTimeout(function(){

        // tslint:disable-next-line: quotemark
        $(".scroll-content").mCustomScrollbar({
          theme:"minimal"
        });

      }, 200);

    });
  })(jQuery);

}



customTestimonal()
{

(function ($) {
  $(document).ready(function(){

    setTimeout(function(){

      // tslint:disable-next-line: quotemark

        $('.single-item').slick({
          adaptiveHeight: true
        });

    }, 500);

  });
})(jQuery);

}

hideReqCall()
 {

  (function ($) {
             $(document).ready(function(){
                $('#requestCallBack').animate({ 'right': '-295px' });
          });
   })(jQuery);

 }

 removeSearchText()
  {
          (function ($) {
            $(document).ready(function(){
                $('#requestCallBack').animate({ 'right': '-295px' });
          });
        })(jQuery);
  }

  hideSearchForm()
  {

        (function ($) {
            $(document).ready(function(){
              $(".wrap-search").find('form').slideUp();
              $('span').removeClass("search-active");
          });
        })(jQuery);
  }

  loaderFn()
  {

        (function ($) {
            $(document).ready(function(){
              $(".merino-loader").addClass("loader-2");

                  setTimeout(function(){
                       $(".merino-loader").removeClass("loader-2");
                     // console.log("log message from merinohelper ladere");
                  }, 2000);
          });
        })(jQuery);
  }

  loaderAdd()
  {

        (function ($) {
            $(document).ready(function(){
              $(".merino-loader").addClass("loader-2");
          });
        })(jQuery);
  }

  loaderRemove()
  {

        (function ($) {
            $(document).ready(function(){
              $(".merino-loader").removeClass("loader-2");
          });
        })(jQuery);
  }

  customFormScroll(pos){

        (function ($, pos) {
            $(document).ready(function(){
                setTimeout(() => {
                    window.scrollBy(0, pos)
                }, 300);
          });
        })(jQuery, pos);

  }


  webinarwatchvideo()
  {

        (function ($) {
            $(document).ready(function(){
              $(".blur-overlay").removeClass("watch-video");
          });
        })(jQuery);
  }











}
