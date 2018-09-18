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
    MatDatepickerModule
} from '@angular/material';

const ngMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    // LayoutModule,
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
    MatMomentDateModule
];
@NgModule({
    exports: ngMaterialModules,
    imports: ngMaterialModules
})
export class MaterialModule { }
