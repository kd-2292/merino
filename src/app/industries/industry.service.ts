import { IndustryModel } from './../model/industry/industryModel';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  industryLanding = environment.apiUrl + 'api/industry/landing';
  industryDetial = environment.apiUrl + 'api/industry/detail';
  industryFooter = environment.apiUrl + 'api/industry/footer';


  constructor(private http: HttpClient) { }


  getLandingPage(countrySlug: string, laning: number): Observable<IndustryModel[]> {
    return this.http.get<IndustryModel[]>(this.industryLanding + '?countrySlug=' + countrySlug + '&landing=' + laning);
  }


  getDetailPage(countrySlug: string, slug: string): Observable<IndustryModel[]> {
    return this.http.get<IndustryModel[]>(this.industryDetial + '/' + slug + '?countrySlug=' + countrySlug );
  }

  getIndustriesFooterData(countrySlug: string, slug: string): Observable<any[]> {
    return this.http.get<any[]>(this.industryFooter + '/' + slug + '?countrySlug=' + countrySlug );
  }


}
