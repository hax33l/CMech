import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-repair-dialog',
  templateUrl: './new-repair-dialog.component.html',
  styleUrls: ['./new-repair-dialog.component.scss']
})
export class NewRepairDialogComponent implements OnInit {
  repairForm = this.fb.group({
    category: ['', Validators.required],
    registration_number: [''],
    email: ['', Validators.email],
    title: [''],
    description: [''],
    workshop_id: [''],
    status: ['']
  });

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.repairForm.value.workshop_id = localStorage.getItem('workshop_id');
    this.repairForm.value.status = 'New';
    this.employeeService.addRepairOrder(this.repairForm.value).subscribe(data => {
      this._snackBar.open('Repair order key: ' + data.repairOrder.key, 'Close', { verticalPosition: this.verticalPosition });
    });
  }
}
