import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './../../common.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MerinohelperService } from './../../merinohelper.service';
 // tslint:disable-next-line: align
 import { captchaValidator } from '../../validators/captcha.validators';
 // tslint:disable-next-line: align


@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.scss']
})
export class RequestDemoComponent implements OnInit {


  currentLocation: any;
  countrySlug: string;
  softwareMenu: any = [];
  serviceMenu: any = [];
  industryMenu: any = [];
  registerForm: FormGroup;
  customNaviageUrl: string;
  captcha: string;
  showFooterForm = true;
  submitted = false;

  // tslint:disable-next-line: max-line-length
  constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute, private formBuilder: FormBuilder, private merinoHelper: MerinohelperService) {

    this.captcha = this.merinoHelper.randomString(6);
   }

  ngOnInit() {


          this.countrySlug = this.route.snapshot.paramMap.get('countryslug');

          if(this.countrySlug == null){

            this.customNaviageUrl ='/thank-you.html';

        } else {

         this.customNaviageUrl = '/'+this.countrySlug+'/thank-you.html';

        }

           // tslint:disable-next-line: align
           this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            contact: ['', Validators.required],
            message: ['', Validators.required],
            validCaptcha : [],
            captcha: ['', [Validators.required, captchaValidator]],
            confirm: ['', Validators.required]
          });

          this.commonService.getAddressToIp().subscribe(doc =>{
            this.currentLocation = doc;
            //console.log(this.currentLocation);
          },
          err =>{
            console.log(err);
          });


          this.commonService.getMenu().subscribe(data => {
            this.softwareMenu = data['software'];
            this.serviceMenu = data['service'];
            this.industryMenu = data['industry'];
            this.countrySlug = this.countrySlug;
            //console.log("menu - " + this.industryMenu);
          });

          this.registerForm.controls['validCaptcha'].setValue(this.captcha);

      }


      get f() { return this.registerForm.controls; }



      refCaptcha()
      {

      this.captcha = this.merinoHelper.randomString(6);
      // tslint:disable-next-line: no-string-literal
      this.registerForm.controls['validCaptcha'].setValue(this.captcha);

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


      onSubmit(): void {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {

      const firstElementWithError = document.querySelector('input.ng-invalid');
      if (firstElementWithError) {
        //scroll to error
        //firstElementWithError.scrollIntoView({ behavior: 'smooth' });
      }
        return;
      }

      this.merinoHelper.loaderAdd();

      //===Reset form

      this.commonService.postDemoReq(this.registerForm.value).subscribe(
       response => {
              this.router.navigate([this.customNaviageUrl], { queryParams: { message: "Thanks for submitting your details, our business consultant will get back to you shortly." } });

              this.merinoHelper.loaderRemove();

              this.submitted = false;

     },
        err => console.log(err)
      );
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      }


}
