import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';
import { OwnerService } from 'src/app/services/owner-service/owner.service';

@Component({
  selector: 'app-owner-workshop-reviews',
  templateUrl: './owner-workshop-reviews.component.html',
  styleUrls: ['./owner-workshop-reviews.component.scss']
})
export class OwnerWorkshopReviewsComponent implements OnInit {
  
  reviewLength: number = 0
  reviews: any;

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.employeeService.getReviews().subscribe( data => {
      this.reviewLength = data.reviews.length
      this.reviews = data.reviews
    })
  }

}
