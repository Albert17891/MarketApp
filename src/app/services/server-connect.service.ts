import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../AppConfig';
import { Observable } from 'rxjs';
import { TokenService } from './TokenService';
import { RegisterRequest } from '../interfaces/RegisterRequest';
import { LoginResponse } from '../interfaces/LoginResponse';
import { Route, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class ServerConnectService {
  constructor(private http: HttpClient, private tokenService: TokenService,private route:Router) {}
 
 
  
  login(userName: string, password: string): void {   
    const loginRequest = {
      userName: userName,
      password: password,
    };

    const url = `${AppConfig.apiUrl}Authentication/login`;

    this.http.post(url, loginRequest).subscribe(response=> {
          
      if(response!=null){
        const loginResponse =<LoginResponse> response;        

        this.tokenService.saveToken(loginResponse.token);

        const decodedToken: {name:string} = jwt_decode(loginResponse.token);
        
        localStorage.setItem('userName',decodedToken.name);       

       this.route.navigate(["customer"])       
       
      }           
    
    });      
  }

  checkLogin():boolean{
    const  token =localStorage.getItem('access_token');
    if(token!=null){
      return true;
    }
      return false;
  }

  logout(){
    this.tokenService.removeToken();    
  }

  Register(user: RegisterRequest): void {
    const url = `${AppConfig.apiUrl}Authentication/register`;

    this.http.post(url, user).subscribe(response=> {
      
    });
  }
}
