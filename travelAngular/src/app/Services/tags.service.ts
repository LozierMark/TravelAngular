import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"
const ApiUrl = "http://localhost:52366/api";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private _http: HttpClient) { }

  getTags() {
    return this._http.get(`${ApiUrl}/tag`)
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
