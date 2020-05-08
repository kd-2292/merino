import { Component, OnInit } from '@angular/core';
import { Router , Params, ActivatedRoute } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  message: string | null; 

  constructor(public router: Router, private route: ActivatedRoute) {

      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
     };

  }

  ngOnInit() {

    (function ($) {
      $(document).ready(function(){
            setTimeout(function(){
              window.location.assign("/");
            }, 5000);
    });
  })(jQuery);

    this.route.queryParams.subscribe(params => {
        this.message = params['message'];

    });

  }

}
