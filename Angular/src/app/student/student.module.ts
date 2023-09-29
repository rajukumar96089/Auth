import { NgModule,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { GetStudentComponent } from './get-student/get-student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangebackgroundDirective } from '../changebackground.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';







@NgModule({
  declarations: [
    GetStudentComponent,
    AddEditStudentComponent,ChangebackgroundDirective
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class StudentModule { }
