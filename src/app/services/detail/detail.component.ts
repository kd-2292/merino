import { Component, OnInit, Optional, Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import { ServiceService } from './../service.service';
import { ServiceModel } from './../../model/service/serviceModel';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeHtmlPipe } from './../../safe-html.pipe';
import { MerinohelperService } from './../../merinohelper.service';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ SafeHtmlPipe ]
})
export class DetailComponent implements OnInit {

  countrySlug: string | null;
  softwareSlug: string;
  content: string;
  serverUrl = environment.apiUrl;
  detail: string;
  schema: any;
  checkSchema: any;
  pagekey: string | null ;
  bradname: string | null ;
  getRecord: boolean = false;
  resData: any;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute, 
    public router: Router , 
    private serviceService: ServiceService ,
    private safeHtmlPipe: SafeHtmlPipe, 
    private merinoHelper: MerinohelperService,  
    public meta: Meta, 
    public title: Title ) {

        // tslint:disable-next-line: only-arrow-functions
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
         };

         Window['myComponent'] = this;

   }

  ngOnInit() {

        this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
        this.softwareSlug = this.route.snapshot.paramMap.get('slug');

        this.merinoHelper.loaderAdd();
        this.serviceService.getDetailPage(this.countrySlug, this.softwareSlug ).subscribe(c => {

        this.content = c['detail'];
        this.bradname = c['detail']['name'];

        this.detail = this.safeHtmlPipe.transform(c['detail']['detail']);
        this.schema = this.safeHtmlPipe.transform(c['detail']['schema']);
        this.checkSchema = c['detail']['schema'];
        // console.log(this.schema);

        this.title.setTitle(c['detail']['title']);
        this.meta.updateTag({name: 'description', content: c['detail']['description']});
        this.meta.updateTag({name: 'keywords', content: c['detail']['keyword']});
        this.serverUrl = this.serverUrl;
        this.countrySlug = this.countrySlug;
        this.pagekey= c['detail']['_id'];

        this.merinoHelper.loaderRemove();

      },(error) => {

            this.getRecord= true;
            console.table(error);
            this.title.setTitle('404 Page Not Found');
            this.meta.updateTag({name: 'description', content: '404 Page Not Found'});
            this.meta.updateTag({name: 'keywords', content: '404 Page Not Found'});
    });

      this.merinoHelper.customScrollAakash();

  }


  reqdemosscroll() {
    setTimeout(function() {
      const element = document.querySelector('#reqdemo');
      // tslint:disable-next-line: curly
      if (element){
         // element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            const id = 'reqdemo';
            const yOffset = -100;
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});

        }
     }, 100);
  }


}
