import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/Shared/Models/Employee';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  employee:Employee[] = [];
  constructor (private employeeServices : EmployeeService , activatedRoute :ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
    if(params['searchTerm'])
    this.employee = this.employeeServices.getAllEmployeeBySearchTerm(params['searchTerm']);
    else
    this.employee = employeeServices.getAll();
    })
  }
}
