import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

const ngUserMatModules = [
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  exports: [ngUserMatModules],
  imports: [ngUserMatModules]
})
export class UserMaterialModule {}
