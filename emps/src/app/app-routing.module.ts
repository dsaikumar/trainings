import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeManageComponent } from './employee/employee-manage.component';
import { UserObserveComponent } from './user/user-observe.component';

const routes: Routes = [
  {title: 'Employee List', path: 'employee-list', component: EmployeeListComponent},
  {title: 'Employee Manage', path: 'employee-manage', component: EmployeeManageComponent},
  {title: 'Understanding Observable', path: 'default', component: UserObserveComponent},
  {path: '', redirectTo: '/default' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
