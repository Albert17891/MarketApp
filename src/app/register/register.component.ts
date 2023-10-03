import { Component } from '@angular/core';
import { RegisterUser } from '../interfaces/RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(){}

  user!:RegisterUser;

  onSubmit(){

  }
}
