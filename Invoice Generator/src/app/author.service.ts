import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError }  from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product}    from './db';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url: string="http://localhost:8080/InvoiceGenerator/product";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http:HttpClient) {}

  getDb():Observable<Product[]>{
    return this.http
    .get<Product[]>(this.url + '/allpro');

  }

  addproduct(product:any):Observable<Product>{
console.log(product);
return this.http
.post<Product>(
  this.url + '/createpro',
  JSON.stringify(product),
  this.httpOptions
)
.pipe(retry(1), catchError(this.handleError));
  }

  getProduct(pid: any): Observable<Product> {
    return this.http
      .get<Product>(this.url + '/getpro/' + pid, this.httpOptions)
      
  }

  deleteProduct(pid:number):Observable<Product>{
    console.log(pid + ' from deleteProduct()');
    return this.http
    .delete<Product>(this.url + '/deletepro/' + pid, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }
  ValidateUser(email:any,password:any){
    return true;
}

authUser(user:any){
  let UserArray=[{email:'subhedarnilima98@gmail.com',password:'Admin@123'}];
  return UserArray.find((p:{email: any; password:any;}) => p.email===user.email && p.password === user.password);
}
  updateProduct(product: any): Observable<Product> {
    console.log(product);
    return this.http
      .put<Product>(
        this.url + '/updatepro',
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }
}





