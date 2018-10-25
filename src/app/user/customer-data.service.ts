import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './user-home/data-table/data-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  getCustomersUnfinished() {
    return this.http.get<Customer[]>(`/api/users/me/customers`);
  }
  getCustomersFinished() {
    return this.http.get<Customer[]>(`/api/users/me/customers/finished`);
  }
  getCustomersNewlyAssigned() {
    return this.http.get<Customer[]>(`/api/users/me/customers/newlyassigned`);
  }
}
