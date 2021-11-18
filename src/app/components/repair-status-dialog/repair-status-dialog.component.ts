import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';

@Component({
  selector: 'app-repair-status-dialog',
  templateUrl: './repair-status-dialog.component.html',
  styleUrls: ['./repair-status-dialog.component.scss']
})
export class RepairStatusDialogComponent implements OnInit {
  statusForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    cost: [''],
    repair_order_id: ['']
  });

  title: string = '';
  description: string = '';
  displayedColumns: string[] = ['created_at', 'title', 'description', 'cost'];
  statuses: string[] = ["New", "In progress", "Ready"]
  currentStatus: string = "New";
  statusChanged: boolean = false;
  dataSource!: MatTableDataSource<any>;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<RepairStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.currentStatus = this.data.status
  }

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    this.loadRepairData();
  }

  loadRepairData() {
    this.employeeService.getRepairStatuses(this.data.id).subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data.statuses);
    });
  }

  onAdd() {
    this.statusForm.value.repair_order_id = this.data.id;
    this.employeeService.addRepairStatus(this.statusForm.value).subscribe(data => {
      if (data.message == "Success")
        this.statusForm.reset()
    });
    this.loadRepairData();
  }
  radioChange() {
    this.statusChanged = true;
  }
  closeDialog() {
    if (this.statusChanged)
      this.employeeService.updateRepairStatus(this.currentStatus, this.data.id).subscribe()
    this.dialogRef.close({ event: 'close', data: this.statusChanged });
  }
}
