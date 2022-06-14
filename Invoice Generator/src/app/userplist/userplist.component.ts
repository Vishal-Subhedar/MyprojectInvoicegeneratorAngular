import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-userplist',
  templateUrl: './userplist.component.html',
  styleUrls: ['./userplist.component.css']
})
export class UserplistComponent implements OnInit {
  public User =[] as any;

  constructor(public authorService:AuthorService) { }

   ngOnInit(): void {
    this.authorService.getDb()
    .subscribe(data => this.User =data);
  }

}
