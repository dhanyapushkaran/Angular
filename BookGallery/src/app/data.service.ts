import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sBook: any = []
  outstocks: any = []
  instocks: any = []

  users: any = [
    { bookname: "the alchemist", author: "paulo", price: 200, no_copies: 5, sold: 5, },
    { bookname: "alice in wonderland", author: "lewis", price: 500, no_copies: 10, sold: 2 },
    { bookname: "harry porter", author: "rowling", price: 400, no_copies: 3, sold: 1 },
    { bookname: "pathumede aadu", author: "basheer", price: 100, no_copies: 20, sold: 20 }

  ]

  constructor() { }


  searchBook(bname: any) {
    let bookDetails = this.users
    for (let book of bookDetails) {
      if (book["bookname"] == bname) {
        this.sBook.push(book)
        console.log(this.sBook);

        return this.sBook
      }
    }

  }


  outStockBooks() {
    let bookDetails = this.users
    for (let book of bookDetails) {
      if (book["no_copies"] == book["sold"]) {
        this.outstocks.push(book)

      }
     

    }
    return this.outstocks
  }

  instock() {
    let bookDetails = this.users
    for (let book of bookDetails) {
      if ((book["no_copies"]- book["sold"])> 0) {
        this.instocks.push(book)
        
        
      }
      console.log(this.instocks);
    }
    return this.instocks

  }

}

