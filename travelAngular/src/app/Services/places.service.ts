import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from '../Models/Place';

// const ApiUrl = "http://127.0.0.1:52366/api";
const ApiUrl = "http://localhost:52366/api";
// const ApiUrl = "http://192.168.1.162:52366/api";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _http: HttpClient) { }

  getPlaces() {
    return this._http.get(`${ApiUrl}/place`); //*, { headers: this.getHeaders() });
  }
//if needing Authorization
   private getHeaders() {
     return new HttpHeaders().set('Authorization', `Bearer $(localStorage.getItem('id_token')}`);
   }

  getPlace(id: string) {
    return this._http.get(`${ApiUrl}/place/${id}`);
  }

  createPlace(place: Place) {
    return this._http.post(`${ApiUrl}/Places`, place)
  }
}
