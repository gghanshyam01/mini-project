import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerDataService } from '../../shared/customer-data.service';
import { Subscription } from 'rxjs';

// import * as _ from '

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit, OnDestroy {
  payload: {
    totalCount: number;
    assignedCount: number;
    finishedCount: number;
    remainingCount: number;
  }[] = [];

  statusSub: Subscription;
  displayedColumns = ['total', 'rCount', 'assCount', 'fCount'];
  constructor(private custSvc: CustomerDataService) {}

  ngOnInit() {
    this.statusSub = this.custSvc.getData().subscribe((data: any) => {
      this.payload.push(data);
    });
  }

  ngOnDestroy() {
    this.statusSub.unsubscribe();
  }
}
