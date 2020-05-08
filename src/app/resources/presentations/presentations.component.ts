import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResourceService } from './../resource.service';
import { CommonService } from './../../common.service';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss']
})
export class PresentationsComponent implements OnInit {
  countrySlug: string | null;
  content: string;
  serverUrl = environment.apiUrl;
  landingdetail: string;

      message: string | null; 
  seoCustomTile: string | null;
  seoCustomMetaDesc: string | null;
  seoCustomKeyword: string | null;
  seoCustomH1: string | null;
  seoCustomH2: string | null; 

  constructor(private resourceService: ResourceService,private commonService: CommonService, public router: Router , private route: ActivatedRoute, public meta: Meta, public title: Title) {
    // tslint:disable-next-line: only-arrow-functions
       this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };

 }

ngOnInit() {


  this.countrySlug = this.route.snapshot.paramMap.get('countryslug');


  this.resourceService.getPresentationLandingPage(this.countrySlug).subscribe(c => {

    // tslint:disable-next-line: no-string-literal
    this.content = c['detail'];
    this.landingdetail = c['detail']['detail'];
    this.serverUrl = this.serverUrl;
    this.countrySlug = this.countrySlug;
});


     this.commonService.seoget('presentations').subscribe(c => {
           
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
