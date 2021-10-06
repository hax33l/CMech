import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { map } from 'rxjs/operators';
import { Car, CarService } from 'src/app/services/car-service/car.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface RepairOrder {
  id: number;
  title: string;
  category: string;
  description: string;
  status: string;
  registration_number: string;
  key: string;
  workshop_id: number;
  car_id: number;
  created_at: Date;
}

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.scss']
})
export class CarDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'description','status','created_at'];

  reg_number: string = '';
  car: any;

  dataSource!: MatTableDataSource<RepairOrder>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  )  {  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.reg_number = param.reg_number;
      this.loadCarData();
    });
  }

  loadCarData(){
    this.carService.getCarInfo(this.reg_number).subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data.car.repair_orders);
      this.car = data.car;
      this.dataSource.paginator = this.paginator;
    });
    
  }
}
