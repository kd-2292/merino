import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { retry, catchError, timeout } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  menuList = environment.apiUrl + 'api/menu';
  footerMenuList = environment.apiUrl + 'api/menu/footermenu';
  posdemoreq = environment.apiUrl + 'api/menu/posdemoreq';
  postSendQuery = environment.apiUrl + 'api/menu/postsendquery';
  countryListUrl = environment.apiUrl + 'api/menu/country';
  careerUrl = environment.apiUrl + 'api/career/job';
  searchUrl = environment.apiUrl + 'api/menu/search';
  companyUrl = environment.apiUrl + 'api/menu/company';
  chairmanUrl = environment.apiUrl + 'api/menu/chairman';
  getClientUrl = environment.apiUrl + 'api/menu/client';
  globalPresence = environment.apiUrl + 'api/menu/global-presence';
  getContactDetailUrl = environment.apiUrl + 'api/menu/contact-us';
  postApplyData = environment.apiUrl + 'api/menu/postcareerdata';
  postPdfFormUrl = environment.apiUrl + 'api/menu/savepdfinfo';
  postReqCallFormUrl = environment.apiUrl + 'api/menu/savereqcalldata';
  upcommingMyWebinar = environment.apiUrl + 'api/menu/upcommingwebinar';
  upcommingwebinarbysection = environment.apiUrl + 'api/menu/upcommingwebinarbysection';
  seopageUrl = environment.apiUrl + 'api/menu/seopage';
  thankyouContentUrl = environment.apiUrl + 'api/thankyou/showthankyoucontent';
  getAddressIP = environment.apiUrl + 'api/menu/showaddress';


  constructor(private http: HttpClient) { }

  getThankYouContent(token: string ): Observable<any[]> {
    return this.http.get<any[]>(this.thankyouContentUrl + '/' + token)
    .pipe(timeout(3000));
  }

  getAddressToIp(): Observable<any[]> {
    return this.http.get<any[]>(this.getAddressIP).pipe(timeout(4000));
    
  }


  getMenu(): Observable<any[]> {
    return this.http.get<any[]>(this.menuList).pipe(timeout(4000));
    
  }

  // getFooterMenu(): Observable<any[]> {
  //   return this.http.get<any[]>(this.footerMenuList, {observe: 'body'});
  // }

  getFooterMenu(): Observable<any[]> {
    return this.http.get<any[]>(this.footerMenuList).pipe(timeout(4000));
  }

  postDemoReq(formData: any) {
    return this.http.post(this.posdemoreq , formData, httpOptions);
  }

  countryList(): Observable<any[]> {
    return this.http.get<any[]>(this.countryListUrl).pipe(timeout(4000));
  }

  postSendQueryData(formData: any) {
    return this.http.post(this.postSendQuery , formData, httpOptions);
  }

  getCareerJob(countrySlug: string): Observable<any[]> {
    return this.http.get<any[]>(this.careerUrl + '/' + countrySlug).pipe(timeout(4000));
  }

  getSearch(query: string, countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.searchUrl + '/' + query + '?countrySlug=' + countrySlug ).pipe(timeout(4000));
  }

  getCompany(countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.companyUrl + '?countrySlug=' + countrySlug).pipe(timeout(4000));
  }

  getChairman(countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.chairmanUrl + '?countrySlug=' + countrySlug).pipe(timeout(4000));
  }

  getglobalPresence(countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.globalPresence + '?countrySlug=' + countrySlug).pipe(timeout(4000));
  }

  getContactDetail(countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.getContactDetailUrl + '?countrySlug=' + countrySlug).pipe(timeout(4000));
  }

  getClient(countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.getClientUrl + '?countrySlug=' + countrySlug).pipe(timeout(4000));
  }

  postCareerData(formData: any) {
    return this.http.post(this.postApplyData , formData, { headers }).pipe(timeout(4000));
  }

  postPdfFormData(formdata: any) {
    return this.http.post(this.postPdfFormUrl , formdata , httpOptions).pipe(timeout(4000));
  }

  postRequestCallFormData(formdata: any) {
    return this.http.post(this.postReqCallFormUrl , formdata , httpOptions);
  }

   myupcommingnewwebinar(countrySlug: string ): Observable<any[]> {
    return this.http.get<any[]>(this.upcommingMyWebinar + '?countrySlug=' + countrySlug).pipe(timeout(4000));
  }

    myupcommingnewwebinarbysection(countrySlug: string, id: string, section: string  ): Observable<any[]> {
    return this.http.get<any[]>(this.upcommingwebinarbysection + '?countrySlug=' + countrySlug + '&id=' + id + '&section=' + section).pipe(timeout(4000));
  }

   seoget(page: string  ): Observable<any[]> {
    return this.http.get<any[]>(this.seopageUrl + '/' + page).pipe(timeout(4000));
  }

  // downloadPDF(url: string): any {
  //   const options = { responseType: ResponseContentType.Blob  };
  //   return this.http.get(url, options).map(
  //   (res) => {
  //       return new Blob([res.blob()], { type: 'application/pdf' });
  //   });
  // }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error client side: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nError Server side: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
