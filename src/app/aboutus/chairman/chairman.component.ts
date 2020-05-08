import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MerinohelperService } from './../../merinohelper.service';
import { CommonService } from './../../common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './../../safe-html.pipe';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-chairman',
  templateUrl: './chairman.component.html',
  styleUrls: ['./chairman.component.scss'],
  providers: [ SafeHtmlPipe ]
})
export class ChairmanComponent implements OnInit {

  countrySlug: string | null;
  chairman: any[];
  detail: string;
  serverUrl = environment.apiUrl;
  typeKnowMore: string = 'chairman';

  seoCustomTile: string | null;
   seoCustomMetaDesc: string | null;
   seoCustomKeyword: string | null;




constructor(private commonService: CommonService ,
            private merinoHelper: MerinohelperService,
            public router: Router ,
            private route: ActivatedRoute ,
            private sanitized: DomSanitizer,
            private safeHtmlPipe: SafeHtmlPipe,
            public meta: Meta,
            public title: Title


            ) {

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };


    this.route.fragment.subscribe((fragment: string) => {
            if (fragment) {
                 this.typeKnowMore='management-team-container';
                  this.customScrollByAbhi(fragment);
            }
        });

  }


  ngOnInit() {

      this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
      this.getChairman();
  }

 


  customScrollByAbhi(fragment) {

    setTimeout(function() {
      const element = document.querySelector('#' + fragment);
      // tslint:disable-next-line: curly
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }, 1000);
  }


  getChairman() {

    this.commonService.getChairman(this.countrySlug).subscribe(c => {
      this.detail = this.safeHtmlPipe.transform(c['detail']);
      this.serverUrl = this.serverUrl;
      this.countrySlug = this.countrySlug;


    //==========Seo ===========================================
        this.seoCustomTile = c['title'];
        this.seoCustomMetaDesc= c['keyword'];
        this.seoCustomKeyword= c['description']; 

        this.title.setTitle(this.seoCustomTile);
        this.meta.updateTag({name: 'description', content: this.seoCustomMetaDesc}, 'name="description"');
        this.meta.updateTag({name: 'keywords', content:this.seoCustomKeyword});
    //=============Eed Seo ============================================



     });

    }

}
