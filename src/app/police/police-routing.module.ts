import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VehiclesComponent} from '../shared/vehicles/vehicles.component';
import {DriversComponent} from '../shared/drivers/drivers.component';

const routes: Routes = [
  {path: 'police',  component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'vehicles', component: VehiclesComponent},
      { path: 'drivers', component: DriversComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliceRoutingModule { }
