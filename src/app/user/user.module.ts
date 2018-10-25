import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UnfinishedComponent } from './user-home/unfinished/unfinished.component';
import { CompletedComponent } from './user-home/completed/completed.component';
import { NewlyAssignedComponent } from './user-home/newly-assigned/newly-assigned.component';
import { DataTableComponent } from './user-home/data-table/data-table.component';
import { CustomerDataService } from './customer-data.service';
import { UserMaterialModule } from './user-material/user-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    HttpClientModule
  ],
  declarations: [
    UserHomeComponent,
    UnfinishedComponent,
    CompletedComponent,
    NewlyAssignedComponent,
    DataTableComponent
  ],
  providers: [CustomerDataService]
})
export class UserModule {}
