import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResourceService } from './../resource.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent implements OnInit {


  countrySlug: string | null;
  content: string;
  serverUrl = environment.apiUrl;
  landingdetail: string;

  constructor(private resourceService: ResourceService, public router: Router , private route: ActivatedRoute,  public meta: Meta, public title: Title) {
      // tslint:disable-next-line: only-arrow-functions
         this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };

   }

  ngOnInit() {

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

  this.title.setTitle('Merino Services Limited | Brochures and Presentations');
  this.meta.updateTag({name: 'description', content:''}, 'name="description"');
  this.meta.updateTag({name: 'keywords', content:''});


    this.resourceService.getBrochureLandingPage(this.countrySlug).subscribe(c => {

      // tslint:disable-next-line: no-string-literal
      this.content = c['detail'];
      this.landingdetail = c['detail']['detail'];
      this.serverUrl = this.serverUrl;
      this.countrySlug = this.countrySlug;
  });


  }


}
