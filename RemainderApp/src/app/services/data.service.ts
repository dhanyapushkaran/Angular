import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentName=""
  currentUser=""

  users:any={
    1000: { uId: 1000, name: "jio", password: "jio", events: [] },
    }

  constructor() {
    this.getDetails()
   }

  getDetails(){
    if (localStorage.getItem("users")){
    this.users= JSON.parse(localStorage.getItem("users") || '')
    }
    if (localStorage.getItem("currentUser")){
      this.currentUser= JSON.parse(localStorage.getItem("currentUser") || '')
      }
      if (localStorage.getItem("currentName")){
        this.currentName= JSON.parse(localStorage.getItem("currentName") || '')
        }
  }
  saveDetails(){
    localStorage.setItem('users',JSON.stringify(this.users))
    if(this.currentUser){
      localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
    if(this.currentName){
      localStorage.setItem('currentName',JSON.stringify(this.currentName))
    }
  }

  login(uId:any, pswd:any){
    let userDetails= this.users
    if(uId in userDetails){
      if(pswd== userDetails[uId]["password"]){
        this.currentUser=uId
        this.currentName=userDetails[uId]["name"]
        this.saveDetails()
       return true
      }
      else{
        alert("inalid password")
        return false
      }
    }
    else{
      alert("invalid user")
      return false
    }
  }

  register(uId:any,name:any, password:any){
    let userDetails= this.users
    if(uId in userDetails){
          return false
    }
      else{
        userDetails[uId]= {
          uId,name,password,events:[]
        }
        this.saveDetails()
        console.log(this.users);
        return true
      }
  
  }

  saveEvent(date:any,event:any){

    let userDetails=this.users
    userDetails[this.currentUser].events.push({
      date,event
    })
    this.saveDetails()
    alert("Event saved")
    console.log(this.users);
    
  }

  viewEvents(){
    return this.users[this.currentUser]["events"]
  }
}
