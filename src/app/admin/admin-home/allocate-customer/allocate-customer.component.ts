import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CustomerDataService } from '../../shared/customer-data.service';
import { Subscription } from 'rxjs';
import { Customer } from './data-table/data-table-datasource';
import { InfoShareService } from 'src/app/shared/info-share.service';

@Component({
  selector: 'app-allocate-customer',
  templateUrl: './allocate-customer.component.html',
  styleUrls: ['./allocate-customer.component.css']
})
export class AllocateCustomerComponent implements OnInit, OnDestroy {
  selected = '';
  keyword = '';
  filterBy = [
    'vehicleNumber',
    'customerName',
    'contactNumber',
    'carMake',
    'carModel',
    'vehicleType'
  ];

  assignCustomer = this.fb.group({
    keyword: [''],
    property: [''],
    user: ['', Validators.required]
  });

  @ViewChild('f')
  formRef: FormGroupDirective;
  error = '';
  userList = [];
  userSub: Subscription;
  custSub: Subscription;
  custFilterSub: Subscription;
  customers: Customer[] = [];
  constructor(
    private fb: FormBuilder,
    private custSvc: CustomerDataService,
    private infoSvc: InfoShareService
  ) {}

  filterChanged() {
    this.error = '';
    this.customers = [];
    console.log(this.assignCustomer.value.keyword);
    this.custFilterSub = this.custSvc
      .getFilteredCustomers(
        this.assignCustomer.value.property,
        this.assignCustomer.value.keyword
      )
      .subscribe(res => {
        if (res.length === 0) {
          this.ngOnInit();
          this.formRef.resetForm();
          return (this.error = 'No match found.');
        }
        this.customers = res;
      });
  }
  ngOnInit() {
    this.userSub = this.custSvc.getUsers().subscribe(res => {
      this.userList = res;
    });
    this.infoSvc.showProgressBar();
    this.custSub = this.custSvc.getCustomers().subscribe(res => {
      this.customers = res;
      this.infoSvc.hideProgressBar();
    });
  }

  onKeyDownPress(input: HTMLInputElement) {
    if (input.value === '') {
      console.log('if');
      return false;
    } else {
      console.log('else');
      input.value = '';
      return false;
    }
  }
  assignClick() {
    this.error = '';
    const data = this.assignCustomer.value;
    console.log(data.user, this.customers);
    if (data.keyword === '' || data.property === '') {
      return (this.error = 'Please select all values');
    }
    this.custSvc.allocateCustomers(data.user, this.customers).subscribe(
      res => {
        console.log(res);
      },
      err => {
        if (err.status === 200) {
          return this.filterChanged();
        }
        this.error = err.error;
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.infoSvc.hideProgressBar();
    this.userSub.unsubscribe();
    this.custSub.unsubscribe();
    if (this.custFilterSub) {
      this.custFilterSub.unsubscribe();
    }
  }
}
