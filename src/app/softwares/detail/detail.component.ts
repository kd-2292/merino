import { Component, OnInit } from '@angular/core';
import { SoftwareService } from './../software.service';
import { environment } from 'src/environments/environment';
import { SoftwareModel } from './../../model/software/softwareModel';
import { ActivatedRoute, Router } from '@angular/router';
import { PageNotFoundComponent } from './../../common/page-not-found/page-not-found.component';
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
  content: string | null;
  // tslint:disable-next-line: variable-name
  is_error = false;
  serverUrl = environment.apiUrl;
  detail: string;
  schema: any;
  checkSchema: any;
  pagekey: string | null;
  bradname: string;
  getRecord: boolean = false; 

  // tslint:disable-next-line: max-line-length
  constructor(private softwareService: SoftwareService, public router: Router , private route: ActivatedRoute, private safeHtmlPipe: SafeHtmlPipe , private merinoHelper: MerinohelperService,  public meta: Meta, public title: Title) {

    // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };

       Window['myComponent'] = this;

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

  ngOnInit() {
    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.softwareSlug = this.route.snapshot.paramMap.get('slug');
      this.merinoHelper.loaderAdd();
    this.softwareService.getDetailPage(this.countrySlug, this.softwareSlug ).subscribe(c => {
         // console.log(c.status);
          // tslint:disable-next-line: no-string-literal
        
          this.content = c['detail'];
          this.bradname = c['detail']['name'];
          this.detail = this.safeHtmlPipe.transform(c['detail']['detail']);

        this.detail = this.safeHtmlPipe.transform(c['detail']['detail']);
        this.schema = this.safeHtmlPipe.transform(c['detail']['schema']);

        this.checkSchema = c['detail']['schema'];
        
        // alert(this.checkSchema);

        // console.log(this.schema);

          this.serverUrl = this.serverUrl;
          this.countrySlug = this.countrySlug;
           this.pagekey= c['detail']['_id'];
           this.merinoHelper.loaderRemove();

         this.title.setTitle(c['detail']['title']);
         this.meta.updateTag({name: 'description', content: c['detail']['description']}, 'name="description"');
         this.meta.updateTag({name: 'keywords', content: c['detail']['keyword']});


      }, (error) => {
         console.log(error.status);
         this.is_error = true;
           this.getRecord= true;
      //  console.table(error);
    });

    //====Load Jquery
      this.merinoHelper.customScrollAakash();

  }

//   customScrollAakash()
//   {

//   (function ($) {
//     $(document).ready(function(){

//       setTimeout(function(){

//         $(".scroll-content").mCustomScrollbar({
//           theme:"minimal"
//         });

//       }, 1000);

//     });
//   })(jQuery);

// }


}
