import { Component, OnInit, Input , OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy   } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './../../common.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MerinohelperService } from './../../merinohelper.service';
 // tslint:disable-next-line: align
 import { captchaValidator } from '../../validators/captcha.validators';
 // tslint:disable-next-line: align




@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.scss']
})
export class PdfFormComponent implements OnChanges , OnInit {



  countrySlug: string;
  softwareMenu: any = [];
  serviceMenu: any = [];
  industryMenu: any = [];
  registerForm: FormGroup;
  customNaviageUrl: string;
  captcha: string;
  showFooterForm = true;
  submitted = false;
  hidePdfForm = false;

  @Input() pdfurl: string;

  // tslint:disable-next-line: max-line-length
  constructor(private commonService: CommonService, public router: Router , private route: ActivatedRoute, private formBuilder: FormBuilder, private merinoHelper: MerinohelperService) {

    this.captcha = this.merinoHelper.randomString(6);
   }

  ngOnInit() {


          this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
          if(this.countrySlug == null){
            this.customNaviageUrl ='/webinar/thank-you.html';
        } else {
         this.customNaviageUrl = '/'+this.countrySlug+'/webinar/thank-you.html';
        }

           // tslint:disable-next-line: align
           this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            contact: ['', Validators.required],
            confirm: ['', Validators.required],
            validCaptcha : [],
            captcha: ['', [Validators.required, captchaValidator]]
          });
          this.registerForm.controls['validCaptcha'].setValue(this.captcha);

      }


      //====Reset Form Data

      ngOnChanges(changes: SimpleChanges) {


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


      onDownloadPdfFile(event, pdfurl) {
            window.open(pdfurl); //Download pdf
            window.location.reload();
      }

      onSubmit(): void {

        this.submitted = true;
      // stop here if form is invalid
        if (this.registerForm.invalid) {

      const firstElementWithError = document.querySelector('input.ng-invalid');
      if (firstElementWithError) {
        firstElementWithError.scrollIntoView({ behavior: 'smooth' });
      }
      return;
      }

       this.merinoHelper.loaderAdd();


      //===Reset form

        this.commonService.postPdfFormData(this.registerForm.value).subscribe(
        fileData => {
          localStorage.setItem('pdfuser', this.registerForm.get('name').value);
              // window.open(this.pdfurl); //Download pdf
              // window.location.reload();
             this.hidePdfForm = true;
             this.merinoHelper.loaderRemove();
              this.submitted = false;
              this.registerForm.reset();

         },
        err => console.log(err)
      );
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      }


}
