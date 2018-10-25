import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { CustomerDataService } from '../../customer-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @Input()
  displayedColumns = [];

  @Input()
  isDialog = false;

  @Input()
  data = [];

  ngOnInit() {
    this.dataSource = new DataTableDataSource(
      this.paginator,
      this.sort,
      this.data
    );
  }

  constructor(private custSvc: CustomerDataService) {

  }

  openDialog(id: string) {
    this.custSvc.show(id);
  }
}
