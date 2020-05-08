import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServiceModel } from './../../model/service/serviceModel';
import { ServiceService } from './../service.service';
import { CommonService } from './../../common.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnChanges  {

   @Input() parenkeyid : string;
  serverUrl = environment.apiUrl;
  countrySlug: string | null;
  serviceSlug: string;
  content: string;
  softwareList: any[];
  serviceList: any[];
  industryList: any[];
  
   webinarData: any[];
   upwebinarNew: any[];
   webinarSlug: string;
   webinarTtile: string; 
   webinarDate: string; 
   webinarStarTime: string; 
   webinarEndTime: string; 
   webinarTimeZone: string;
   webinarBanner: string;

   casestudy_banner: string;
    casestudy_pdf: string;
    casestudy_service: string;
    casestudy_name: string; 
    casestudy_detail: string; 
    checkPdfUser = false;
    downloadpdfUrl: string; 

  constructor(private serviceService: ServiceService, public router: Router , private route: ActivatedRoute,
   private commonService: CommonService) {



       // tslint:disable-next-line: only-arrow-functions
       this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
     };

  }


   ngOnChanges(changes: SimpleChanges) {
   
        if (changes['parenkeyid'].firstChange ==false) {
            let variableChange = changes['parenkeyid'];
            if(variableChange.currentValue){
              this.webinarShow();
            }
            //do something with variableChange.currentValue
        }
    }

  ngOnInit() {

  	 

    this.countrySlug = this.route.snapshot.paramMap.get('countryslug');
    this.serviceSlug = this.route.snapshot.paramMap.get('slug');

    this.serviceService.getServiceFooterData(this.countrySlug, this.serviceSlug ).subscribe(data => {
 //console.table(data);
      // tslint:disable-next-line: no-string-literal
       this.softwareList = data['software'];
       this.industryList =  data['industry'];
       this.serviceList =  data['service'];
       this.webinarData = data['webinar'];
       this.serverUrl = this.serverUrl;
       this.countrySlug = this.countrySlug;
       this.serviceSlug = this.serviceSlug;

       //console.table(data['casestudy'].industry);
          this.casestudy_banner= data['casestudy']['image'];
          this.casestudy_pdf= data['casestudy']['pdf'];
          this.casestudy_service= data['casestudy']['service']['name'];
          this.casestudy_name= data['casestudy']['name']; 
          this.casestudy_detail= data['casestudy']['detail']; 
  });

      this.allowPdfDownload();
  }


  webinarShow()
   {

 // tslint:disable-next-line: deprecation
     //myupcommingnewwebinarbysection
     //myupcommingnewwebinar
    
     this.commonService.myupcommingnewwebinarbysection(this.countrySlug,this.parenkeyid,'service').subscribe(c => {

                if(Object.keys(c['data']).length >4){
                   this.upwebinarNew = c['data'];
                   this.webinarSlug= c['data']['slug'];
                   this.webinarTtile= c['data']['title']; 
                   this.webinarDate= c['data']['date']; 
                   this.webinarStarTime= c['data']['time']; 
                   this.webinarEndTime= c['data']['endtime']; 
                   this.webinarTimeZone= c['data']['timezone']['abbr']; 
                   this.webinarBanner= c['data']['banner'];
                  }
            });

   }


  allowPdfDownload() {
      if(localStorage.getItem("pdfuser") != null)
        {
             this.checkPdfUser = true;
        }
   }



  onDownloadPdf(event, path, pdfname) {

    this.downloadpdfUrl = this.serverUrl+'api/menu/getdownload?path='+path+'&name='+pdfname;
       // tslint:disable-next-line: no-trailing-whitespace

      // tslint:disable-next-line: align
      if(this.checkPdfUser === true){
        window.open(this.downloadpdfUrl); //Download pdf
      }

  }

}
