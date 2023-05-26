import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UpdateBadgeComponent} from "./update-badge/update-badge.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path : 'admin' , component:DashboardAdminComponent },
  {path : 'badge/:id' , component:UpdateBadgeComponent },
  {path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
