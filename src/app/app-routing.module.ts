import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddGoodsComponent } from './add-goods/add-goods.component';
import { SearchComponent } from './search/search.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { MyProductComponent } from './my-product/my-product.component';

const routes: Routes = [

  { path: 'home', component: SearchComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'customer',component:CustomerPageComponent,
     children:[
      {path:'add-goods',component:AddGoodsComponent},
      {path:'my-products',component:MyProductComponent}
     ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
