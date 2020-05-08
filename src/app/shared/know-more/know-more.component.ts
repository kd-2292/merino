import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent implements OnInit {

  countrySlug: string | null;
  careerJob: any[];
  jobs: any[];
  serverUrl = environment.apiUrl;

    @Input() hideOption: string;

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
