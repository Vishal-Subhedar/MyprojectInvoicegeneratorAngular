import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  registerDetails: any={
    name: '',
    email: '',
    password: '',
    confirmp: '',
    contact: '',
    gender: '',
    typeofuser:'',
   
    };

submitted =false;
 
 

  
constructor( public uservice:UserService, public roter: Router) {}

onSubmit(){
  this.submitted =true;
  alert('User dates are validated successfully');
}
  ngOnInit(): void {}
  

 

  add(){
    if(this.registerDetails.typeofuser=="Customer")
    {
      this.addc()
    }
    else{
      this.adds()
    }
  }
  addc() {
    console.log('From cust.comp.ts ' + this.registerDetails);
    this.uservice.addcust(this.registerDetails).subscribe((data:{}) =>this.roter.navigate(['/login']));
  }

  adds() {
    console.log('From supl.comp.ts ' + this.registerDetails);
    this.uservice.addsupl(this.registerDetails).subscribe((data:{}) =>this.roter.navigate(['/login']));
  }

  

}





