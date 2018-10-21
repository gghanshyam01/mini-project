import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';
import { UnfinishedComponent } from './user-home/unfinished/unfinished.component';
import { CompletedComponent } from './user-home/completed/completed.component';
import { NewlyAssignedComponent } from './user-home/newly-assigned/newly-assigned.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      { path: '', redirectTo: 'unfinished' },
      { path: 'unfinished', component: UnfinishedComponent },
      { path: 'completed', component: CompletedComponent },
      { path: 'newly-assigned', component: NewlyAssignedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
