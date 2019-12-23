import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ManageComponent } from './components/manage/manage.component';

const routes: Routes = [
  {path:"", component:DashboardComponent}, 
   {path:"manage", component:ManageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const 
RoutingComponent = [DashboardComponent,ManageComponent];
