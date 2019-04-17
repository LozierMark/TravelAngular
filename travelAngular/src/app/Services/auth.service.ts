import { Injectable } from '@angular/core';
import { RegisterUser } from '../Models/RegisterUser';
import { HttpClient } from '@angular/common/http';

const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  register(regUserData: RegisterUser) {
    return this._http.post(`${ApiUrl}/api/Account/Register`, regUserData);

  }
}
