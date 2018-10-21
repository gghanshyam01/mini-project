import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

const ngAdminMaterialModules = [MatTabsModule, MatCardModule, MatButtonModule];

@NgModule({
  exports: [ngAdminMaterialModules],
  imports: [ngAdminMaterialModules]
})
export class AdminMaterialModule {}
