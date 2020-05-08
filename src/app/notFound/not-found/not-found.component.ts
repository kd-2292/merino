import {Component, Inject, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  resData: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public meta: Meta, 
    public title: Title
  ) {
}

  ngOnInit() {

    this.title.setTitle('404 Page Not Found');
    this.meta.updateTag({name: 'description', content: '404 Page Not Found'});
    this.meta.updateTag({name: 'keywords', content: '404 Page Not Found'});

  }

}
