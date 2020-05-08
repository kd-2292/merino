import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { environment } from 'src/environments/environment';
import { AllianceService } from './../../alliance.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-alliance-detail',
  templateUrl: './alliance-detail.component.html',
  styleUrls: ['./alliance-detail.component.scss']
})
export class AllianceDetailComponent implements OnInit {

  countrySlug: string | null;
  alliancearr: any;
  detail: string | null;
  serverUrl = environment.apiUrl;
  allianceSlug: string;
  image: string | null;
  name: any;


  constructor(private allianceService: AllianceService, public router: Router , private route: ActivatedRoute, public meta: Meta,
              public title: Title) {

            this.router.routeReuseStrategy.shouldReuseRoute = function() {
              return false;
            };

   }

  ngOnInit() {
    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.allianceSlug = this.route.snapshot.paramMap.get('slug');
    this.allianceService.getDetailPage(this.countrySlug, this.allianceSlug).subscribe(c => {
    // tslint:disable-next-line: no-string-literal
        this.alliancearr = c;
        // tslint:disable-next-line: no-string-literal
        this.name = c['name'];
        this.detail = c['detail'];
        this.image = c['image'];
        this.serverUrl = this.serverUrl;
        this.countrySlug = this.countrySlug;
    });


    this.title.setTitle("Merino Services Limited | Global Alliances | Infor, IFS, SAP, IBM, Oracle");
      this.meta.updateTag({name: 'description', content:"Merino Services in partnership with global technology companies like Infor provides you the enterprise application in the field of hospitality, public sector, asset, warehouse & supply chain management."}, 'name="description"');
      this.meta.updateTag({name: 'keywords', content:"infor hospitality, infor public sector, infor performance management, infor asset management, infor warehouse management, infor supply chain management, infor marketing automation"});


  }

}
