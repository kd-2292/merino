import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IndustryService } from './../industry.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { IndustryModel } from './../../model/industry/industryModel';
import { CommonService } from './../../common.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnChanges  {

  @Input() parenkeyid : string;

  countrySlug: string | null;
  softwareSlug: string;
  content: string;
  softwareList: any[];
  serviceList: any[];
  serverUrl = environment.apiUrl;
  casestudy_banner: string;
  casestudy_pdf: string;
  casestudy_industry: string;
  casestudy_name: string; 
  casestudy_detail: string; 
  checkPdfUser = false;
  downloadpdfUrl: string;


   webinarData: any[];
   upwebinarNew: any[];
   webinarSlug: string;
   webinarTtile: string; 
   webinarDate: string; 
   webinarStarTime: string; 
   webinarEndTime: string; 
   webinarTimeZone: string;
   webinarBanner: string;

  constructor(private industryService: IndustryService, public router: Router , private route: ActivatedRoute, private commonService: CommonService) {

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
        this.softwareSlug = this.route.snapshot.paramMap.get('slug');
        this.industryService.getIndustriesFooterData(this.countrySlug, this.softwareSlug ).subscribe(data => {
 
         // console.table(data['casestudy']);
           this.softwareList = data['software'];
          // this.casestudy = data['casestudy'];
           this.serviceList =  data['service'];
           this.serverUrl = this.serverUrl;
           this.countrySlug = this.countrySlug;
           this.softwareSlug = this.softwareSlug;

          //console.table(data['casestudy'].industry);
            this.casestudy_banner= data['casestudy']['image'];
            this.casestudy_pdf= data['casestudy']['pdf'];
           this.casestudy_industry= data['casestudy']['industry']['name'];
            this.casestudy_name= data['casestudy']['name']; 
            this.casestudy_detail= data['casestudy']['detail']; 

            console.log(this.casestudy_banner);

      });


      this.allowPdfDownload();

  }

       webinarShow()
   {

 // tslint:disable-next-line: deprecation
     //myupcommingnewwebinarbysection
     //myupcommingnewwebinar
    
     this.commonService.myupcommingnewwebinarbysection(this.countrySlug,this.parenkeyid,'industry').subscribe(c => {

      

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
