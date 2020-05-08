import { Component, OnInit } from '@angular/core';
import { Router , Params, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../common.service';
import { Meta, Title } from '@angular/platform-browser';
declare var jQuery: any;


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  message: string | null; 
  seoCustomTile: string | null;
  seoCustomMetaDesc: string | null;
  seoCustomKeyword: string | null;
  seoCustomH1: string | null;
  seoCustomH2: string | null; 

  setThankYouContent: any;
  token:any;

  constructor(public router: Router, private route: ActivatedRoute, private commonService: CommonService,public meta: Meta, public title: Title) {

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
     };

  }

  ngOnInit() {

       (function ($) {
          $(document).ready(function(){
                setTimeout(function(){
                  window.location.assign("/");
                }, 5000);
        });
      })(jQuery);

        this.route.queryParams.subscribe(params => {
        this.message = params['message'];
    });

    this.token = localStorage.getItem('key_webid');

    if(this.token != ''){
      this.commonService.getThankYouContent(this.token).subscribe(doc =>{
        //console.log(doc);
        this.setThankYouContent = doc;
      },
      err => {
        console.log(err);
      });
    }

      this.commonService.seoget('webinar-thank-you').subscribe(c => {
           
        if(c['seopage'].seo_title){
                 this.seoCustomTile = c['seopage'].seo_title;
                 this.seoCustomMetaDesc= c['seopage'].seo_description;
                 this.seoCustomKeyword= c['seopage'].seo_keyword; 
                 this.seoCustomH1= c['seopage'].h1; 
                 this.seoCustomH2= c['seopage'].h2; 

              this.title.setTitle(this.seoCustomTile);
              this.meta.updateTag({name: 'description', content: this.seoCustomMetaDesc}, 'name="description"');
              this.meta.updateTag({name: 'keywords', content:this.seoCustomKeyword});

             }
               
            });

  }


}
