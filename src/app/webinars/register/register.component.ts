import { Router , Params, ActivatedRoute, ɵangular_packages_router_router_k } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WebinarService } from './../webinar.service';
import { environment } from 'src/environments/environment';
import { List } from './../../model/webinar/list';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, NgForm } from '@angular/forms';
import { captchaValidator } from '../../validators/captcha.validators';
import { MerinohelperService } from './../../merinohelper.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nrSelect = 91;

  slug: string;
  webinarID: any;
  detail: any;
  webtitle: string;
  countries: any;
  countriesDetail: any;
  serverUrl = environment.imagePath;
  confirmed: boolean;
  captcha: string;
  countrySlug: string | null;
  customNaviageUrl: string;
  // tslint:disable-next-line: variable-name
  is_error = false;
  validCaptcha: any;
  confirmCaptcha: any;
  setMessage: boolean;

  formData: any;

  webinarRegisterForm: FormGroup;
  submitted = false;
  array1: any;

  // tslint:disable-next-line: max-line-length
  constructor(
    public router: Router, 
    private webinarService: WebinarService, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private merinoHelper: MerinohelperService, 
    public meta: Meta, 
    public title: Title) {

            this.captcha = this.merinoHelper.randomString(6);
   }


  ngOnInit() {

        this.slug = this.route.snapshot.paramMap.get('slug');
        this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
        if (this.countrySlug == null) {
           this.customNaviageUrl = '/webinar/thank-you.html';
       } else {
        this.customNaviageUrl = '/' + this.countrySlug + '/webinar/thank-you.html';
       }

        this.webinarInfo( this.slug) ;


  }

  webinarInfo(slug: string) {

         this.merinoHelper.loaderAdd();

         this.webinarService.getWebinarDetail(slug, this.countrySlug).subscribe( data => {

          // console.log(data);
          this.detail = data["data"];
          this.webinarID = this.detail._id;
          this.webtitle = this.detail.title;
          this.countries = data['countries'];
          this.webinarID = this.detail._id;
          // this.meta.updateTag({ name: 'description', content: this.detail.seo_description });
          this.title.setTitle(this.detail.seo_title);

          this.meta.updateTag({name: 'description', content: this.detail.seo_description }, 'name="description"');
          this.meta.updateTag({name: 'keywords', content: this.detail.seo_keyword});
          this.serverUrl = this.serverUrl;
          this.merinoHelper.loaderRemove();

          //console.log('web id ' + this.webinarID);
          // getFormData Here
          this.webinarService.getFormData(this.webinarID).subscribe(doc => {
           // console.log(doc);
            this.formData = doc;
          });
    },
    (error) => {
           console.log(error.status);
           this.is_error = true;
      });

  }




  contactkeypress(e: any) {

    if ( e.which == 43 || e.which == 45) {
        return true;
    } else {
          if (e.which > 58 || (e.which > 30 && e.which < 48)) {
              return false;
          }
    }
  }


  refCaptcha() {

    this.captcha = this.merinoHelper.randomString(6);

  }

  dataChanged(newObj) {
    
    //countries
    this.webinarService.getCountryData(newObj).subscribe(response => {
      this.countriesDetail = response;
    },
    err => console.log(err)
    );

  }


  onSubmit(form:NgForm) {

    this.submitted = true;
    if(form.invalid) {
      this.setMessage = true;
      return;
    }

    this.merinoHelper.loaderAdd();

    this.webinarService.postRegisterData(form.value).subscribe(response => {
          localStorage.setItem('key_webid', form.value.webinar_id);
          form.reset();
          this.router.navigate([this.customNaviageUrl], { queryParams: { message: this.webtitle } });
          this.merinoHelper.loaderRemove();
          this.submitted = false;
          console.log(response);
          
        },
        err => console.log(err)
    );
  
  }


}
