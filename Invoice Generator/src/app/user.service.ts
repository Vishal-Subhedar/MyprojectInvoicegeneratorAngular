import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './db';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string="http://localhost:8080/InvoiceGenerator/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http:HttpClient) { }
  ValidateUser(email:any,password:any){
    return true;
}

  addcust(user:any):Observable<User>{
    console.log(user);
    return this.http
    .post<User>(
      this.url + '/createcust',
      JSON.stringify(user),
      this.httpOptions
    )
      }


      addsupl(user:any):Observable<User>{
        console.log(user);
        return this.http
        .post<User>(
          this.url + '/createsup',
          JSON.stringify(user),
          this.httpOptions
        )
          }
          
}
