import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Car, CarService } from '../services/car-service/car.service';
import { AuthenticationService } from '../services/authentication-service/authentication.service';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.scss']
})
export class DefaultUserComponent {

  cars: Car[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private carService: CarService,
    private authService: AuthenticationService
    ) {}

  ngOnInit(): void {
    this.carService.getUserCars().subscribe(data => {
      this.cars = data;
      }
    );
  }

  onLogout(){
    this.authService.logout();
  }
}
