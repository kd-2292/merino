import { Component, OnInit } from '@angular/core';
import { Router , Params, ActivatedRoute } from '@angular/router';
import { MerinohelperService } from './../../merinohelper.service';
import { environment } from 'src/environments/environment';
import { CommonService } from './../../common.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  countrySlug: string | null;
  serverUrl = environment.apiUrl;
  query: string;
  searchData: any[];

  // tslint:disable-next-line: max-line-length
  constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute , private merinoHelper: MerinohelperService) {

             // tslint:disable-next-line: only-arrow-functions
             this.router.routeReuseStrategy.shouldReuseRoute = function() {
              return false;
            };
   }

  ngOnInit() {
      // tslint:disable-next-line: quotemark
    this.query = this.route.snapshot.queryParamMap.get("query");
    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.serverUrl = this.serverUrl;
    this.commonService.getSearch(this.query , this.countrySlug ).subscribe(c => {
        this.searchData = c;
        console.log(this.searchData);
     });

    this.merinoHelper.removeSearchText();

  }


}
