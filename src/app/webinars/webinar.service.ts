import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { List } from './../model/webinar/list';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class WebinarService {

  webinarList = environment.apiUrl + 'api/webinar/list';
  webinarDetail = environment.apiUrl + 'api/webinar/detail';
  webinarPost = environment.apiUrl + 'api/webinar/postregister';
  webinarPastPost = environment.apiUrl + 'api/webinar/pastwebinarregister';
  webinarForm =  environment.apiUrl + 'api/webinar/webformdata/';
  webinarGetCountryWithCode =  environment.apiUrl + 'api/webinar/webcountrycode/';
  // webinarGetCountryWithCode =  'http://127.0.0.1:8000/api/webinar/webcountrycode/';

  constructor(private http: HttpClient) { }

  getFormData(forData: any) {
    return this.http.get<List[]>(this.webinarForm + forData);
  }

  getCountryData(countryCode: any) {
    return this.http.get<any>(this.webinarGetCountryWithCode + countryCode);
  }

  getWebinars(countrySlug): Observable<List[]> {
    return this.http.get<List[]>(this.webinarList + '?countrySlug=' + countrySlug);
  }

  getWebinarDetail(webinarSlug: string, countrySlug: string): Observable<List[]> {
    return this.http.get<List[]>(this.webinarDetail + '/' + webinarSlug + '?countrySlug=' + countrySlug);
  }

  postRegisterData(formData: any) {
    return this.http.post(this.webinarPost , formData, httpOptions);
  }

  pastwebinarregister(formData: any) {
    return this.http.post(this.webinarPastPost , formData, httpOptions);
  }

}
