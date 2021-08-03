import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({

    uId: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    name: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    if(this.registerForm.valid){
    let uId = this.registerForm.value.uId
    let pswd = this.registerForm.value.pswd
    let name = this.registerForm.value.name
    let result = this.ds.register(uId, name, pswd)
   
    if (result) {
      alert("Successfully Registerd")
      this.router.navigateByUrl('')
    }
  }
  }
}