import { Component, OnInit } from '@angular/core';
import {VehicleApiService} from './services/vehicle.api.service';
import {Vehicle} from './vehicle.model';
import {PaginationModel} from '../pagination.model';
import {PageModel} from '../page.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicleArray:  Array<Vehicle> = [];
  public page: PageModel;
  public p: number;

  constructor(private vehicleApiService: VehicleApiService) {
    console.log('in vehicles');
    this.page = new PageModel(0, 0, 0, 0);
  }

  ngOnInit() {
    this.getVehicles(0);
  }

  pageChanged(event) {
    this.p = event;
    this.getVehicles(this.p - 1);
    console.log(event);
  }

  getVehicles(page: number) {
    this.vehicleApiService.getAll(page).subscribe((data:  PaginationModel) => {
      this.vehicleArray  =  data.content;
      this.page = data.page;
      console.log(this.vehicleArray);
    });
  }

}
