import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
//  loginForm: FormGroup;
loginData:any={
  email:"",password:""
}
  subdmit: boolean= false;
  loginDetails: any;
  errorMsg: string | undefined;
 
  constructor(private userService:UserService) { 
    // this.loginForm=new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required])
    // });
  
  }

  ngOnInit(): void {
 this.userService.getUserLit().subscribe(res=>console.log(res));
  }

  // onSubmit() {
  //   if(this.loginForm.valid) {
  //     console.log(this._v());
  //   }
  // }
  // _v() {
  //   return this.loginForm.value;
  // }
  login(){
    // console.log(this.loginData)
    this.subdmit = true;
    if(this.loginData.email !==""&&this.loginData.password!=="") {
    this.userService.login(this.loginData).subscribe(res=>{
      if(res.length==0){
        this.errorMsg="Please enter valid details..."
      }
      else{
        alert("Login Success...")
      }
    })
    }
      }
}
