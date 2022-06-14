import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgComponent } from './cc/bg/bg.component';
import { NavbarComponent } from './cc/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserplistComponent } from './userplist/userplist.component';
import { TakeatourComponent } from './takeatour/takeatour.component';
// import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    BgComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    InvoiceComponent,
    PasswordresetComponent,
    ProductComponent,
    HomeComponent,
    AddproductComponent,
    ProductlistComponent,
    UpdateproductComponent,
    UserHomeComponent,
    UserplistComponent,
    TakeatourComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
