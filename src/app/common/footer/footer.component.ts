import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../common.service';
import { ActivatedRoute, Router } from '@angular/router';
 // tslint:disable-next-line: align
 import { Location } from '@angular/common';
import { captchaValidator } from '../../validators/captcha.validators';
import { MerinohelperService } from './../../merinohelper.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { environment } from 'src/environments/environment';
declare var jQuery: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  countrySlug: string;
  softwareMenu: any = [];
  serviceMenu: any = [];
  industryMenu: any = [];
  customNaviageUrl: string;
  captcha: string;
  showFooterForm = true;

  requestCallForm: FormGroup;

  submitted = false;
  thanyouMessage = false;

 // tslint:disable-next-line: max-line-length
 constructor(
   private commonService: CommonService, 
   public router: Router , 
   private route: ActivatedRoute, 
   private formBuilder: FormBuilder, 
   private merinoHelper: MerinohelperService
   ) {

 }

 
  ngOnInit() {

    //====Load Jquery
  this.merinoHelper.customScrollAakash();

    this.captcha = this.merinoHelper.randomString(6);
    
    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    if(this.countrySlug == null){
        this.customNaviageUrl ='/webinar/thank-you.html';
    } else {
     this.customNaviageUrl = '/'+this.countrySlug+'/webinar/thank-you.html';
    }

    this.commonService.getFooterMenu().subscribe(data => {

        this.softwareMenu = data['software'];
        this.serviceMenu = data['service'];
        this.industryMenu = data['industry'];
        this.countrySlug = this.countrySlug;

      });
  
    this.requestCallForm = this.formBuilder.group({
            name: ['', Validators.required],
            contact: ['', Validators.required],
            confirm: ['', Validators.required],
            // validCaptcha : [],
            // captcha: ['', [Validators.required, captchaValidator]]
          });

  }


  get f() { return this.requestCallForm.controls; }

  refCaptcha()
  {
      this.captcha = this.merinoHelper.randomString(6);
      // tslint:disable-next-line: no-string-literal
      this.requestCallForm.controls['validCaptcha'].setValue(this.captcha);
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

  onCallSubmit(): void {

    this.submitted = true;
    if (this.requestCallForm.invalid) {
      return;
    }

    this.merinoHelper.loaderAdd();

    this.commonService.postRequestCallFormData(this.requestCallForm.value).subscribe((response) =>  {

        this.thanyouMessage = true;
        this.merinoHelper.loaderRemove();

        setTimeout(()=>{
          this.thanyouMessage = false;
          this.merinoHelper.hideReqCall();
        }, 7000);

        this.submitted = false;
        this.requestCallForm.reset();
      },
      err => console.log(err)
    );
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.requestCallForm.value))
    }



}
