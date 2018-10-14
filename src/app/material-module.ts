import { NgModule } from '@angular/core';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSnackBarModule
} from '@angular/material';

const ngMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatChipsModule,
    MatSnackBarModule
];
@NgModule({
    exports: ngMaterialModules,
    imports: ngMaterialModules
})
export class MaterialModule { }
