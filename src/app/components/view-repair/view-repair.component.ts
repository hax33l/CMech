import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {      
      this.reg_number = param.reg_number;
      this.key = param.key;
    });

    console.log(this.reg_number + this.key)
    this.loadRepairData(this.reg_number,this.key);

  }

  loadRepairData(reg_number: string, key: string){
    this.carService.getRepairInfo(reg_number,key).subscribe((data) => {
      this.repair = data.repair_order;
      this.dataSource = new MatTableDataSource<any>(data.statuses);
      console.log(this.dataSource)
    });
  }
}
