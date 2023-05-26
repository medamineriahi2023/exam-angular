import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BadgesComponent } from './badges/badges.component';
import { UpdateBadgeComponent } from './update-badge/update-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    NotFoundComponent,
    BadgesComponent,
    UpdateBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
