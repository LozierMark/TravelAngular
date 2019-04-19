import { Injectable, Output,EventEmitter } from '@angular/core';
import { RegisterUser } from '../Models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../Models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs'
import { getLocaleMonthNames } from '@angular/common';
//import { EventEmitter } from 'events';
import { UserInfo } from '../Models/UserInfo';


// const ApiUrl = "http://localhost:52366";
const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  // @Output() userLoggedIn: EventEmitter<any> = new EventEmitter();
  @Output() userLoggedIn: EventEmitter<any> = new EventEmitter();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${ApiUrl}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
      
    return this._http.post(`${ApiUrl}/token`, str).subscribe( (token: Token) => {
      this.isLoggedIn.next(true);
      localStorage.setItem('id_token', token.access_token);
      localStorage.setItem('userName',token.userName);
      this._http.get(`${ApiUrl}/api/Account/UserInfo`, {headers:new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem("id_token")}`)}).subscribe((userInfo:UserInfo)=>{
        localStorage.setItem('userRole',(userInfo.IsAdmin ? "Admin" : "User"));
        // TODO: Possibly add this later if needed.
        // localStorage.setItem('userId',userInfo.UserId);
      });
      this.userLoggedIn.emit();
      this._router.navigate(['/']);
    });
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
