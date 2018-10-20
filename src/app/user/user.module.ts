import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, UserRoutingModule, MatTabsModule],
  declarations: [UserHomeComponent]
})
export class UserModule {}
