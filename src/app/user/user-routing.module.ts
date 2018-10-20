import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  declarations: []
})
export class UserRoutingModule {}
