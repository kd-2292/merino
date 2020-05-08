import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AllianceModel } from './model/alliance/allianceModel';



@Injectable({
  providedIn: 'root'
})
export class AllianceService {

  allianceList = environment.apiUrl + 'api/alliance/list';
  allianceDetial = environment.apiUrl + 'api/alliance/detail';


  constructor(private http: HttpClient) { }


  getListPage(countrySlug: string): Observable<AllianceModel[]> {
    return this.http.get<AllianceModel[]>(this.allianceList + '?countrySlug=' + countrySlug);
  }


  getDetailPage(countrySlug: string, slug: string): Observable<AllianceModel[]> {
    return this.http.get<AllianceModel[]>(this.allianceDetial + '/' + slug + '?countrySlug=' + countrySlug );
  }

}
