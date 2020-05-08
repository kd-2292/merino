import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';
import { AllianceService } from './../../alliance.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-alliance',
  templateUrl: './alliance.component.html',
  styleUrls: ['./alliance.component.scss']
})
export class AllianceComponent implements OnInit {

  countrySlug: string | null;
  list: any[];
  serverUrl = environment.imagePath;

  constructor(private allianceService: AllianceService, public router: Router , private route: ActivatedRoute, public meta: Meta,
              public title: Title) {

    // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
}

ngOnInit() {

      this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
      this.allianceService.getListPage(this.countrySlug).subscribe(c => {
      // tslint:disable-next-line: no-string-literal
          this.list = c['detail'];
          this.serverUrl = this.serverUrl;
          this.countrySlug = this.countrySlug;
      });

     this.title.setTitle("Merino Services Limited | Global Alliances | Infor, IFS, SAP, IBM, Oracle");
      this.meta.updateTag({name: 'description', content:"Merino Services in partnership with global technology companies like Infor provides you the enterprise application in the field of hospitality, public sector, asset, warehouse & supply chain management."}, 'name="description"');
      this.meta.updateTag({name: 'keywords', content:"infor hospitality, infor public sector, infor performance management, infor asset management, infor warehouse management, infor supply chain management, infor marketing automation"});


}

}
