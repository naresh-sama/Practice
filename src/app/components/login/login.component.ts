import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// loginData:any={
//   name:"",password:""
// }
loginForm:FormGroup
  constructor() { 
    this.loginForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      password: new FormControl(" ", [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  login(){
// console.log(this.loginData)
  }
}

export interface login{
name:string,
password:string
}
