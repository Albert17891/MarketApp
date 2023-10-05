import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddGoodsComponent } from './add-goods/add-goods.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TokenInterceptor } from './services/token-interceptor.service';
import { RegisterComponent } from './register/register.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { MyProductComponent } from './my-product/my-product.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    AddGoodsComponent,
    RegisterComponent,
    CustomerPageComponent,
    MyProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule ,
    FormsModule,
    BrowserAnimationsModule,
    InputNumberModule ,    
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
