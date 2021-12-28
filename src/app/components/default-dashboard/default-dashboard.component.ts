import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss']
})
export class DefaultDashboardComponent implements OnInit {

  repTitle: string = ""
  repDescription: string = ""
  repStatus: string = ""
  repWorkshop: string = ""
  repCarPlate: string = ""
  repKey: string = ""
  repWorkshopId: string = ""

  reviewContent: string = ""

  constructor(
    private userService: CarService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userService.getUserHomeData().subscribe( data => {
      this.repTitle = data['repair_order'].title
      this.repDescription = data['repair_order'].description
      this.repStatus = data['repair_order'].status
      this.repCarPlate = data['repair_order'].registration_number
      this.repKey = data['repair_order'].key
      this.repWorkshop = data['workshop'].name + ' - ' + data['workshop'].city + ', ' + data['workshop'].street + ' ' + data['workshop'].number 
      this.repWorkshopId = data['workshop'].id
    })
  }

  openTrackingPage() {
    this.router.navigate(['tracking/' + this.repCarPlate+ '/' + this.repKey])
  }
  addReview() {
    this.userService.addWorkshopReview({'content' : this.reviewContent, 'workshop_id' : this.repWorkshopId}).subscribe( data =>
      {
        let snackBarRef = this._snackBar.open('Workshop review sent', 'Close',{
          duration: 3000
        });
      }
    )
    this.reviewContent = ""
  }
}
