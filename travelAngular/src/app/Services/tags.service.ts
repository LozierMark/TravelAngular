import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private _http: HttpClient) { }

  getTags() {
    return this._http.get(`${ApiUrl}/Notes`)
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
