import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { map } from 'rxjs/operators';
import { Car, CarService } from 'src/app/services/car-service/car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.scss']
})
export class CarDashboardComponent implements OnInit {
  reg_number: string = '';
  car: any;
  repairOrders: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  )  {   }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.reg_number = param.reg_number;
      this.loadCarData();
    });
  }

  loadCarData(){
    this.carService.getCarInfo(this.reg_number).subscribe((data) => {
      this.repairOrders = data.car.repair_orders;
      this.car = data.car;
    });
  }
}
