import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../Model/book';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor (private bookService : BookService) {}

  onBookFormSubmit(bookForm:NgForm) 
  {
    let book:Book=
    {
      title: bookForm.value.title,
      author: bookForm.value.author,
      price: bookForm.value.price,
      date: bookForm.value.date,
      genre: bookForm.value.genre,
      pages: bookForm.value.pages,
      description: bookForm.value.description,
      coverpage: bookForm.value.curl
    } 
    // this.bookService.addBook(book);
    // alert("Book Created");
    // bookForm.reset;

    //server
    this.bookService.addBook(book).subscribe(
      {
        next:response=>{alert("Book Created");},
        error:err=>{alert("Failed to create book try again");}        
      }
    );
  
    bookForm.reset;



  }
  


}
