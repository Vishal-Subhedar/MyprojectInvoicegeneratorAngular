import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { Product } from '../db';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public Product =[] as any;
  constructor(private authorService:AuthorService,private router: Router) { }
public selectedId: number = 0;
  ngOnInit(): void {
    this.authorService.getDb()
    .subscribe(data => this.Product =data);
  }
onDelete(pro:Product){
  this.selectedId =pro.pid;
  if (window.confirm('Are you sure , you want to delete?')) {
        this.authorService
          .deleteProduct(this.selectedId)
          .subscribe((data: {}) => this.router.navigate(['/productlist']));
      }
}
}
function subscribe(arg0: (data: any) => any) {
  throw new Error('Function not implemented.');
}
