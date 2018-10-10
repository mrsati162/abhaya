import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {DriversComponent} from './drivers/drivers.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [VehiclesComponent, DriversComponent]
})
export class SharedModule { }
