import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';

const ngUserMatModules = [
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
];

@NgModule({
  exports: [ngUserMatModules],
  imports: [ngUserMatModules]
})
export class UserMaterialModule {}
