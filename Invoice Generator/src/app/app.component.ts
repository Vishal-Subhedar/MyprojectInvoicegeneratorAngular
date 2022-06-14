import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Invoice-generator';
today: number = Date.now();
constructor() { 
  setInterval(() => {this.today = Date.now()}, 1);
}
  loggedin(){
    return localStorage.getItem('user');
 }
onlogout(){
  localStorage.removeItem('user');
  
}
}
