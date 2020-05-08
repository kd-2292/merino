import { Injectable } from '@angular/core';
import { ServiceModel } from './../model/service/serviceModel';
import {  Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { map, catchError, timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  serviceLanding = environment.apiUrl + 'api/service/landing';
  serviceDetial = environment.apiUrl + 'api/service/detail';
  serviceFooter = environment.apiUrl + 'api/service/footer';


  constructor(private http: HttpClient) { }

  getLandingPage(countrySlug: string, laning: number): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.serviceLanding + '?countrySlug=' + countrySlug + '&landing=' + laning)
    .pipe(catchError(this.handelError));;
  }

  getDetailPage(countrySlug: string, slug: string): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.serviceDetial + '/' + slug + '?countrySlug=' + countrySlug )
    .pipe(catchError(this.handelError));
  }

  getServiceFooterData(countrySlug: string, slug: string): Observable<any[]> {
    return this.http.get<any[]>(this.serviceFooter + '/' + slug + '?countrySlug=' + countrySlug )
    .pipe(catchError(this.handelError));
  }

  private handelError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){

      console.error('Client side error: ', errorResponse.error.message);

    }else{

        console.error('Server side error: ', errorResponse);
    }

    return throwError('there is a problem with the server');

  }

}
