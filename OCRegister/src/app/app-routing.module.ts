import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterlistComponent} from './registerlist/registerlist.component';
import {InformComponent} from './inform/inform.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'registerlist', component : RegisterlistComponent},
  {path : 'inform', component : InformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {DashboardComponent ; RegisterlistComponent ; InformComponent}
