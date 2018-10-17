import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliceRoutingModule } from './police-routing.module';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { PanicAlertListComponent } from './panic-alert-list/panic-alert-list.component';
import { LiveTrackingListComponent } from './live-tracking-list/live-tracking-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    PoliceRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent, FooterComponent, HeaderComponent, DashboardComponent, PanicAlertListComponent, LiveTrackingListComponent, VehicleDetailsComponent, ReportsComponent]
})
export class PoliceModule { }
