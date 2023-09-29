import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  baseformGroup!:FormGroup
  constructor(private fb:FormBuilder, private service:UserService){}
  ngOnInit(): void {
    debugger
    this.baseformGroup=this.fb.group({
      details:this.fb.array([]),
      id:[0]
    });
    this.addavaibalityitem(0)
    
  }
  createItem(inx:number)
  {
    return this.fb.group({
      id:[inx],
      name:[''],
      address:[''],
      email:[''],
      phone:[''],
    });
  }

  get details()
  {
    return this.baseformGroup.get("details") as FormArray;
  }
  addavaibalityitem(inx : number) 
  {
    const control = <FormArray>this.baseformGroup.controls["details"]
    control.push(this.createItem(inx));
  }

  removeAvaibalityroom(inx:number)
  {
    const control = <FormArray>this.baseformGroup.controls["details"];
    control.removeAt(inx);
  }
  Onsubmit()
  {
    debugger
    console.log(this.baseformGroup,"check");
    //console.log(data,"check");
    let data={
      Id:4,
       Name: this.baseformGroup.value.details[0].name,
       Email: this.baseformGroup.value.details[0].email,
       Address :"Stringsdf",
        
       Phone :"djfbj"
    }
    this.service.getFormData(data).subscribe(res=>
      {
        console.log(res);
        

      })


  }

}
