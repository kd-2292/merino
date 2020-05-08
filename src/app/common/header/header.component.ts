import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params , NavigationEnd } from '@angular/router';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { MerinohelperService } from './../../merinohelper.service';
import { filter } from 'rxjs/operators';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countrySlug: string | null ;
  softwareMenu: any = [];
  serviceMenu: any = [];
  industryMenu: any = [];
  customNaviageUrl: string;



  // tslint:disable-next-line: max-line-length
  constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute, private merinoHelper: MerinohelperService) {


   }

  ngOnInit() {

          this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
          this.commonService.getMenu().subscribe(data => {
          // tslint:disable-next-line: no-string-literal
            this.softwareMenu = data['software'];
            this.serviceMenu = data['service'];
            this.industryMenu = data['industry'];
            this.countrySlug = this.countrySlug;
          });


          if (this.countrySlug == null)
          {
             this.customNaviageUrl = '/search.html';
         } else {
            this.customNaviageUrl = '/' + this.countrySlug + '/search.html';
        }

  }


  MerinoSearch(searchForm: NgForm){

    this.router.navigate([this.customNaviageUrl], { queryParams: { query: searchForm.value.search } } );
    searchForm.reset();
    this.merinoHelper.hideSearchForm();
  }

}
