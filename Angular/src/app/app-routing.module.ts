import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ValidatecodeComponent } from './validatecode/validatecode.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
 
{
  path:'',
  component:LoginComponent
},


{
  path:'Student',
  loadChildren:()=> import('./student/student-routing.module')
  . then(mod=>mod.StudentRoutingModule),
  canActivate:[authGuard]
  
}
,
{
  path:'department',
  loadChildren:()=> import('./department/department-routing.module')
  . then(mod=>mod.DepartmentRoutingModule),
  canActivate:[authGuard]
},
{
  path:'validate',
  component:ValidatecodeComponent,
  
},
{
  path:'editor',
  component:EditorComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
