import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootuserService {

  readonly baseURL = '/api';

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.baseURL+"/root/getlist");
  }
  promoteUser(item){
    return this.http.post(this.baseURL+'/root/promote',item);
  }
  demoteUser(item){
    return this.http.post(this.baseURL+'/root/demote',item);
  }

}
