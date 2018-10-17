import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VehiclesComponent} from '../shared/vehicles/vehicles.component';
import {DriversComponent} from '../shared/drivers/drivers.component';
import { PanicAlertListComponent } from './panic-alert-list/panic-alert-list.component';
import { LiveTrackingListComponent } from './live-tracking-list/live-tracking-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: 'police',  component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'vehicles', component: VehiclesComponent},
      { path: 'drivers', component: DriversComponent},
      { path: 'panicalerts', component: PanicAlertListComponent},
      { path: 'liveTracking', component: LiveTrackingListComponent},
      { path: 'vehicleDetails', component: VehicleDetailsComponent},
      { path: 'reports', component: ReportsComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliceRoutingModule { }
