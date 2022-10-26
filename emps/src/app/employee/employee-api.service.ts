import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Employee } from '../types/employee.type';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private httpClient: HttpClient) { }
  saveEmployee(data: Employee) : Promise<void>{
    let temp : Observable<void> = this.httpClient.post<void>('api/post/save/employee', data);
    return firstValueFrom(temp);
  }
  getEmployees() : Promise<Employee[]>{
    let temp: Observable<Employee[]> = this.httpClient.get<Employee[]>('api/get/all/employees');
    return firstValueFrom(temp);
  }
}
