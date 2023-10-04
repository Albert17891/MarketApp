import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerConnectService } from '../services/server-connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:ServerConnectService){}

  onSubmit(login:NgForm){
    this.authService.login(login.value.username,login.value.password);
  }
}
