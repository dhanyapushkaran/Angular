import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= this.fb.group({

 uId:['',[Validators.required,Validators.pattern('[0-9]*')]],
 pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
  if(this.loginForm.valid){
  let uId=this.loginForm.value.uId
  let pswd=this.loginForm.value.pswd
  let result = this.ds.login(uId,pswd)
  if(result){
    alert("login Successful")
    this.router.navigateByUrl('dashboard')
  }
}
}
}
