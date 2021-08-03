import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title= "Welcome home"
  num="add number"
  acno=""
  
  constructor() { }

  ngOnInit(): void {
  }
 
 login(){
   let val =this.num
   console.log(val);
     
   alert(val)
 }
}
