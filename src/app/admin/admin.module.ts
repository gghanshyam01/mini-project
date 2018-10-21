import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewStatusComponent } from './admin-home/view-status/view-status.component';
import { UploadDataComponent } from './admin-home/upload-data/upload-data.component';
import { AllocateCustomerComponent } from './admin-home/allocate-customer/allocate-customer.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, MatTabsModule],
  declarations: [AdminHomeComponent, ViewStatusComponent, UploadDataComponent, AllocateCustomerComponent]
})
export class AdminModule {}
