import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

export interface RepairOrder {
  registration_number: string,
  email: string,
  category: string,
  description: string,
  title: string,
  status: string,
  workshop_id: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getEmployeeWorkshops()
  {
    return this.http.get<any>(this.apiUrl + 'employee/info');
  }
  getWorkshopData()
  {
    return this.http.get<any>(this.apiUrl + 'employee/workshop_info');
  }
  getWorkshopRepairs()
  {
    return this.http.post<any>(this.apiUrl + 'employee/repairs_info', {workshop_id: localStorage.getItem('workshop_id')});
  }
  addRepairOrder(repairOrder: RepairOrder)
  {
    console.log(repairOrder)
    return this.http.post<any>(this.apiUrl + 'employee/add_repair', repairOrder)
    
  }
}
