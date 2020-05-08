import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ResourceService {


  whitepaper = environment.apiUrl + 'api/whitepaper/detail';
  brochureLanding = environment.apiUrl + 'api/brochure/landing';
  presentationLanding = environment.apiUrl + 'api/presentation/landing';



  constructor(private http: HttpClient) { }

  getWhitePaperDetail(countrySlug: string): Observable<any[]> {
    return this.http.get<any[]>(this.whitepaper + '?countrySlug=' + countrySlug);
  }

  getBrochureLandingPage(countrySlug: string): Observable<any[]> {

    return this.http.get<any[]>(this.brochureLanding + '?countrySlug=' + countrySlug);
  }



  getPresentationLandingPage(countrySlug: string): Observable<any[]> {

  return this.http.get<any[]>(this.presentationLanding + '?countrySlug=' + countrySlug);
}




}
