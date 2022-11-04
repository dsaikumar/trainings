import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeManageComponent } from './employee/employee-manage.component';
import { StatusOfSalaryPipe } from './employee/status-of-salary.pipe';
import { UserObserveComponent } from './user/user-observe.component';
import { UserFormControlComponent } from './user/user-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeManageComponent,
    StatusOfSalaryPipe,
    UserObserveComponent,
    UserFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    StatusOfSalaryPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
