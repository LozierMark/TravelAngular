import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagRequest } from '../Models/TagRequest';

// const ApiUrl = 'http://'
const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"

@Injectable({
  providedIn: 'root'
})
export class TagRequestsService {
  getTagRequest(id: string) {
    return this._http.get(`${ApiUrl}/TagRequest/${id}`, { headers: this.getHeaders()});
  }

  constructor(private _http: HttpClient) { }

  getTagRequests() {
    return this._http.get(`${ApiUrl}/TagRequest`)
  };
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createTagRequest(tagRequest: TagRequest, PlaceId: string) {
    return this._http.post(`${ApiUrl}/TagRequest`, { TagRequestName : tagRequest.TagRequestName, TagRequestDate: "", TagRequestPlace : PlaceId}, { headers: this.getHeaders()});
  }

  deleteTagRequest(id: string) {
    return this._http.delete(`${ApiUrl}/TagRequests/${id}`, {headers: this.getHeaders()});
  }
}
