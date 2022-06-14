import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { TakeatourComponent } from './takeatour/takeatour.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserplistComponent } from './userplist/userplist.component';

const routes: Routes = [
  
  {path:"Invoice",component:InvoiceComponent},
  {path:"Passwordreset",component:PasswordresetComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
 {path:"Product",component:ProductComponent},
{path:'home',component:HomeComponent},
{path:'addproduct',component:AddproductComponent},
{path:'productlist',component:ProductlistComponent},
{path:'updateproduct/:pid',component:UpdateproductComponent},
{path:'userhome',component:UserHomeComponent},
{path:'userplist',component:UserplistComponent} ,
{path:'takeatour',component:TakeatourComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
