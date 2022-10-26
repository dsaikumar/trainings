import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeManageComponent } from './employee/employee-manage.component';

const routes: Routes = [
  {title: 'Employee List', path: 'employee-list', component: EmployeeListComponent},
  {title: 'Employee Manage', path: 'employee-manage', component: EmployeeManageComponent},
  {path: '', redirectTo: '/employee-list' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
