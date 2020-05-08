import { Component, OnInit } from '@angular/core';
import { Router , Params, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {


  countrySlug: string;
  software: any = [];
  service: any = [];
  industry: any = [];
 

  // tslint:disable-next-line: max-line-length
  constructor(
    public router: Router, 
    private route: ActivatedRoute,
    private commonService: CommonService
    ) {

             // tslint:disable-next-line: only-arrow-functions
             this.router.routeReuseStrategy.shouldReuseRoute = function() {
              return false;
            };
   }


  ngOnInit() {

    window.scroll(0,3);

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.commonService.getFooterMenu().subscribe(data => {

      this.software = data['software'];
      this.service = data['service'];
      this.industry = data['industry'];
      this.countrySlug = this.countrySlug;

      // console.log(this.software);

    });

  }

}
