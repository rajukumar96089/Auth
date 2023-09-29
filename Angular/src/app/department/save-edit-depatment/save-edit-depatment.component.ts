import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-save-edit-depatment',
  templateUrl: './save-edit-depatment.component.html',
  styleUrls: ['./save-edit-depatment.component.css'],
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule]
})
export class SaveEditDepatmentComponent implements OnInit{
  departmentForm!:FormGroup;
  value:any
  data:any
  constructor (private service:UserService, private route:Router, private formBuilder:FormBuilder){
    this.departmentForm = new FormGroup({
      did:new FormControl(0,Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
     });
  }
  ngOnInit(): void {
  
    this.editcomponent();
  }
  onSubmit(data:any)
  {
    debugger
    this.service.adddepartment(this.departmentForm.value).subscribe(res=>
      {
        console.log(res);
        alert("Student Added Successfully");
        this.route.navigate(['/Student/studentget'])
  
      })

  }
  editcomponent()
 {
  this.value=this.service.getdepartmentdata();
  this.service.getbyiddeparment(this.value).subscribe((res:any)=>
    {
      this.data=res.department
      console.log(res.department);
      this.departmentForm.patchValue(this.data)
      
    })   
  }
  updateRecord(data:any)
  {
    debugger
         this.service.UpdateDepartment(data).subscribe((res:any) =>
         {
          console.log(res);
          alert("Student Updated Successfully");
          window.location.reload()
         })   
  }

}
