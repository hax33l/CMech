import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner-service/owner.service';

@Component({
  selector: 'app-owner-workshop',
  templateUrl: './owner-workshop.component.html',
  styleUrls: ['./owner-workshop.component.scss']
})
export class OwnerWorkshopComponent implements OnInit {

  workshops: any;

  workshopForm!: FormGroup;
  
  constructor(
    private ownerService: OwnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadWorkshopData();
  }

  onWorkshopClick(workshop_id: any) {
    localStorage.setItem('workshop_id', workshop_id);
    this.router.navigate(['o-user/']);
  }
  loadWorkshopData() {
    this.ownerService.getOwnerWorkshops().subscribe(data => {
      if (data.length == 1) {
        localStorage.setItem('workshop_id', data[0].id);
        this.router.navigate(['o-user/']);
      } else if (data.length == 0) {
        console.log('no workshops yet')
      } else {
        this.workshops = data;
      }
    });
  }
  newWorkshop() {
    this.router.navigate(['o-new']);
  }
}
