import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IndustryService } from './../industry.service';
import { IndustryModel } from './../../model/industry/industryModel';
import { ActivatedRoute, Router } from '@angular/router';
import { MerinohelperService } from './../../merinohelper.service';
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  countrySlug: string | null;
  isLanding: number;
  content: string;
  serverUrl = environment.apiUrl;
  landingdetail: string;

constructor(private industryService: IndustryService, public router: Router , private route: ActivatedRoute, private merinoHelper: MerinohelperService,  public meta: Meta, public title: Title) { }

ngOnInit() {
      this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
      this.isLanding = 1;
      this.merinoHelper.loaderAdd();
      this.industryService.getLandingPage(this.countrySlug, this.isLanding ).subscribe(c => {
        // tslint:disable-next-line: no-string-literal
        this.content = c['detail'];
        this.landingdetail = c['detail']['detail'];
         this.title.setTitle(c['detail']['title']);
         this.meta.updateTag({name: 'description', content: c['detail']['description']}, 'name="description"');
         this.meta.updateTag({name: 'keywords', content: c['detail']['keyword']});
        this.serverUrl = this.serverUrl;
        this.countrySlug = this.countrySlug;
          this.merinoHelper.loaderRemove();
    });

}





}
