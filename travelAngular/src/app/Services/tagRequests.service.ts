import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TagRequest } from '../Models/TagRequest';

// const ApiUrl = 'http://'
// const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"
import { ApiUrl } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TagRequestsService {
  getTagRequest(id: string) {
    return this._http.get(`${ApiUrl}/TagRequest/${id}`, { headers: this.getHeaders()});
  }

  constructor(private _http: HttpClient) { }

  getTagRequests() {
    return this._http.get(`${ApiUrl}/TagRequest`, { headers: this.getHeaders() });
  };
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  acceptTagRequest(id: string) {
    return this._http.put(`${ApiUrl}/TagRequest/${id}`,{},{ headers: this.getHeaders() });
  }

  createTagRequest(tagRequest: TagRequest, PlaceId: string) {
    var model = {
      TagRequestName : tagRequest.TagRequestName,
      TagRequestDate: "4/18/19",
      TagRequestPlace : PlaceId
    };
    console.log(model);
    return this._http.post(`${ApiUrl}/TagRequest`, model, { headers: this.getHeaders()});
  }

  deleteTagRequest(id: string) {
    return this._http.delete(`${ApiUrl}/TagRequest/${id}`, {headers: this.getHeaders()});
  }
}
