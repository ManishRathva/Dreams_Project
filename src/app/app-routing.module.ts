import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './component/home-dashboard/home-dashboard.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path :'',component:HomeDashboardComponent},
  {path :'search/:searchTerm',component :HomeDashboardComponent},
  { path:'employee',component :EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
