import { Injectable } from '@angular/core';
import { Book } from '../Model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{
  private apiUrl:string = "http://localhost:4444";
  //this will contain all the books as book objct
 private allBooks:Book[]=[];

  //constructor() { }

  constructor(private httpClient:HttpClient) {}


  //1.CREATE
//  addBook(book:Book)
//  {
//     book.id=this.generateRandomId();
//     this.allBooks.push(book);
//  }

 //for server
  addBook(book:Book):Observable<Book>
  {
    let url = this.apiUrl+'/createbook';
    const headers =new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Book>(url,book,{headers});
  }
  
  /*CREATE */

  //2.READ
  // getAllBooks()
  // {
  //   return this.allBooks;
  // }

  // server

  getAllBooks():Observable<Book[]>
  {
    let url = this.apiUrl+'/allbooks';
    return this.httpClient.get<Book[]>(url);
  }


  generateRandomId()
  {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
  }
  
  /*SHOW */

  // getBookById(id:string):Book
  // {
  //     let book:Book;

  //     for(let i=0;i<this.allBooks.length;i++)
  //     {
  //       (this.allBooks[i].id==id)
  //       {
  //         book=this.allBooks[i];
  //         break;
  //       }
  //     }

  //     return book;
  // }

  //SERVER

  getBookById(id:string):Observable<Book>
  {
      let url = this.apiUrl +'/book/' +id;

      return this.httpClient.get<Book>(url);

  }
   /* SHOW*/
/* DELETE */

  // deleteBookById(id:string)
  // {
  //    for(let i=0;i<this.allBooks.length;i++)
  //    {
  //     if(this.allBooks[i].id===id)
  //     {
  //       this.allBooks.splice(i,1);
  //       return;
  //     }
  //    }
  // }

  // SERVER

  deleteBookById(id:string):Observable<any>
  {
     let url = this.apiUrl +'/deletebook/' +id;

    return this.httpClient.delete(url);
  }

  /* DELETE */
  /*UPDATE */

  // updateBook(book:Book)
  // {
  //     for(let i=0;i<this.allBooks.length;i++)
  //     {
  //       if(this.allBooks[i].id===book.id)
  //       {
  //         this.allBooks[i]=book;
  //       }
  //     }
  // }

  // SERVER

  updateBook(book:Book)
  {
    let url = this.apiUrl +'/updatebook/' +book.id;

    const headers =new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put<Book>(url,book,{headers});
  }

   /*UPDATE */
}