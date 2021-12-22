import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';

@Component({
  selector: 'app-choose-workshop',
  templateUrl: './choose-workshop.component.html',
  styleUrls: ['./choose-workshop.component.scss']
})
export class ChooseWorkshopComponent implements OnInit {

  workshops: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadWorkshopData();
  }
  onWorkshopClick(workshop_id: any) {
    localStorage.setItem('workshop_id', workshop_id);
    this.router.navigate(['e-user/']);
  }
  loadWorkshopData() {
    this.employeeService.getEmployeeWorkshops().subscribe(data => {
      if (data.length == 1) {
        localStorage.setItem('workshop_id', data[0].id);
        this.router.navigate(['e-user/rep-orders']);
      } else if (data.length == 0) {
        console.log('no workshops yet')
      } else {
        this.workshops = data;
      }
    });
  }
}
