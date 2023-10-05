import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './services/TokenService';
import { ServerConnectService } from './services/server-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'market-app';

  constructor(
    private router: Router,
    private serverConnect: ServerConnectService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.serverConnect.checkLogin();
    console.log(this.isLoggedIn);
  }

  isLoggedIn: boolean = false;

  logOut() {
    this.serverConnect.logout();

    this.isLoggedIn = this.serverConnect.checkLogin();
  }
}
