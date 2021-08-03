import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm = this.fb.group({
    bname: ['']
  })
  bookname = ""
  author = ""
  price = ""
  searchOptions = ["Select Option", "Books OutOfStock", "Books InStock"]
  selectValue = ""
  inStocks:any=[]
  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  searchBook() {

    let bookname = this.loginForm.value.bname
 

    let result = this.ds.searchBook(bookname)
    console.log(result);
    if (result) {
      this.inStocks = result
      // this.bookname = result[0]["bookname"]
      // this.author = result[0]["author"]
      // this.price = result[0]["price"]
      // console.log(this.bookname);
      // console.log(this.author);
      // console.log(this.price);
    }
    else{
      alert("Book not found")
    }
  }

  onSelectOption(val: any) {
    this.selectValue = val.target.value
    console.log(this.selectValue);

    if (this.selectValue == this.searchOptions[1]) {
      let result = this.ds.outStockBooks()
      console.log(result);
      if(!(result)){
      
          alert("No OutOfStock Books")
      
      }
      else{
        this.inStocks = result
        // this.bookname = result[0]["bookname"]
        // this.author = result[0]["author"]
        // this.price = result[0]["price"]
      }
      
    }
    else if (this.selectValue == this.searchOptions[2]) {
      let result = this.ds.instock()
      console.log(result);
      if(!(result)){
      
          alert("Books OutOfStock")
      
      }
      else{
        this.inStocks = result
        // this.bookname = result1["bookname"]
        // this.author = result1["author"]
        // this.price = result1["price"]
        console.log("instock="+ this.inStocks);
        
      }
    }


  }
}
