import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../data-table/data-table-datasource';
import { InfoShareService } from 'src/app/shared/info-share.service';
import { CustomerDataService } from '../../customer-data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit, OnDestroy {
  filterBy = [
    'vehicleNumber',
    'customerName',
    'contactNumber',
    'carMake',
    'carModel',
    'vehicleType'
  ];
  custSubs: Subscription;
  customers: Customer[] = [];
  constructor(private infoSvc: InfoShareService, private custSvc: CustomerDataService) {}

  ngOnInit() {
    this.infoSvc.showProgressBar();
    this.custSubs = this.custSvc.getCustomersFinished().subscribe(res => {
      this.customers = res;
      this.infoSvc.hideProgressBar();
    });
  }

  ngOnDestroy() {
    this.custSubs.unsubscribe();
    this.infoSvc.hideProgressBar();
  }
}
