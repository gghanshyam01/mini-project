import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: []
})
export class UserRoutingModule { }
