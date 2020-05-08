import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
// tslint:disable-next-line: quotemark
import { MerinohelperService } from './merinohelper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'merinoangular';

  constructor(public router: Router, private merinoHelper: MerinohelperService) {


  	 router.events.pipe(
    filter(event => event instanceof NavigationEnd)  
  ).subscribe((event: NavigationEnd) => {
  	this.merinoHelper.loaderFn();
  });

  }

}
