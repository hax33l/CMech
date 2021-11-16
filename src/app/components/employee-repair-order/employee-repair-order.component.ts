import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewRepairDialogComponent } from '../new-repair-dialog/new-repair-dialog.component';
import { Router } from '@angular/router';
import { RepairStatusDialogComponent } from '../repair-status-dialog/repair-status-dialog.component';

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
  displayedColumns: string[] = ['id', 'created_at', 'title', 'description', 'category'];

  in_progress = new MatTableDataSource<RepairOrder>([]);
  new = new MatTableDataSource<RepairOrder>([]);
  ready = new MatTableDataSource<RepairOrder>([]);
  
  @ViewChild('newPag') new_paginator!: MatPaginator;
  @ViewChild('inProgressPag') in_pro_paginator!: MatPaginator;
  @ViewChild('rdyPag') rdy_paginator!: MatPaginator;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private router: Router
  ) {   }
  

  ngOnInit(): void {
    this.employeeService.getWorkshopRepairs().subscribe((data) => {
      this.new.data = data.new;
      this.in_progress.data = data.in_progress;
      this.ready.data = data.ready;
      
      this.new.paginator = this.new_paginator;
      this.in_progress.paginator = this.in_pro_paginator;
      this.ready.paginator = this.rdy_paginator;
    });
    

  }

  openNewRepairDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '80vh';
    dialogConfig.minWidth = '40vw';
    const dialogRef = this.dialog.open(NewRepairDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if( result == true){
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
      }
    });
  }

  openRepairStatusDialog(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    dialogConfig.maxHeight = '80vh';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.minWidth = '50vw';
    dialogConfig.disableClose = true;
    this.dialog.open(RepairStatusDialogComponent, dialogConfig);
  }
}
