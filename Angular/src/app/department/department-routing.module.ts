import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDepartmentComponent } from './get-department/get-department.component';
import { SaveEditDepatmentComponent } from './save-edit-depatment/save-edit-depatment.component';

const routes: Routes = [{
  path:'getDepartment',
  component:GetDepartmentComponent
},
{
  path:'Saveeditdepartment',
  component:SaveEditDepatmentComponent
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
