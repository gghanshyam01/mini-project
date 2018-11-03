import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { CustomerDataService } from '../../customer-data.service';
import { Feedback } from '../unfinished/feedback-dialog/feedback-dialog.component';
import { Subscription } from 'rxjs';

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
  isDialog = false;

  @Input()
  data = [];

  dialogSub: Subscription;

  ngOnInit() {
    this.dataSource = new DataTableDataSource(
      this.paginator,
      this.sort,
      this.data
    );
  }

  constructor(private custSvc: CustomerDataService) {}

  openDialog(id: string) {
    this.dialogSub = this.custSvc.show(id).subscribe((result: Feedback) => {
      if (result !== undefined) {
        this.custSvc
          .enterFeedback(id, result)
          .toPromise()
          .then(res => {
            console.log(res);
          });
      }
    });
  }

  ngOnDestroy() {
    if (this.dialogSub) {
      this.dialogSub.unsubscribe();
    }
  }
}
