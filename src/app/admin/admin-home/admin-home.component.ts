import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  navLinks = [
    {
      path: 'view-status',
      label: 'View Status'
    },
    {
      path: 'allocate-customer',
      label: 'Allocate Customer'
    },
    {
      path: 'upload',
      label: 'Upload Customer Data'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
