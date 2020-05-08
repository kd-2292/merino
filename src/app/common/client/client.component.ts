import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from './../../common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './../../safe-html.pipe';
import { MerinohelperService } from './../../merinohelper.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [SafeHtmlPipe]
})
export class ClientComponent implements OnInit {

  countrySlug: string | null;
  chairman: any[];
  detail: string;
  message: string | null; 
  seoCustomTile: string | null;
  seoCustomMetaDesc: string | null;
  seoCustomKeyword: string | null;
  seoCustomH1: string | null;
  seoCustomH2: string | null;
  serverUrl = environment.apiUrl;

      constructor(private commonService: CommonService ,
                  public router: Router ,
                  // tslint:disable-next-line: align
                  private route: ActivatedRoute ,
                  private sanitized: DomSanitizer,
                  private safeHtmlPipe: SafeHtmlPipe,
                   private merinoHelper: MerinohelperService,  
                   public meta: Meta,
                    public title: Title ) {

          this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
          };

   }

  ngOnInit() {

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.getClient();

    this.merinoHelper.customTestimonal();

      this.commonService.seoget('client').subscribe(c => {
           
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


  getClient() {

    this.commonService.getClient(this.countrySlug).subscribe(c => {
      this.detail = this.safeHtmlPipe.transform(c['detail']);
      this.serverUrl = this.serverUrl;
      this.countrySlug = this.countrySlug;
     });

    }

}
