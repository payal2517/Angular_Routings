import { Component, OnInit } from '@angular/core';
import { TechnologiesbooksService } from '../technologiesbooks.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any=[];
  constructor(public booj:TechnologiesbooksService) { }

  ngOnInit(): void {
    this.books = this.booj.getTechBook();
  }

}
