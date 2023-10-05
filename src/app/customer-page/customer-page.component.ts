import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  userName!:string;

  ngOnInit(): void {

    const storedUserName = localStorage.getItem('userName');

    if (storedUserName !== null) {
      this.userName = storedUserName;
     
    } else {
      console.log('User name not found in localStorage');
    }
  
  }

}
