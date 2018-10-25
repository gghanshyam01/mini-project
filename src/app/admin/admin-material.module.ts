import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';

const ngAdminMaterialModules = [
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
];

@NgModule({
  exports: [ngAdminMaterialModules],
  imports: [ngAdminMaterialModules]
})
export class AdminMaterialModule {}
