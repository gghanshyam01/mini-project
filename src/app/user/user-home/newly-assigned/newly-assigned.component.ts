import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../data-table/data-table-datasource';
import { CustomerDataService } from '../../customer-data.service';
import { InfoShareService } from 'src/app/shared/info-share.service';

@Component({
  selector: 'app-newly-assigned',
  templateUrl: './newly-assigned.component.html',
  styleUrls: ['./newly-assigned.component.css']
})
export class NewlyAssignedComponent implements OnInit, OnDestroy {
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
  constructor(
    private custSvc: CustomerDataService,
    private infoSvc: InfoShareService
  ) {}

  ngOnInit() {
    this.infoSvc.showProgressBar();
    this.custSubs = this.custSvc.getCustomersNewlyAssigned().subscribe(res => {
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
