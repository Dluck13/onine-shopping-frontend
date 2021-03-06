import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseurl = "http://localhost:8080/api/v1/books";

  constructor(private httpClient: HttpClient ) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<GetResponseBooks>(this.baseurl).pipe(
      map(response => response._embedded.books)
    ); 
  }
}
    
interface GetResponseBooks{
  _embedded:{
    books: Book[];
  
}
  }

//   getBooks(_theCategoryId: number): Observable<Book[]>{
//     const searchurl = 'this.baseurl/search/categoryid?id=${_theCategoryId';
//     return this.httpClient.get<GetResponseBooks>(searchurl).pipe(
//       map(response => response._embedded.books)
//     );
//   }
// }



