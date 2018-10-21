import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  email: Observable<any>;
  navLinks = [
    {
      path: 'unfinished',
      label: 'Unfinished'
    },
    {
      path: 'completed',
      label: 'Completed'
    },
    {
      path: 'newly-assigned',
      label: 'Newly Assigned'
    }
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.email = this.http.get<any>(`/api/users/me`);
  }
}
