import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagRequest } from '../Models/TagRequest';

const ApiUrl = 'http://'

@Injectable({
  providedIn: 'root'
})
export class TagRequestsService {

  constructor(private _http: HttpClient) { }

  getTagRequests() {
    return this._http.get(`${ApiUrl}/tagRequest`)
  };
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createTagRequest(tagRequest: TagRequest) {
    return this._http.post(`${ApiUrl}/tagRequests`, tagRequest, { headers: this.getHeaders()});
  }
}
