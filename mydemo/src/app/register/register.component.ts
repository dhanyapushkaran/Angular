import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ename = ""
  acno = ""
  pswd = ""

  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern("[0-9]*")]],
    pswd: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
    ename: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]

  })

  constructor(private router: Router, private data1: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    var username = this.registerForm.value.ename
    var acno = this.registerForm.value.acno
    var password = this.registerForm.value.pswd

    var accDetails = this.data1.users
    if (this.registerForm.valid) {
      if (acno in accDetails) {
        alert("user already exist")
      }
      else {
        accDetails[acno] = { acno, username, password, balance: 0 }
        console.log(accDetails);

        alert("register successfully")
       this.data1.saveData()
        this.router.navigateByUrl('dashboard')
      }

    }
  }

}
