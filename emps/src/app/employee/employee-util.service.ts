import { Injectable} from "@angular/core";
import { SalaryStatus } from "../enums/salary-status.enum";
import { Employee } from "../types/employee.type";

@Injectable({
  providedIn: 'root'
})
export class EmployeeUtilService{
  employees: Employee[] = [];
  constructor(){
    this.getPersistedEmployees();
  }
  getPersistedEmployees(): void {
    let myData : any = localStorage.getItem('data');
    if(myData !== null){
      myData = JSON.parse(myData);
      this.employees = myData;
    }
  }
  evaluateSalaryStatus(salary: number) : SalaryStatus{
    /*
     High    - Green Color - Salary => 60
    Medium  - Orange Color - Salary > 35 && Salary< 60
    Low     - Red Color - Salary <= 35
    */
   let status: SalaryStatus = SalaryStatus.LOW;
    if(salary >= 60){
      status = SalaryStatus.HIGH;
    } else if(salary > 35 && salary < 60){
      status = SalaryStatus.MEDIUM;
    } else{
      status = SalaryStatus.LOW;
    }
    return status;
  }
  persist(): void {
    localStorage.setItem("data", JSON.stringify(this.employees));
  }
}

