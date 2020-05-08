import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResourceService } from './../resource.service';


@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss']
})
export class WhitepaperComponent implements OnInit {

  countrySlug: string;
  whitepaper: any[];
  casestudy: any[];


  serverUrl = environment.apiUrl;

  constructor(private resourceService: ResourceService, public router: Router , private route: ActivatedRoute) {

    // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };

  }


  ngOnInit() {

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

          // tslint:disable-next-line: align
          this.resourceService.getWhitePaperDetail(this.countrySlug).subscribe(c => {

            // tslint:disable-next-line: no-string-literal
            this.whitepaper = c['whitepaper'];
            // tslint:disable-next-line: no-string-literal
            this.casestudy = c['casestudy'];
            this.serverUrl = this.serverUrl;
            this.countrySlug = this.countrySlug;
        });

  }

}
