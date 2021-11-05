import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car-service/car.service';

@Component({
  selector: 'app-view-repair',
  templateUrl: './view-repair.component.html',
  styleUrls: ['./view-repair.component.scss']
})
export class ViewRepairComponent implements OnInit {
  displayedColumns: string[] = ['created_at','title','description','cost'];
  reg_number: string = '';
  key: string = '';
  repair: any;  
  dataSource!: MatTableDataSource<any>;
  status: string = '';
  link: string = '';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {      
      this.reg_number = param.reg_number;
      this.key = param.key;
    });

    this.link = this.router.url
    this.loadRepairData(this.reg_number,this.key);

  }

  loadRepairData(reg_number: string, key: string){
    this.carService.getRepairInfo(reg_number,key).subscribe((data) => {
      this.repair = data.repair_order;
      this.status = data.repair_order.status;
      this.dataSource = new MatTableDataSource<any>(data.statuses);
    });
  }
}
