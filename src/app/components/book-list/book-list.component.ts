import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [{
    sku: "gfgdgdfgfg",
    name: "JAVA",
    desciption: "learn java",
    price: 100.00,
    imageurl: "dfdf.png",
    units: 200,},

    {
      sku : "dfgdfgdf",
      name : "magic",
      desciption : "learn magic",
      price : 50.00,
      imageurl : "dfd.png",
      units : 75,
    },

    {
      sku : "hjkhkh",
      name : "History of Russia",
      desciption : "Russian History",
      price : 50.00,
      imageurl : "hfh.png",
      units : 75,
    },
    {
      sku : "uyuutr",
      name : "History of America",
      desciption : "American History",
      price : 50.00,
      imageurl : "ami.png",
      units : 75, 
    }


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
