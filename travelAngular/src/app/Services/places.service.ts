import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class PlacesService {

  private ApiUrl = "192.168.1.66:52366/api";

  constructor(private _http: HttpClient) { }

  getPlaces() {
    return this._http.get(`${this.ApiUrl}/place`) //*, { headers: this.getHeaders() });
  }
//if needing Authorization
  // private getHeaders() {
  //   return new HttpHeaders().set('Authorization', `Bearer $(localStorage.getItem('id_token')}`);
  // }

  getPlace(id: string) {
    return this._http.get(`${this.ApiUrl}/place/${id}`);
  }
}
