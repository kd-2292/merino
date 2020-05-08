import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // tslint:disable-next-line: variable-name
  _blogUrl = environment.apiUrl;


  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }


  getBlogsList(): Observable<any> {

      return this._http.get<any>(this._blogUrl + 'api/blog/list');
  }

  getBlogDetail(id: any): Observable<any> {

    return this._http.get<any>(this._blogUrl + 'api/blog/detail/' + id);

  }


}
