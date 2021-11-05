import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Car, CarService } from '../services/car-service/car.service';
import { AuthenticationService } from '../services/authentication-service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-user',
  templateUrl: './employee-user.component.html',
  styleUrls: ['./employee-user.component.scss']
})
export class EmployeeUserComponent implements OnInit {

  cars: Car[] = [];
  nickname: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private carService: CarService,
    private authService: AuthenticationService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.carService.getUserCars().subscribe(data => {
      this.cars = data;
      }
    );
    this.nickname = localStorage.getItem("nickname");
  }
  
  onLogout(){
    this.authService.logout();
  }
}
