import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  ssToken = 'ABCDEFGHIJKLMNOPQRSTUV.WXYZabcdefghij245klmnopqr.stuvwxyz0123456789';

  setToken(){
    localStorage.setItem('merinoToken', this.ssToken);
  }

  getToken(){
    return localStorage.getItem('merinoToken');
  }



}
