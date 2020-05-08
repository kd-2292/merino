import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-about-footer',
  templateUrl: './about-footer.component.html',
  styleUrls: ['./about-footer.component.scss']
})
export class AboutFooterComponent implements OnInit {

  countrySlug: string | null;
  careerJob: any[];
  jobs: any[];
  serverUrl = environment.apiUrl;

  constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute) {

    // tslint:disable-next-line: only-arrow-functions
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };
}

  ngOnInit() {

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

  }

}
