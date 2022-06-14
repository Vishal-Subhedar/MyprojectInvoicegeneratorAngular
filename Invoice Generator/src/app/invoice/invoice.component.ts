import { Component, OnInit ,Input} from '@angular/core';
import { AuthorService } from '../author.service';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})


export class InvoiceComponent implements OnInit {
  public Product =[] as any;
  today: number = Date.now();

  

  constructor(private _authorService:AuthorService){
    setInterval(() => {this.today = Date.now()}, 1);
  }

  ngOnInit(): void {
    this._authorService.getDb()
    .subscribe(data => this.Product =data);
  }


}
