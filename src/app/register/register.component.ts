import { Component } from '@angular/core';
import { RegisterRequest } from '../interfaces/RegisterRequest';
import { ServerConnectService } from '../services/server-connect.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: ServerConnectService) {}

  

  onSubmit(register:NgForm) {
    
    
    const userRegister:RegisterRequest={UserName:register.value.UserName,FirstName:register.value.FirstName,LastName:register.value.LastName,
                                        Email:register.value.Email,Password:register.value.Password,PhoneNumber:register.value.PhoneNumber}
                                        console.log(userRegister);
                                            
    this.authService.Register(userRegister);
  }
}
