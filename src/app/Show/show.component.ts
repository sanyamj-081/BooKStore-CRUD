import { Component } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  allBook:Book[]=[];

  // constructor (private bookService : BookService) 
  // {
  //   this.allBook=bookService.getAllBooks();
  // }

  //SERVER

  constructor (private bookService:BookService)
  {
    bookService.getAllBooks().subscribe
    (
      {
        next:response => {this.allBook = response;},
        error: err => {alert("Unable to fatch data");}
      }

    );
  }





}
