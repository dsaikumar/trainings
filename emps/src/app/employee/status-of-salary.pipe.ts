import { Pipe, PipeTransform } from "@angular/core";
import { SalaryStatus } from '../enums/salary-status.enum';
import { EmployeeUtilService } from "./employee-util.service";

@Pipe({
  name: 'statusOfSalary'
})
export class StatusOfSalaryPipe implements PipeTransform{
  constructor(private employeeUtilService: EmployeeUtilService){

  }
  transform(value: any, ...args: any[]): SalaryStatus | string {
    const status : SalaryStatus = this.employeeUtilService.evaluateSalaryStatus(value);
    if(args[0]){
      if(status === SalaryStatus.HIGH){
        return args[0][0];
      } else if(status === SalaryStatus.MEDIUM){
        return args[0][1];
      } else {
        return args[0][2];
      }
    }else {
      return status;
    }
  }

}
