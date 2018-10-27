import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../admin-home/allocate-customer/data-table/data-table-datasource';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  customers: Customer[] = [];
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<Customer[]>(`/api/customers`);
  }

  getUsers() {
    return this.http.get<User[]>(`/api/users`);
  }

  getFilteredCustomers(key, value) {
    return this.http.post<Customer[]>(`/api/customers`, { [key]: value });
  }

  allocateCustomers(user, customers: Customer[]) {
    return this.http.patch(`/api/users/${user}`, customers);
  }


  getData() {
    return this.http.get(`/api/customers/charts`);
  }
}
