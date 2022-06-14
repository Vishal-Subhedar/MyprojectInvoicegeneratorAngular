import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Input()
  addproductd: any = {
    products: '',
    price: '',
    quantity: '',
    };
  constructor(private service: AuthorService, public router: Router) { }

  ngOnInit(): void {
  }
  addP() {
    console.log('From pro.comp.ts ' + this.addproductd);
    this.service.addproduct(this.addproductd).subscribe((data:{}) =>this.router.navigate(['/productlist']));
  }
}
