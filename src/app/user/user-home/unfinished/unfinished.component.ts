import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerDataService } from '../../customer-data.service';
import { Customer } from '../data-table/data-table-datasource';
import { Subscription } from 'rxjs';
import { InfoShareService } from 'src/app/shared/info-share.service';

@Component({
  selector: 'app-unfinished',
  templateUrl: './unfinished.component.html',
  styleUrls: ['./unfinished.component.css']
})
export class UnfinishedComponent implements OnInit,  OnDestroy {
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
  constructor(private custSvc: CustomerDataService, private infoSvc: InfoShareService) {}

  ngOnInit() {
    this.infoSvc.showProgressBar();
    this.custSubs = this.custSvc.getCustomersUnfinished().subscribe(res => {
      console.log(res);
      this.customers = res;
      this.infoSvc.hideProgressBar();
    });
  }

  ngOnDestroy() {
    this.custSubs.unsubscribe();
    this.infoSvc.hideProgressBar();
  }
}
