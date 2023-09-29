import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddGoodsComponent } from './add-goods/add-goods.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    AddGoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule ,
    FormsModule,
    BrowserAnimationsModule,
    InputNumberModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
