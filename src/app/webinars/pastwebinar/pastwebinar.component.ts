import { Router , Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WebinarService } from './../webinar.service';
import { environment } from 'src/environments/environment';
import { List } from './../../model/webinar/list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { captchaValidator } from '../../validators/captcha.validators';
import { MerinohelperService } from './../../merinohelper.service';
import { Meta, Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';






@Component({
 selector: 'app-pastwebinar',
  templateUrl: './pastwebinar.component.html',
  styleUrls: ['./pastwebinar.component.scss']
})
export class PastwebinarComponent implements OnInit {

  slug: string;
  detail: any;
  countries: any;
  serverUrl = environment.apiUrl;
  confirmed: boolean;
  captcha: string;
  countrySlug: string | null;
  customNaviageUrl: string;
  hideform = false; 

    webinarRegisterForm: FormGroup;
    submitted = false;

  // tslint:disable-next-line: max-line-length
  constructor(public router: Router, private webinarService: WebinarService , private route: ActivatedRoute, private formBuilder: FormBuilder, private merinoHelper: MerinohelperService, public meta: Meta, public title: Title, public sanitizer: DomSanitizer)
   {

    this.captcha = this.merinoHelper.randomString(6);

   }




  ngOnInit() {

       this.slug = this.route.snapshot.paramMap.get('slug');
       this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
       if(this.countrySlug == null){
           this.customNaviageUrl ='/webinar/thank-you.html';
       } else {
        this.customNaviageUrl = '/'+this.countrySlug+'/webinar/thank-you.html';
       }

      //  console.log(this.route.snapshot.paramMap.get('countryslug'));
      //  console.log(this.route.snapshot.paramMap.get('slug'));

       // tslint:disable-next-line: align
       this.webinarInfo( this.slug) ;

       this.webinarRegisterForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: [],
          company: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          country: ['', Validators.required],
          contact: ['', Validators.required],
          confirm: ['', Validators.required],
          validCaptcha : [],
          captcha: ['', [Validators.required, captchaValidator]],
          webinar_id: ['', Validators.required]
        });

        // tslint:disable-next-line: align
        this.webinarRegisterForm.controls['validCaptcha'].setValue(this.captcha);
  }

  webinarInfo(slug: string) {

         this.merinoHelper.loaderAdd();

            this.webinarService.getWebinarDetail(slug, this.countrySlug).subscribe( data => {
               this.detail = data['data'];
               this.countries = data['countries'];
               //this.meta.updateTag({ name: 'description', content: data['seo_description'] });
               this.title.setTitle(data['data']['seo_title']);
               this.serverUrl = this.serverUrl;
               this.merinoHelper.loaderRemove();
       });


  }


  get f() { return this.webinarRegisterForm.controls; }


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


  refCaptcha()
   {

     this.captcha = this.merinoHelper.randomString(6);
     this.webinarRegisterForm.controls['validCaptcha'].setValue(this.captcha);

   }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.webinarRegisterForm.invalid) {

      const firstElementWithError = document.querySelector('input.ng-invalid');
      if (firstElementWithError) {
        firstElementWithError.scrollIntoView({ behavior: 'smooth' });
        this.merinoHelper.customFormScroll(-100);
      }

        return;
    }

    this.merinoHelper.loaderAdd();

//postRegisterData
    this.webinarService.pastwebinarregister(this.webinarRegisterForm.value).subscribe(
      response => {
                this.webinarRegisterForm.reset();
                 this.hideform=true;
                //this.router.navigate([this.customNaviageUrl]);
                   this.merinoHelper.loaderRemove();
                  this.merinoHelper.webinarwatchvideo();

        },
      err => console.log(err)
    );
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.webinarRegisterForm.value))
  }

}
