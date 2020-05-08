import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../_authService/auth-token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

    corsDomain = environment.apiUrl;
    // tslint:disable-next-line: variable-name
    constructor(public _authToken: AuthTokenService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authtoken = this._authToken.getToken();

        let headers: HttpHeaders = new HttpHeaders();
        // headers = headers.append('Access-Control-Allow-Origin', this.corsDomain);
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers = headers.append('Access-Control-Allow-Headers', 'Orgin, X-Requested-with, Content-Type, Accept');
        headers = headers.append('Authorization', 'Bearer ' + authtoken);

        const cloned = request.clone({
              headers
          });
        return next.handle(cloned);

    }


}
