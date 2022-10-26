import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Employee } from "../types/employee.type";
import { EmployeeUtilService } from "./employee-util.service";
import { EmployeeApiService } from './employee-api.service';

@Component({
  selector: 'employee-manage',
  templateUrl: './employee-manage.component.html'
})
export class EmployeeManageComponent{
  private defaultEmployeeObject : Employee = {name: '', salary: 0};
  newEmployeeObject : Employee;
  editIndex: number = -1;
  constructor(private employeeUtilService: EmployeeUtilService, private router: Router,
    private activatedRoute: ActivatedRoute, private employeeApiService: EmployeeApiService){
    this.getIfAnyEmployeedToEdit();
    if(this.editIndex === -1){
      this.newEmployeeObject = Object.assign({}, this.defaultEmployeeObject);
    } else {
      this.newEmployeeObject = Object.assign({}, this.employeeUtilService.employees[this.editIndex]);
    }
  }
  getIfAnyEmployeedToEdit(){
    this.activatedRoute.queryParamMap.subscribe((data: ParamMap)=>{
      const index: any = data.get('id');
      if(index !== null){
        this.editIndex = parseInt(index, 10);
      }
    });
  }
  saveEmployee(){
    // this.employeeUtilService.employees?.push(this.newEmployeeObject);
    // this.employeeUtilService.persist();
    this.employeeApiService.saveEmployee(this.newEmployeeObject)
    .then(()=>{
      this.goToEmployeeList();
    });
  }
  updateEmployee(){
    let existingEmployee: Employee = this.employeeUtilService.employees[this.editIndex];
    existingEmployee.name = this.newEmployeeObject.name;
    existingEmployee.salary = this.newEmployeeObject.salary;
    this.employeeUtilService.persist();
    this.editIndex = -1;
    this.goToEmployeeList();
  }
  goToEmployeeList(){
    this.router.navigateByUrl('/employee-list');
  }
}
