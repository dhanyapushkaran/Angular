import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:any={
    1000: { acno:1000, username:"jio", password: "jio",balance: 5000},
    1001: { acno:1001, username:"sam", password: "sam",balance: 4000},
  }
  constructor() { 
    this.getData()
  }

  saveData(){
    localStorage.setItem("users", JSON.stringify(this.users))

  }
  getData(){
    JSON.parse(localStorage.getItem("users")|| '')
  }
}

