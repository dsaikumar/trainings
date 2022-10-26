import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from '../types/employee.type';
import { EmployeeUtilService } from "./employee-util.service";
import { SalaryStatus } from '../enums/salary-status.enum';
import { StatusOfSalaryPipe } from "./status-of-salary.pipe";
import { EmployeeApiService } from "./employee-api.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{
  employees: Employee[] = [];
  constructor(private employeeUtilService: EmployeeUtilService, private router: Router, private salaryStatusPipe: StatusOfSalaryPipe,
    private employeeApiService: EmployeeApiService){
    // this.employees = this.employeeUtilService.employees;
  }
  loadEmployeesFromAPI(){
    this.employeeApiService.getEmployees()
    .then((employeeList: Employee[])=>{
      this.employees = employeeList;
    });
  }
  evaluate(salary : number){
    return this.salaryStatusPipe.transform(salary, [['happy', 'ok', 'notok']]);
  }
  editEmployee(index: number){
    this.router.navigateByUrl('/employee-manage?id='+ index);
  }
}
