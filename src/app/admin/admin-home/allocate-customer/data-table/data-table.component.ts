import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';

import { DataTableDataSource } from './data-table-datasource';
import { InfoShareService } from 'src/app/shared/info-share.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @Input()
  displayedColumns = [];

  @Input()
  data = [];

  constructor(private infoSvc: InfoShareService) {}

  ngOnInit() {
    // this.infoSvc.showProgressBar();
    // this.subs = this.customerSvc.getCustomers().subscribe(data => {
    //   this.customerSvc.customers = data;
    //   this.dataSource = new DataTableDataSource(
    //     this.paginator,
    //     this.sort,
    //     this.data
    //   );
    //   this.infoSvc.hideProgressBar();
    // });
    this.dataSource = new DataTableDataSource(
      this.paginator,
      this.sort,
      this.data
    );
  }
  ngOnDestroy() {
    this.infoSvc.hideProgressBar();
  }
}
