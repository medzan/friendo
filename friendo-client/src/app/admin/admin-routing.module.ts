import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AuthAdminGuardService } from '../service/auth-admin-guard.service';

const routes: Routes = [
	{
		path:'admin',
		component: AdminDashboardComponent,
		canActivate: [AuthAdminGuardService]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
