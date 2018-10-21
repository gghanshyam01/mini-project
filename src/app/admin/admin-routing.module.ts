import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewStatusComponent } from './admin-home/view-status/view-status.component';
import { UploadDataComponent } from './admin-home/upload-data/upload-data.component';
import { AllocateCustomerComponent } from './admin-home/allocate-customer/allocate-customer.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: '', redirectTo: 'view-status' },
      { path: 'view-status', component: ViewStatusComponent },
      { path: 'allocate-customer', component: AllocateCustomerComponent },
      { path: 'upload', component: UploadDataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
