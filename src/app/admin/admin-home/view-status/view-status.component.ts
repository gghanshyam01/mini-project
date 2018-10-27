import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../../shared/customer-data.service';

// import * as _ from '

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
  payload: {
    totalCount: number;
    assignedCount: number;
    finishedCount: number;
    remainingCount: number;
  }[] = [];
  displayedColumns = ['total', 'rCount', 'assCount', 'fCount'];
  constructor(private custSvc: CustomerDataService) {}

  ngOnInit() {
    this.custSvc.getData().subscribe((data: any) => {
      // let arr = [];
      // arr.push('Total Count');
      // this.payload[0].totalCount = data.totalCount;
      // // this.payload = [];
      // // this.payload.push('Assigned Count');
      // this.payload[0].assignedCount = data.assignedCount;
      // // this.payload = [];
      // // this.payload.push('Finished Count');
      // this.payload[0].finishedCount = data.finishedCount;
      // this.payload[0].remainingCount = data.remainingCount;

      this.payload.push(data);
      console.log(this.payload);
    });
  }
}
