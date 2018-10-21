import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UnfinishedComponent } from './user-home/unfinished/unfinished.component';
import { CompletedComponent } from './user-home/completed/completed.component';
import { NewlyAssignedComponent } from './user-home/newly-assigned/newly-assigned.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule, MatTabsModule],
  declarations: [UserHomeComponent, UnfinishedComponent, CompletedComponent, NewlyAssignedComponent]
})
export class UserModule {}
