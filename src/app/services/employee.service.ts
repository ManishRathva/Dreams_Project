import { Injectable } from '@angular/core';
import { employees } from '../employee-data';
import { Employee } from '../Shared/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getAll():Employee[]{
    return employees;
  }
  getAllEmployeeBySearchTerm(searchTerm:string){
    return this.getAll().filter(Employee => Employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
