import { Component, OnInit } from '@angular/core';
import { WebinarService } from './../webinar.service';
import { environment } from 'src/environments/environment';
import { List } from './../../model/webinar/list';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MerinohelperService } from './../../merinohelper.service';
import { CommonService } from './../../common.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pastWebinar: any;
  upcomingWebinar: any;
  countrySlug: string | null ;
  serverUrl = environment.apiUrl;
  webid: string | null;
  webvideo: string | null;
  showchild= false; 


   seoCustomTile: string | null;
   seoCustomMetaDesc: string | null;
   seoCustomKeyword: string | null;
   seoCustomH1: string | null;
   seoCustomH2: string | null; 


  constructor(private route: ActivatedRoute,private commonService: CommonService,  public router: Router, private webinarService: WebinarService, public meta: Meta, public title: Title,private merinoHelper: MerinohelperService ) { }

  ngOnInit() {

            window.scroll(0,10);
           this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

              this.merinoHelper.loaderAdd();
             // tslint:disable-next-line: align
             this.webinarService.getWebinars( this.countrySlug ).subscribe(c => {
             this.pastWebinar     = c['webinar']['past'];
             this.upcomingWebinar = c['webinar']['upcoming'];
             this.serverUrl = this.serverUrl;
             this.countrySlug = this.countrySlug;
             this.merinoHelper.loaderRemove();

             console.log(this.upcomingWebinar);
        });

           this.commonService.seoget('webinar-listing').subscribe(c => {
           
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

  updatewebid(webid,videourl)
   {
    
     this.showchild= true; 
     this.webid= webid;
     this.webvideo=videourl
    
   }

}
