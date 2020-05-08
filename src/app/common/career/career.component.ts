import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  countrySlug: string | null;
  careerJob: any[];
  jobs: any[];
  serverUrl = environment.apiUrl;

  constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute,public meta: Meta,
              public title: Title) {

              // tslint:disable-next-line: only-arrow-functions
          this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
          };
   }

  ngOnInit() {

    window.scroll(0,10);

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.commonService.getCareerJob(this.countrySlug).subscribe(c => {
      // tslint:disable-next-line: no-string-literal
      this.jobs = c['jobs'];
      this.serverUrl = this.serverUrl;
      this.countrySlug = this.countrySlug;
     });


      this.title.setTitle("Merino Services Limited | Careers | Working at Merino Services");
      this.meta.updateTag({name: 'description', content:"Merino services is a perfect blend of domain expertise, hard work and innovation. By knowing the power and importance of relationships it is always eager to help by delivering the quality solutions."}, 'name="description"');
      this.meta.updateTag({name: 'keywords', content:''});

  }


}
