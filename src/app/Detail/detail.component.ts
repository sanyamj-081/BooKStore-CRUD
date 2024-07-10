import { Component } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent 
{
  id:string|undefined="";
  book:Book|undefined;

  constructor(private activatedRoute:ActivatedRoute,
  private bookService:BookService,private router:Router)
  {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  // ngOnInit(): void 
  // {
  //     if(this.id!=undefined)
  //       {
  //        this.book= this.bookService.getBookById(this.id);
  //       }
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

  // onBookDeleteButtonClicked()
  // {
  //   this.bookService.deleteBookById(this.id);
  //   this.router.navigate(['/Show']);
  // }

  // SERVER

  onBookDeleteButtonClicked()
  {
    this.bookService.deleteBookById(this.id).subscribe(
    {
      next:response => {alert("Book Deleted"); this.router.navigate(['/Show']);}
      ,
      error:err => {alert(err);}
    }
  );
    
  }


}