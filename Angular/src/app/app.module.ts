import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { authGuard } from './auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import { StudentModule } from './student/student.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChangebackgroundDirective } from './changebackground.directive';
import { SignupComponent } from './signup/signup.component';
import { ValidatecodeComponent } from './validatecode/validatecode.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor/editor.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ValidatecodeComponent,
    EditorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTableModule,
    MatIconModule ,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    AngularEditorModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
