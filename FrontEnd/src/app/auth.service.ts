import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseURL = '/api';
  constructor(private http:HttpClient) { }

  getUserName(){
    return localStorage.getItem('name')
  }

   //LOGIN
   loginUser(user){
    // console.log(user);
    return this.http.post(this.baseURL+"/login",user);
  }

  //NEW USER
  newUser(user){
    console.log(user);
    return this.http.post(this.baseURL+"/register",user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  isAdmin(){
    if(localStorage.getItem('role')=='admin'){
      return true;
    }
    else
      return false;
  }
  isRoot(){
    if(localStorage.getItem('role')=='root'){
      return true;
    }
    else
      return false;
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
