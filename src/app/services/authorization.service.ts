import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginUser } from '../login/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private authUrl: string;

  constructor(private httpClient: HttpClient) {

    this.authUrl = "http://localhost:3000/auth/v1";
   }

   authenticateLoginUser(loginUser: loginUser){
     return this.httpClient.post(this.authUrl,loginUser);
   }

   setBearerToken(token: string){
     localStorage.setItem("bearerToken",token);
   }

   getBearerToekn(){
     return localStorage.getItem("bearerToken")
   }

   isUserAuthenticated(token:string){
     return this.httpClient.post(this.authUrl+'/isAuthenticated',{},{
       headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
     })
   }
}
