import { Injectable } from '@angular/core';
import { SoftwareModel } from './../model/software/softwareModel';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  softwareLanding = environment.apiUrl + 'api/software/landing';
  softwareDetial = environment.apiUrl + 'api/software/detail';
  softwareFooter = environment.apiUrl + 'api/software/footer';


  constructor(private http: HttpClient) { }


  getLandingPage(countrySlug: string, laning: number): Observable<SoftwareModel[]> {
    return this.http.get<SoftwareModel[]>(this.softwareLanding + '?countrySlug=' + countrySlug + '&landing=' + laning);
  }


  getDetailPage(countrySlug: string, slug: string): Observable<SoftwareModel[]> {
    return this.http.get<SoftwareModel[]>(this.softwareDetial + '/' + slug + '?countrySlug=' + countrySlug);
  }

  getSoftwareFooterData(countrySlug: string, slug: string): Observable<any[]> {
    return this.http.get<any[]>(this.softwareFooter + '/' + slug + '?countrySlug=' + countrySlug );
  }


}
