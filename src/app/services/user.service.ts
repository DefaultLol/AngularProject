import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='https://localhost:44330/api/login/';
  constructor(private _http : HttpClient) { }

  login=(user:Object)=>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this._http.post(this.url+'login2',user,options);
  }

  getUser(token:string):Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token});
    let options = { headers: headers };
    return this._http.get(this.url+'',options);
  }
}
