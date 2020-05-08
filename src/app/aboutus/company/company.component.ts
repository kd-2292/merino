import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from './../../common.service';
import { SafeHtmlPipe } from './../../safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
// tslint:disable-next-line: quotemark
import { NgxSpinnerService } from "ngx-spinner";
import { Meta, Title } from '@angular/platform-browser';
import { MerinohelperService } from 'src/app/merinohelper.service';




@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [ SafeHtmlPipe ]
})
export class CompanyComponent implements OnInit {

  countrySlug: string | null;
  company: any[];
  serverUrl = environment.apiUrl;
  chairman: any[];
  detail: string;
  message: string | null; 
  seoCustomTile: string | null;
  seoCustomMetaDesc: string | null;
  seoCustomKeyword: string | null;
  seoCustomH1: string | null;
  seoCustomH2: string | null;
  typeKnowMore: string | null;



  constructor(
    private commonService: CommonService,
     public router: Router , 
     private route: ActivatedRoute , 
     private safeHtmlPipe: SafeHtmlPipe, 
     private spinner: NgxSpinnerService, 
     private merinoHelper: MerinohelperService, 
     public meta: Meta, 
     public title: Title) {

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };


  }

  ngOnInit() {

    window.scroll(0,10);

    //====Load Jquery
  this.merinoHelper.customScrollAakash();

   this.typeKnowMore='company';

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

    this.route.fragment.subscribe((fragment: string) => {
                if (fragment) {
                      this.customScrollByAbhi(fragment);
                      this.typeKnowMore='merino-group';
                }
            });


     this.commonService.seoget('about-us').subscribe(c => {
           
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


    this.getCompany();
  }




  customScrollByAbhi(fragment) {
    setTimeout(function() {
      const element = document.querySelector('#' + fragment);
      // tslint:disable-next-line: curly
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }, 1000);
  }

getCompany() {

  this.commonService.getCompany(this.countrySlug).subscribe(c => {
    // tslint:disable-next-line: no-string-literal
    this.company =   this.safeHtmlPipe.transform(c['detail']);;
    this.serverUrl = this.serverUrl;
    this.countrySlug = this.countrySlug;
   });

  }


}
