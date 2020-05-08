import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
declare var jQuery: any;




@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  countrySlug: string | null;
   serverUrl = environment.imagePath;
   webinarSlug: string;
   upwebinarNew: any[];
   webinarTtile: string;
   webinarDate: string;
   webinarStarTime: string;
   webinarEndTime: string;
   webinarTimeZone: string;
   webinarBanner: string;

   seoCustomTile: string | null;
   seoCustomMetaDesc: string | null;
   seoCustomKeyword: string | null;
   seoCustomH1: string | null;
   seoCustomH2: string | null;



  constructor(public router: Router , private route: ActivatedRoute, private commonService: CommonService,  public meta: Meta, public title: Title) { }

  ngOnInit() {


   // $(document).ready(function(){
   //    console.log("kkkkkk");
   // });
  

     this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

     this.commonService.myupcommingnewwebinar(this.countrySlug ).subscribe(c => {
        if(c['data']){
                 this.upwebinarNew = c['data'];
                 this.webinarSlug= c['data']['slug'];
                 this.webinarTtile= c['data']['title'];
                 this.webinarDate= c['data']['date'];
                 this.webinarStarTime= c['data']['time'];
                 this.webinarEndTime= c['data']['endtime'];
                 this.webinarTimeZone= c['data']['timezone']['abbr'];
                 this.webinarBanner= c['data']['banner'];
              }
        });

     this.commonService.seoget('home').subscribe(c => {
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


/*  this.title.setTitle('IT Consulting Company – Enterprise Software Solutions – Implementation');
    this.meta.updateTag({name: 'description', content:'Merino Services is a business consulting and IT services company that has a diverse business portfolio in the manufacturing industry across various segments.'}, 'name="description"');
    this.meta.updateTag({name: 'keywords', content:'merino services limited, it services company, business consulting company, business consultancy services in india.'});
*/

  }

}
