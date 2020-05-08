import { Component, OnInit, Inject} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    public meta: Meta, 
    public title: Title
  ) { }

  ngOnInit() {

    this.title.setTitle('404 Page Not Found');
    this.meta.updateTag({name: 'description', content: '404 Page Not Found'});
    this.meta.updateTag({name: 'keywords', content: '404 Page Not Found'});

  }

}
