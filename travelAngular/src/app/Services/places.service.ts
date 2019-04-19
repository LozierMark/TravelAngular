import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from '../Models/Place';
import { Observable } from 'rxjs';

// const ApiUrl = "http://127.0.0.1:52366/api";
// const ApiUrl = "http://localhost:52366/api";
// const ApiUrl = "http://192.168.1.162:52366/api";
// const ApiUrl = "http://localhost:52366/api";
const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"

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
    var k = (this._http.get(`${ApiUrl}/place/${id}`));
    k.subscribe(function(e) {console.log(e)});
    return k;
  }

  createPlace(place: Place) {
    console.log("Sending Create Request to Server");
    place.Tags=[];
    return this._http.post(`${ApiUrl}/place`, place)
  }

  editPlace(place: Place) {
    return this._http.put('${ApriUrl}/place', place, { headers: this.getHeaders()});
  }
  deletePlace(id:number) {
    return this._http.delete(`${ApiUrl}/place/${id}`, { headers: this.getHeaders() });
  }
}


