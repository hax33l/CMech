import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner-service/owner.service';

@Component({
  selector: 'app-owner-new-workshop',
  templateUrl: './owner-new-workshop.component.html',
  styleUrls: ['./owner-new-workshop.component.scss']
})
export class OwnerNewWorkshopComponent implements OnInit {

  workshopForm!: FormGroup;

  constructor(
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {
    this.workshopForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      city: new FormControl(null, [
        Validators.required,
      ]),
      street: new FormControl(null, [
        Validators.required,
      ]),
      number: new FormControl(null, [
        Validators.required,
      ]),
      postal_code: new FormControl(null, [
        Validators.required,
      ]),
      voivodeship: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  onSubmit() {
    this.ownerService.createWorkshop(this.workshopForm.value).subscribe()
  }

}
