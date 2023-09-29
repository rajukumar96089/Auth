import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/Service/core.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit{
  StudentForm: FormGroup;
  constructor(private service:UserService, private route:Router, private snackbar:CoreService){
    this.StudentForm = new FormGroup({
      id: new FormControl(0,Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),

    });
  }
  ngOnInit(): void {
    this.editcomponent();
    
  }
  onSubmit(data:any)
    {
      
      this.service.postStudent(this.StudentForm.value).subscribe(res=>
        {
          console.log(res);
          //alert("Student Added Successfully")
          this.snackbar.openSnackBar('Student Added Successfully','done')
          this.service.GetStudent();
          this.route.navigate(['/Student/studentget'])
    
        })
 }
 value:any
 data:any=[]
 editcomponent()
 {
  this.value=this.service.getData();
  this.service.getbyidStudent(this.value).subscribe((res:any)=>
    {
      this.data=res.views
      console.log(res.views);
      this.StudentForm.patchValue(this.data)
      
    })  
  }
  updateRecord(data:any)
    {
      debugger
           this.service.updatestudent(data).subscribe((res:any) =>
           {
            console.log(res);
            alert("Student Updated Successfully");
            window.location.reload()

           })    
    }
}   
  
  
