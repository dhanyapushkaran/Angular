import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim=this.ds.currentName
  
  eventForm= this.fb.group({

    date:['DD/MM/YY',[Validators.required]],
    event:['']
     })

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  saveEvent(){
    if(this.eventForm.valid){
    let date=this.eventForm.value.date
    let event=this.eventForm.value.event

   this.ds.saveEvent(date,event)
    // if(result){
    //   alert("login Successful")
    //   this.router.navigateByUrl('dashboard')
    // }
  }
}
}
