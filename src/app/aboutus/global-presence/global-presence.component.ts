import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SafeHtmlPipe } from './../../safe-html.pipe';
import { CommonService } from './../../common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';





@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.scss']
})
export class GlobalPresenceComponent implements OnInit {

  countrySlug: string | null;
  chairman: any[];
  detail: string;
  serverUrl = environment.apiUrl;
  typeKnowMore: string = 'vision-mission';


  constructor(private commonService: CommonService ,
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


   }

  ngOnInit() {

  alert();

          this.route.fragment.subscribe((fragment: string) => {
            if (fragment) {
                this.typeKnowMore = 'global-presence';
                  this.customScrollByAbhi(fragment);
            }
        });



 
    this.title.setTitle("Merino Services Limited | Global Presence | 41 Countries");
    this.meta.updateTag({name: 'description', content:"Being a leading giant in IT services, Merino services has footprints in all over the globe It provides reliable as well as effective IT solutions to various leading companies in all over the world."}, 'name="description"');
    this.meta.updateTag({name: 'keywords', content:''});


        // tslint:disable-next-line: align
        this.getGlobalPresence();
  }


  customScrollByAbhi(fragment) {
    setTimeout(function() {
      alert(fragment);
      const element = document.querySelector('#'+ fragment);
      if (element) { element.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
     }, 1000);
  }

  getGlobalPresence() {

      this.commonService.getChairman(this.countrySlug).subscribe(c => {
        console.table(c);
        this.detail = this.safeHtmlPipe.transform(c['detail']);
      this.serverUrl = this.serverUrl;
      this.countrySlug = this.countrySlug;
     });

    }


}
