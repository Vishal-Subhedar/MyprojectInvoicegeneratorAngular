import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { NgForm,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//   // constructor(private autservice:AuthorService, public router:Router) { }
 

//   ngOnInit(): void {
//   }

// // loginForm = new FormGroup({
// //   email : new FormControl(),
// //   pwd : new FormControl()
// // })
// @Input()
// loginsForm: any = {
//   email: '',
//   password: '',
//   // typeofuser: '',
// };

// // checkUser(){
// //   alert();
// //  var res = this.authService.ValidateUser(this.loginsForm.value["email"],this.loginsForm.value["pwd"]);
// //  if(res){
// //    localStorage.setItem("email",this.loginsForm.value["email"]);
// //    localStorage.setItem("pwd",this.loginsForm.value["pwd"]);
// //    sessionStorage.setItem("email",this.loginsForm.value["email"]);
// //    sessionStorage.setItem("pwd",this.loginsForm.value["pwd"]);
// //    this.router.navigate(["/home"]);
// //  }else{
// //       alert("Invalid User");
// //  }
// // }
// constructor(private authService: AuthorService, private router: Router) { }
// onLogin(loginForm: NgForm) {
//   console.log(loginForm.value);
//   const user = this.authService.authUser(loginForm.value);
//   console.log(user);

//   if (user) {
//     localStorage.setItem('user', JSON.stringify(user));
//     console.log('Login Successfully');
//     alert("Welcome back :)\nClick ok to proceed!");
//     // this.router.navigate(['view'])

//   }
//   else {
//     console.log('Login not Successfully');
//     alert("User not found :(\nTry again!");
//     loginForm.reset();
//   }
// }
constructor(private authService: AuthorService, private router: Router) { }
  @Input()
  loginsForm: any = {
    email: '',
    password: '',
  };

  ngOnInit(): void {

  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    console.log(user);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login Successfully');
      alert("Welcome back :)\nClick ok to proceed!");
      this.router.navigate(['home'])

    }
    else {
      console.log('Login not Successfully');
      alert("User not found :(\nTry again!");
      loginForm.reset();
    }
  }

//   addEmp() {
//     console.log('From emp.comp.ts ' + this.loginsForm);
//     this.service.createLogins(this.loginsForm).subscribe((data: {}) => this.router.navigate(['/empdash']));
//   }
// }


 }
