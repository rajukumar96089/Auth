import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStudentComponent } from './get-student/get-student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';


const routes: Routes = [  {path:"studentget",component:GetStudentComponent},

{path:"studentaddedit",component:AddEditStudentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
