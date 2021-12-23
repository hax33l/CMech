import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewRepairDialogComponent } from '../new-repair-dialog/new-repair-dialog.component';
import { Router } from '@angular/router';
import { RepairStatusDialogComponent } from '../repair-status-dialog/repair-status-dialog.component';
import { MatSort } from '@angular/material/sort';
import { NumberLiteralType } from 'typescript';

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
  selector: 'app-employee-repair-order',
  templateUrl: './employee-repair-order.component.html',
  styleUrls: ['./employee-repair-order.component.scss']
})
export class EmployeeRepairOrderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'created_at', 'plate', 'title', 'description', 'category'];
  messageColor: string = 'white';
  messages: any;
  messagesLength: number = 0;
  
  workshop_name: string = '';

  in_progress = new MatTableDataSource<RepairOrder>([]);
  new = new MatTableDataSource<RepairOrder>([]);
  ready = new MatTableDataSource<RepairOrder>([]);

  new_count = 0
  progress_count = 0
  ready_count = 0

  @ViewChild('newPag') new_paginator!: MatPaginator;
  @ViewChild('inProgressPag') in_pro_paginator!: MatPaginator;
  @ViewChild('rdyPag') rdy_paginator!: MatPaginator;
  @ViewChild(MatSort) new_sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.employeeService.getNews().subscribe((data) => {
      this.messages = data.messages;
      this.messagesLength = data.messages.length;
    });
    this.employeeService.getWorkshopRepairs().subscribe((data) => {
      this.new.data = data.new;
      this.in_progress.data = data.in_progress;
      this.ready.data = data.ready;
      this.new.paginator = this.new_paginator;
      this.in_progress.paginator = this.in_pro_paginator;
      this.ready.paginator = this.rdy_paginator;
    });
    this.employeeService.getRepairStatistics().subscribe((data) => {
      this.new_count = data.new
      this.progress_count = data.in_progress
      this.ready_count = data.ready
      this.workshop_name = data.workshop
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.new.filter = filterValue.trim().toLowerCase();
    this.in_progress.filter = filterValue.trim().toLowerCase();
    this.ready.filter = filterValue.trim().toLowerCase();
  }

  openNewRepairDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '80vh';
    dialogConfig.minWidth = '40vw';
    const dialogRef = this.dialog.open(NewRepairDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
      }
    });
  }

  openRepairStatusDialog(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    dialogConfig.maxHeight = '80vh';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.minWidth = '50vw';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(RepairStatusDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.data)
        window.location.reload();
    });
  }
}
