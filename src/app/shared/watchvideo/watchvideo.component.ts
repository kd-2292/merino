import { Component, OnInit, Input , OnChanges, SimpleChanges, ChangeDetectionStrategy   } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './../../common.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MerinohelperService } from './../../merinohelper.service';
 // tslint:disable-next-line: align
 import { captchaValidator } from '../../validators/captcha.validators';
import { WebinarService } from 'src/app/webinars/webinar.service';
import { DomSanitizer } from '@angular/platform-browser';



 // tslint:disable-next-line: align




@Component({
  selector: 'app-watchvideo',
  templateUrl: './watchvideo.component.html',
  styleUrls: ['./watchvideo.component.scss']
})
export class WatchvideoComponent  implements OnChanges , OnInit {



  countrySlug: string;
  registerForm: FormGroup;
  customNaviageUrl: string;
  captcha: string;
  showFooterForm = true;
  submitted = false;
  hidePdfForm = false;

  @Input() pastwebid: string;
  @Input() pastvideo: string;


  // tslint:disable-next-line: max-line-length
  constructor(private commonService: CommonService, private webinarService: WebinarService, public router: Router , private route: ActivatedRoute, private formBuilder: FormBuilder, private merinoHelper: MerinohelperService,  public sanitizer: DomSanitizer) {



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
            webinar_id: ['', Validators.required],
            confirm: ['', Validators.required],
            validCaptcha : [],
            captcha: ['', [Validators.required, captchaValidator]]
          });
          this.registerForm.controls['validCaptcha'].setValue(this.captcha);

      }


      //====Reset Form Data

   
   ngOnChanges(changes: SimpleChanges) {

    
        if (changes['pastwebid'].firstChange ==true) {
            let variableChange = changes['pastwebid'];
            if(variableChange.currentValue){
               
                this.checkwatchwebinar(); 
            }
            //do something with variableChange.currentValue
        }
    }

    checkwatchwebinar()
     {
        if(localStorage.getItem("watchwebinar") != null)
        {
          
             this.hidePdfForm = true;
        }
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
        //firstElementWithError.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }


       this.merinoHelper.loaderAdd();

       //console.table(this.registerForm.value);
      //===Reset form

        this.webinarService.pastwebinarregister(this.registerForm.value).subscribe(
        fileData => {
             localStorage.setItem("watchwebinar", "true");
             this.hidePdfForm = true;
             this.merinoHelper.loaderRemove();

         },
        err => console.log(err)
      );
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      }


}
