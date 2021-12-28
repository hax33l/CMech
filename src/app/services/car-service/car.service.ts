import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/operators";

export interface Car {
  id: number,
  registration_number: string,
  manufacturer: string,
  model: string,
  engine_capacity: number,
  power: number,
  vin: string,
  user_id: number
}

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getUserCars()
  {
    return this.http.get<Car[]>(this.apiUrl + 'user_cars');
  }
  getCarInfo(reg_number: string)
  {
    return this.http.get<any>(this.apiUrl + 'car_info/' + reg_number);
  }
  addCar(car: Car){
    return this.http.post<any>(this.apiUrl + 'cars', car).pipe(
      map(car => car)
    )
  }
  getRepairInfo(reg_number: string, key: string){
    return this.http.get<any>(this.apiUrl + 'repair_info/' + reg_number + '/' + key);
  }
  getUserHomeData(){
    return this.http.get<any>(this.apiUrl + 'user_home');
  }
  addWorkshopReview(review: any){
    return this.http.post<any>(this.apiUrl + 'add_review', review)
  }
}
