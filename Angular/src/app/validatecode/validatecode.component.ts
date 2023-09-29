import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validatecode',
  templateUrl: './validatecode.component.html',
  styleUrls: ['./validatecode.component.css']
})
export class ValidatecodeComponent implements OnInit {
  verificationForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService, private route: Router) { }

  ngOnInit(): void 
  {
    this.verificationForm = this.fb.group({
      otp: ['', Validators.required] // You can add more validators as needed
    });
  }
  token:any
  Verify(data: any) {
    debugger
    this.service.generateToken(data).subscribe((res: any) => {
  
      console.log(res.token);
      if (res.token!= null) 
      {
        localStorage.setItem('token',res.token);
        console.log(res.token);
        
        this.route.navigate(['/Student/studentget']);
      }
      else 
      {
        this.route.navigate(['']);
        alert("Invalid User Credential");
        console.log("invalid user credential");
      }
    })
  }
}
