import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
public productupdated:any = {};
public pid: any = this.aroute.snapshot.params['pid'];
  public selectedId: any;

  constructor(private authorservice:AuthorService,
    public router: Router,
    private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('from ng oninit' + this.pid);
    this.authorservice
    .getProduct(this.pid)
    .subscribe((data) =>(this.productupdated = data));
  }
  updateProduct() {
    console.log(' Product Data ----->' + this.productupdated);
    this.authorservice
      .updateProduct(this.productupdated)
      .subscribe((data: {}) => this.router.navigate(['/productlist']));
  }
}
