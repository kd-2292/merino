import { Component, OnInit } from '@angular/core';
import { captchaValidator } from '../../validators/captcha.validators';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../common.service';
import { MerinohelperService } from './../../merinohelper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-apply-online',
  templateUrl: './apply-online.component.html',
  styleUrls: ['./apply-online.component.scss']
})
export class ApplyOnlineComponent implements OnInit {

  countrySlug: string;
  softwareMenu: any = [];
  serviceMenu: any = [];
  industryMenu: any = [];
  careerForm: FormGroup;
  serverUrl = environment.apiUrl;
  customNaviageUrl: string;
  countryList: any[];
  captcha: string;
  showFooterForm = true;
  submitted = false;
  jobs: any[];
  jobId: string;
  Arr = Array; //Array type captured in a variable
  num: number ;
  selectedFile: File;


 // tslint:disable-next-line: max-line-length
 constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute, private formBuilder: FormBuilder, private merinoHelper: MerinohelperService, location: Location ) {

  // tslint:disable-next-line: only-arrow-functions
 this.router.routeReuseStrategy.shouldReuseRoute = function() {
   return false;
};

 this.captcha = this.merinoHelper.randomString(6);
 this.num = 20;

}

  ngOnInit() {

           this.manageCountry();
           this.builderForm();
           this.careerJob();

           // tslint:disable-next-line: no-string-literal
           this.careerForm.controls['validCaptcha'].setValue(this.captcha);

  }

  manageCountry() {
        this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
        this.jobId = this.route.snapshot.paramMap.get('slug');

        //alert(this.countrySlug);

        if (this.countrySlug == null) {
          this.customNaviageUrl = '/thank-you.html';
        } else {
        this.customNaviageUrl = '/' + this.countrySlug + '/thank-you.html';
        }
   }

  builderForm() {
        this.careerForm = this.formBuilder.group({
        designation: ['', Validators.required],
        name: ['', Validators.required],
        birthday: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        isd: [''],
        std: [''],
        phoneno: ['', Validators.required],
        mobileisd: [''],
        mobile: ['', Validators.required],
        professional_category: ['', Validators.required],
        industry: ['', Validators.required],
        work_experience_year: ['', Validators.required],
        work_experience_month: ['', Validators.required],
        related_experience_year: [''],
        related_experience_month: [''],
        ctc: ['', Validators.required],
        qualification: ['', Validators.required],
        degree: ['', Validators.required],
        university: ['', Validators.required],
        resume: ['', Validators.required],
         validCaptcha : [],
         captcha: ['', [Validators.required, captchaValidator]],
         confirm: ['', Validators.required]
        });
  }

  setConditionalValidators() {

          const phoneno = this.careerForm.get('phoneno').value;
          const mobile = this.careerForm.get('mobile').value;

          if (phoneno) {
           // console.log('null mobile')
            this.careerForm.get('mobile').setValidators(null);
            this.careerForm.get('mobile').updateValueAndValidity();
          } else {
           // console.log('not null mobile')
            this.careerForm.get('mobile').setValidators([Validators.required]);
            this.careerForm.get('mobile').updateValueAndValidity();
          }

          if (mobile) {
            // console.log('null phone')
            this.careerForm.get('phoneno').setValidators(null);
            this.careerForm.get('phoneno').updateValueAndValidity();
          } else {
            // console.log('not null phone')
            this.careerForm.get('phoneno').setValidators([Validators.required]);
            this.careerForm.get('phoneno').updateValueAndValidity();
          }

  }

  careerJob() {
       // tslint:disable-next-line: align
    this.commonService.getCareerJob(this.countrySlug).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
        this.jobs = data['jobs'];
        this.serverUrl = this.serverUrl;
        this.countrySlug = this.countrySlug;
      });
   }

  get f() { return this.careerForm.controls; }

  refCaptcha() {

     this.captcha = this.merinoHelper.randomString(6);
     this.careerForm.controls.validCaptcha.setValue(this.captcha);

   }




  contactkeypress(e: any) {
    if ( e.which == 43 || e.which == 45) {
         return true;
    // tslint:disable-next-line: one-line
    }else{
          if (e.which > 58 || (e.which > 30 && e.which < 48)) {
              return false;
          }
    }
  }

  onFileChanged(event)
  {

        if(event.target.files.length > 0 )
        {
           const resmueVal = event.target.files[0];
           //this.careerForm.get('resume').setValue(resmueVal);

           this.careerForm.controls['resume'].setValue(resmueVal);
 
        }
  }


onSubmitCareer(): void {

    this.setConditionalValidators();

    this.submitted = true;
    if (this.careerForm.invalid) {

      const firstElementWithError = document.querySelector('input.ng-invalid');
      if (firstElementWithError) {
        //firstElementWithError.scrollIntoView({ behavior: 'smooth' });
        // this.merinoHelper.customFormScroll(-120);
      }
      return;
    }
     this.merinoHelper.loaderAdd();


    // tslint:disable-next-line: align
  const formData = new FormData();
  formData.append('designation', this.careerForm.get('designation').value);
  formData.append('name', this.careerForm.get('name').value);
  formData.append('birthday', this.careerForm.get('birthday').value);
  formData.append('email', this.careerForm.get('email').value);
  formData.append('isd', this.careerForm.get('isd').value);
  formData.append('std', this.careerForm.get('std').value);
  formData.append('phoneno', this.careerForm.get('phoneno').value);
  formData.append('mobileisd', this.careerForm.get('mobileisd').value);
  formData.append('mobile', this.careerForm.get('mobile').value);
  formData.append('professional_category', this.careerForm.get('professional_category').value);
  formData.append('industry', this.careerForm.get('industry').value);
  formData.append('work_experience_year', this.careerForm.get('work_experience_year').value);
  formData.append('work_experience_month', this.careerForm.get('work_experience_month').value);
  formData.append('related_experience_year', this.careerForm.get('related_experience_year').value);
  formData.append('related_experience_month', this.careerForm.get('related_experience_month').value);
  formData.append('ctc', this.careerForm.get('ctc').value);
  formData.append('qualification', this.careerForm.get('qualification').value);
  formData.append('degree', this.careerForm.get('degree').value);
  formData.append('university', this.careerForm.get('university').value);
  formData.append('resume', this.careerForm.get('resume').value);


 // tslint:disable-next-line: align
 this.commonService.postCareerData(formData).subscribe(
         response => {
           console.log('hi');
          this.router.navigate([this.customNaviageUrl], { queryParams: { message: "Congratulations! <br>Your application has been submitted." } });
           this.merinoHelper.loaderRemove();
           this.submitted = false;
        },

    );
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.careerForm.value))

    this.router.navigate([this.customNaviageUrl], { queryParams: { message: "Congratulations!<br> Your application has been submitted." } });
    this.merinoHelper.loaderRemove();
    this.submitted = false;


  }



}
