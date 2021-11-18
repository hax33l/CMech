import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';

@Component({
  selector: 'app-employee-part-storage',
  templateUrl: './employee-part-storage.component.html',
  styleUrls: ['./employee-part-storage.component.scss']
})
export class EmployeePartStorageComponent implements OnInit {

  displayedColumns: string[] = ['category', 'name', 'manufacturer', 'price'];
  dataSource!: MatTableDataSource<any>;

  partForm = this.fb.group({
    name: ['', Validators.required],
    manufacturer: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    workshop_id: ['']
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private _liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit(): void {
    this.loadPartsData();
  }

  loadPartsData() {
    this.employeeService.getParts().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data.parts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addPart() {
    this.partForm.value.workshop_id = localStorage.getItem('workshop_id');
    this.employeeService.addPart(this.partForm.value).subscribe(data => {
      if (data.message == "Success"){
        this.partForm.reset()
        this.loadPartsData()
      }
    });
    this.formGroupDirective.resetForm()
    this.accordion.closeAll()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
