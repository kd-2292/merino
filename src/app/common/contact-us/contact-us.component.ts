import { Component, OnInit } from '@angular/core';
import { captchaValidator } from '../../validators/captcha.validators';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { MerinohelperService } from './../../merinohelper.service';
import { SafeHtmlPipe } from './../../safe-html.pipe';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [ SafeHtmlPipe ]
})
export class ContactUsComponent implements OnInit {

  countrySlug: string;
  softwareMenu: any = [];
  serviceMenu: any = [];
  industryMenu: any = [];
  sendQueryForm: FormGroup;
  customNaviageUrl: string;
  countryList: any[];
  captcha: string;
  showFooterForm =true;
  submitted = false;
  contactDetail: string;
  contactInfo: any[];

 // tslint:disable-next-line: max-line-length
 constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute, private formBuilder: FormBuilder, private merinoHelper: MerinohelperService, private safeHtmlPipe: SafeHtmlPipe ) {

     // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };

    this.captcha = this.merinoHelper.randomString(6);

}

  ngOnInit() {

    window.scroll(0,10);

      this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

      if(this.countrySlug == null){
      this.customNaviageUrl ='/thank-you.html';
  } else {
   this.customNaviageUrl = '/'+this.countrySlug+'/thank-you.html';
  }

     // tslint:disable-next-line: align
     this.sendQueryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      company: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
      validCaptcha : [],
      captcha: ['', [Validators.required, captchaValidator]],
      confirm: ['', Validators.required]
    });




      this.commonService.getMenu().subscribe(data => {
    // tslint:disable-next-line: no-string-literal
      this.softwareMenu = data['software'];
      this.serviceMenu = data['service'];
      this.industryMenu = data['industry'];
      this.countrySlug = this.countrySlug;
    });

      this.sendQueryForm.controls['validCaptcha'].setValue(this.captcha);

      this.getAllCountry();
      this.getContactDetail();
  }


  get f() { return this.sendQueryForm.controls; }


  getAllCountry()
   {
        this.commonService.countryList().subscribe(c => {
           //console.table(c);
          this.countryList =c['countries'];
       });

   }




  refCaptcha()
   {

     this.captcha = this.merinoHelper.randomString(6);
     this.sendQueryForm.controls['validCaptcha'].setValue(this.captcha);

   }




  contactkeypress(e: any) {



    if( e.which == 43 || e.which == 45){

         return true;

    // tslint:disable-next-line: one-line
    }else{

          if (e.which > 58 || (e.which > 30 && e.which < 48)) {
              return false;
          }
    }

  }

  getContactDetail()
   {

    this.commonService.getContactDetail(this.countrySlug).subscribe(c => {
       this.contactInfo = c;
       this.contactDetail = this.safeHtmlPipe.transform(c['detail']);
    });

   }


  onSubmitContact(): void {


    this.submitted = true;
    // stop here if form is invalid
    if (this.sendQueryForm.invalid) {

      const firstElementWithError = document.querySelector('input.ng-invalid');
      if (firstElementWithError) {
       // firstElementWithError.scrollIntoView({ behavior: 'smooth' });
       // this.merinoHelper.customFormScroll(-100);
      }
      return;
    }

    this.merinoHelper.loaderAdd();

    this.commonService.postSendQueryData(this.sendQueryForm.value).subscribe(
       response => {
          this.router.navigate([this.customNaviageUrl],
                              { queryParams: { message: 'Your query has been submitted successfully. <br>Our team will connect with you shortly.' } });
          this.merinoHelper.loaderRemove();

          this.submitted = false;

     },

        err => console.log(err)
    );
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.sendQueryForm.value))
  }

}
