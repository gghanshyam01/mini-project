import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMaterialModule } from './admin-material.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewStatusComponent } from './admin-home/view-status/view-status.component';
import { UploadDataComponent } from './admin-home/upload-data/upload-data.component';
import { AllocateCustomerComponent } from './admin-home/allocate-customer/allocate-customer.component';
import { DataTableComponent } from './admin-home/allocate-customer/data-table/data-table.component';
import { CustomerDataService } from './shared/customer-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdminHomeComponent,
    ViewStatusComponent,
    UploadDataComponent,
    AllocateCustomerComponent,
    DataTableComponent
  ],
  providers: [CustomerDataService]
})
export class AdminModule {}
