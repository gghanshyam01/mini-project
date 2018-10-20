import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AdminHomeComponent]
})
export class AdminModule {}
