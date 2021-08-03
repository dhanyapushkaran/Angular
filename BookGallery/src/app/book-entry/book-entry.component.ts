import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {
  bookForm= this.fb.group({
 bname:[''],
 author:[''],
 price:[''],
 copies:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 bookentry(){

 }
}
