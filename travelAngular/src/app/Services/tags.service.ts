import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const ApiUrl = "https://hashtagtravelbackend.azurewebsites.net/api"
// const ApiUrl = "http://localhost:52366/api";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private _http: HttpClient,private _router: Router) { }

  getTags() {
    return this._http.get(`${ApiUrl}/tag`)
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  tagDelete(id) {
    this._http.delete(`${ApiUrl}/tag/${id}`, {headers:this.getHeaders()}).subscribe(()=>{
      window.location.reload();
    });
  }
  tagCreate(name_) {
    console.log(name_);
    this._http.post(`${ApiUrl}/tag`,{TagName:name_},{ headers:this.getHeaders() }).subscribe(()=>{
      window.location.reload();
    });
  }
}
