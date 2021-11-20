import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-repair-dialog',
  templateUrl: './repair-dialog.component.html',
  styleUrls: ['./repair-dialog.component.scss']
})
export class RepairDialogComponent implements OnInit {

  displayedColumns: string[] = ['created_at', 'title', 'description', 'cost'];
  repair: any;
  dataSource!: MatTableDataSource<any>;
  showTable: boolean = false;

  constructor(
    private router: Router,
    private carService: CarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.loadRepairData(this.data.registration_number, this.data.key);
  }

  loadRepairData(reg_number: string, key: string) {
    this.carService.getRepairInfo(reg_number, key).subscribe((data) => {
      if (data.statuses.length != 0) {
        this.showTable = true;
      }
      this.repair = data.repair_order;
      this.dataSource = new MatTableDataSource<any>(data.statuses);
    });
  }
  openTrackingPage() {
    this.router.navigate(['tracking/' + this.data.registration_number + '/' + this.data.key])
  }
}
