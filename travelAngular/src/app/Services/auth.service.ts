import { Injectable } from '@angular/core';
import { RegisterUser } from '../Models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../Models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs'
import { getLocaleMonthNames } from '@angular/common';


// const ApiUrl = "http://localhost:52366";
const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${ApiUrl}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
      
    return this._http.post(`${ApiUrl}/token`, str).subscribe(
      (token: Token) => {
        localStorage.setItem('id_token', token.access_token);
        this.isLoggedIn.next(true);
        this._router.navigate(['/']);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

    this._http.post(`${ApiUrl}/api/Account/Logout`, {headers: authHeader } ) ;
    this._router.navigate(['/login']);
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false)); }

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

    return this._http.get(`${ApiUrl}/api/Account/UserInfo`, { headers: authHeader });
  }
}
