import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isConnected() {
    return this.getToken() ?? null 
  }

  url = "https://localhost:7039/ApiCam/Utilisateur"
  loginURL = "https://localhost:7039/ApiCam/Login"

  constructor(
    private http : HttpClient
  ) { }

    getToken(){
    var token =   localStorage.getItem("token")
    return token;
  }

    saveToken(token : any){
      localStorage.setItem("token" , token)
  }

  login(user : any ){
    return this.http.post(this.loginURL , user)
  }


  delete(id: any) {
    return this.http.delete(this.url +'/'+id)
  }
  getAllUsers() {
    return this.http.get(this.url)
  }

  getById(id : any ){
    return this.http.get(this.url +'/'+id)

  }

  update(user: any ){
    return this.http.put(this.url +'/'+user.id , user)
  }

  create(user: any ){
    return this.http.post(this.url , user)
  }

}
