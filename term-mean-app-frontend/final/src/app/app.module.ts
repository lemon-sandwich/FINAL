import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DepartmentComponent } from './department/department.component';
import { ComplaintComponent } from './complaint/complaint.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    DepartmentComponent,
    ComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
