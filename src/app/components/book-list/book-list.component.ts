import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  currentCategoryId: number = 0;
 

  constructor(
    private _bookService: BookService,
    private route: ActivatedRoute
  
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listBooks();
    })
  }

  listBooks(){

  // check if "id" parameter is available
  const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

  if (hasCategoryId) {
    // get the "id" param string. convert string to a number using the "+" symbol
    this.currentCategoryId = +this.route.snapshot.paramMap.getAll('id');

    }else{ 
      this.currentCategoryId = 1; 
    }

    this._bookService.getBooks({ _theCategoryId: this.currentCategoryId }).subscribe(
      data => this.books = data
    )
  }

}
