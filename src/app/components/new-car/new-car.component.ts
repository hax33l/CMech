import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  newCarForm!: FormGroup;
  tmp: any;

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newCarForm = this.formBuilder.group({
      manufacturer: [null, [
        Validators.required
      ]],
      model: [null, [Validators.required]],
      registration_number: [null, [Validators.required]],
      engine_capacity: [null, [Validators.required]],
      power: [null, [Validators.required]],
      vin: [null, [Validators.required]],
    })
  }
  onSubmit() {
    this.tmp = this.carService.addCar(this.newCarForm.value).subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['d-user']));
  }
}
