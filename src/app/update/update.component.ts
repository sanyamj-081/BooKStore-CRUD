import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Services/book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../Model/book';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  id:string|undefined="";
  book:Book|undefined;

  constructor(private activatedRoute:ActivatedRoute,
  private bookService:BookService,private router:Router)
  {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  // ngOnInit(): void 
  // {
  //   if(this.id!=undefined)
  //     {
  //       this.book= this.bookService.getBookById(this.id);
  //     }
  // }

  // SERVER

  ngOnInit(): void 
  {
    if(this.id!=undefined)
      {
        this.bookService.getBookById(this.id).subscribe
          (
            {
              next:response => {this.book=response;},
              error:err => {alert(err);}
            }
          );
      }
  }

  // onBookUpdateFormSumbit(bookUpdateForm:NgForm)
  // {
  //   this.bookService.updateBook(this.book);
  //   alert("BOOK UPDATED");
  //   this.router.navigate(['/Detail',this.book.id]);
  // }

  // SERVER

  onBookUpdateFormSumbit(bookUpdateForm:NgForm)
  {
    this.bookService.getBookById(this.id).subscribe
    (
      {
        next:response => {this.book=response;},
        error:err => {alert(err);}
      }
    );
    this.router.navigate(['/Detail',this.book.id]);
  }
}
 