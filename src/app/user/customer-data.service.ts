import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './user-home/data-table/data-table-datasource';
import { MatDialog } from '@angular/material';

@Injectable()
export class CustomerDataService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getCustomersUnfinished() {
    return this.http.get<Customer[]>(`/api/users/me/customers`);
  }
  getCustomersFinished() {
    return this.http.get<Customer[]>(`/api/users/me/customers/finished`);
  }
  getCustomersNewlyAssigned() {
    return this.http.get<Customer[]>(`/api/users/me/customers/newlyassigned`);
  }

  show(id: string) {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   data: {name: this.name, animal: this.animal}
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
