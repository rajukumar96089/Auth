import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
  @ViewChild('name') namekey!:ElementRef;
  loginForm: FormGroup;
  responseData:any;
 
  constructor(private _userService:UserService, private route:Router) {
    this.loginForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    
  }

  // onSubmit(data:any) 
  // {
    
    
  //     this._userService.proceedLogin(this.loginForm.value).subscribe(res =>
  //       {
  //         debugger;
  //         this.responseData = res;
  //       var t :any =  this.getDecodedAccessToken(this.responseData);
  //       console.log('hsdkdkdkdkdkdkdkdkdkdkdkdkdk'+t )
  //       let roles:any=[]
        
  //       roles=t.role
  //         // console.log(this.responseData);
  //           // console.log(res.toString());
  //           this.responseData=res.toString();
  //           console.log("resData", res);
  //           if(this.responseData!="invalid")
  //           { 
  //             localStorage.setItem('token',this.responseData );
  //             this.route.navigate(['/Student/studentget']); 
  //           }
  //           else
  //           {
  //             this.route.navigate([''])
  //             alert("Invalid User Credential");
  //             console.log("invalid user credential");  
  //           } 
  //       })  
  // }
  // getDecodedAccessToken(token: string): any {
  //   try {
  //     return jwt_decode(token);
  //   } catch(Error) {
  //     return null;
  //   }
  // }

  onSubmit(data:any) 
  {
   
    this._userService.generateotp(data).subscribe((res:any) =>
    {
      
      console.log(res.message);
      debugger
      if(res.message=="OTP Send Successfully")
      {
        this.route.navigate(['/validate']); 

      }
      else
      {
        alert("invalid Credential");

      }
      
    })
  }
}
