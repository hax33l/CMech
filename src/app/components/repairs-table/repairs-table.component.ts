import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RepairsTableDataSource, RepairsTableItem } from './repairs-table-datasource';
import { CarService } from 'src/app/services/car-service/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repairs-table',
  templateUrl: './repairs-table.component.html',
  styleUrls: ['./repairs-table.component.scss']
})
export class RepairsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RepairsTableItem>;
  dataSource!: RepairsTableDataSource;
  car: any;
  repairOrders: any[] = [];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title'];

  constructor( 
    private carService: CarService,
    private route: ActivatedRoute,
    ) {
      this.route.params.subscribe(param => {
        this.carService.getCarInfo(param.reg_number).subscribe((data) => {
          this.repairOrders = data.car.repair_orders;
          console.log(this.repairOrders);
          this.dataSource = new RepairsTableDataSource(this.repairOrders);
        });
      });
  }

  ngAfterViewInit(): void {

    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
