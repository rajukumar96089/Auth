import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { GetDepartmentComponent } from './get-department/get-department.component';
import { SaveEditDepatmentComponent } from './save-edit-depatment/save-edit-depatment.component';
import {MatTableModule,MatTableDataSource, MatHeaderCellDef, MatHeaderRowDef, MatHeaderRow, MatCell, MatCellDef, MatHeaderCell, MatRow, MatRowDef, MatTable} from '@angular/material/table';

import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    GetDepartmentComponent,
    SaveEditDepatmentComponent,
    
  ],
 
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatTableModule,
    MatInputModule,
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule, 
    MatSelectModule,
    MatIconModule
   
  ]
})
export class DepartmentModule { }
