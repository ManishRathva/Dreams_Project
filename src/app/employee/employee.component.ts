import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Shared/Models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee:Employee[] = [];
  constructor(private employeeServices:EmployeeService){
    this.employee = employeeServices.getAll();
  }
}
