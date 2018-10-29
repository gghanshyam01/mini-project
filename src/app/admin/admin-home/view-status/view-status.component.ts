import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartReadyEvent, ChartErrorEvent } from 'ng2-google-charts';

import { CustomerDataService } from '../../shared/customer-data.service';

// import * as _ from '

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit, OnDestroy {
  isReady = false;
  msg = 'Loading status chart';
  pieData = {
    chartType: 'ColumnChart',
    dataTable: [['Task', 'Status']],
    options: {
      title: 'Customer Assignment Status'
    }
  };

  statusSub: Subscription;
  // displayedColumns = ['total', 'rCount', 'assCount', 'fCount'];
  constructor(private custSvc: CustomerDataService) {}

  ngOnInit() {
    this.statusSub = this.custSvc.getData().subscribe((data: any) => {
      // this.payload.push(data);
      let arr = ['Finished Count', data.finishedCount];
      this.pieData.dataTable.push(arr);

      arr = ['Assigned Count', data.assignedCount];
      this.pieData.dataTable.push(arr);

      arr = ['Remaining Count', data.remainingCount];
      this.pieData.dataTable.push(arr);

      arr = ['Total Count', data.totalCount];
      this.pieData.dataTable.push(arr);

      this.isReady = true;
    });
  }

  onReady(res: ChartReadyEvent) {
    console.log('Ready');
    this.msg = 'Loading status chart';
    this.isReady = true;
  }

  onError(err: ChartErrorEvent) {
    this.msg = err.message;
  }

  ngOnDestroy() {
    this.statusSub.unsubscribe();
  }
}
