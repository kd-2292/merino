import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResourceService } from './../resource.service';
import { Meta, Title } from '@angular/platform-browser';
import { CommonService } from './../../common.service';


@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss']
})
export class CasestudyComponent implements OnInit {

  countrySlug: string;
  whitepaper: any[];
  casestudy: any[];
  downloadpdfUrl: string;
  checkPdfUser = false;

    message: string | null;
  seoCustomTile: string | null;
  seoCustomMetaDesc: string | null;
  seoCustomKeyword: string | null;
  seoCustomH1: string | null;
  seoCustomH2: string | null;

  serverUrl = environment.apiUrl;

  // tslint:disable-next-line: max-line-length
  constructor(private resourceService: ResourceService, private commonService: CommonService, public router: Router , private route: ActivatedRoute, public meta: Meta, public title: Title) {

    // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };

   //localStorage.clear();

  }


  ngOnInit() {

    window.scroll(0,2);

    this.route.fragment.subscribe((fragment: string) => {
          if(fragment){
               this.customScrollByAbhi(fragment);
          }
  });

    this.allowPdfDownload();


    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
          // tslint:disable-next-line: align
          this.resourceService.getWhitePaperDetail(this.countrySlug).subscribe(c => {
            // tslint:disable-next-line: no-string-literal
            this.whitepaper = c['whitepaper'];
            // tslint:disable-next-line: no-string-literal
            this.casestudy = c['casestudy'];

            console.log(this.casestudy);

            this.serverUrl = this.serverUrl;
            this.countrySlug = this.countrySlug;
        });


       this.commonService.seoget('case-study').subscribe(c => {

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

  allowPdfDownload()
   {
      if(localStorage.getItem("pdfuser") != null)
        {
             this.checkPdfUser = true;
        }
   }

  onDownloadPdf(event, path, pdfname) {

    this.downloadpdfUrl = this.serverUrl+'api/menu/getdownload?path='+path+'&name='+pdfname;
       // tslint:disable-next-line: no-trailing-whitespace

      // tslint:disable-next-line: align
      if(this.checkPdfUser === true){
        window.open(this.downloadpdfUrl); //Download pdf
      }

  }


  customScrollByAbhi(fragment){
    setTimeout(function(){
      const element = document.querySelector("#whitePaper");
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }, 1000);
  }








}
