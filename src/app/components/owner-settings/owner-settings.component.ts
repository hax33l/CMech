import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OwnerService } from 'src/app/services/owner-service/owner.service';

export interface Employee {
  id: number;
  nickname: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
}
@Component({
  selector: 'app-owner-settings',
  templateUrl: './owner-settings.component.html',
  styleUrls: ['./owner-settings.component.scss']
})
export class OwnerSettingsComponent implements AfterViewInit {

  displayedColumns: string[] = ['first_name', 'last_name', 'nickname', 'phone', 'email', 'delete'];

  newEmail: string = "";
  editDetails = false;
  workshop: any;
  employees = new MatTableDataSource<Employee>([]);
  workshopForm = this.fb.group({
    name: [''],
    city: [''],
    street: [''],
    number: [''],
    postal_code: [''],
    voivodeship: [''],
  })

  @ViewChild(MatPaginator) employee_paginator!: MatPaginator;

  constructor(
    private ownerService: OwnerService,
    private fb: FormBuilder
  ) { }

  ngAfterViewInit(): void {
    this.loadWorkshopData()
  }

  loadWorkshopData() {
    this.ownerService.getGeneralSettings().subscribe(data => {
      this.workshop = data.workshop
      this.employees.data = data.employees
      this.employees.paginator = this.employee_paginator;

      this.workshopForm.controls['name'].setValue(data.workshop.name)
      this.workshopForm.controls['city'].setValue(data.workshop.city)
      this.workshopForm.controls['street'].setValue(data.workshop.street)
      this.workshopForm.controls['number'].setValue(data.workshop.number)
      this.workshopForm.controls['postal_code'].setValue(data.workshop.postal_code)
      this.workshopForm.controls['voivodeship'].setValue(data.workshop.voivodeship)
    });
  }
  swapEdit() {
    this.editDetails = !this.editDetails
  }
  removeEmployee(id: any) {
    this.ownerService.destroyEmployee(id).subscribe()
    this.loadWorkshopData()
  }
  addEmployee() {
    this.ownerService.addEmployee(this.newEmail).subscribe()
    this.loadWorkshopData()
    this.newEmail = ""
  }
  updateWorkshop() {
    this.ownerService.updateWorkshop(this.workshopForm.value).subscribe()
    this.loadWorkshopData()
    this.editDetails = false
  }
}
