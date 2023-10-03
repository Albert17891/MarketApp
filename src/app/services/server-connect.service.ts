import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../AppConfig';
import { Observable } from 'rxjs';
import { TokenService } from './TokenService';
import { RegisterUser } from '../interfaces/RegisterUser';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectService {

  constructor(private http:HttpClient,private tokenService:TokenService) { }
   
  token!:string;

    login(userName:string,password:string):void{

      const credentials = {
        userName: userName,
        password: password,
      };      

      const url = `${AppConfig.apiUrl}/login`;

       this.http.post(AppConfig.apiUrl,credentials).subscribe((response:any)=>{
               this.token=response;
      });

       this.tokenService.saveToken(this.token);
    }

    Register(user:RegisterUser):void{
      const url = `${AppConfig.apiUrl}/register`;

      this.http.post(url,user).subscribe((response:any)=>{

      });
    }
}
