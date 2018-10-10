import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VehiclesComponent} from '../shared/vehicles/vehicles.component';
import {DriversComponent} from '../shared/drivers/drivers.component';
import { InstalledComponent } from './installed/installed.component';

const rtaRoutes: Routes = [
  { path: 'rta',  component: MainComponent ,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'vehicles', component: VehiclesComponent},
      { path: 'drivers', component: DriversComponent},
      { path: 'installed', component: InstalledComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rtaRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RtaRoutingModule { }
