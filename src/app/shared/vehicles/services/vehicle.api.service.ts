import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {

  constructor(private  httpClient:  HttpClient) { }
  API_URL  =   'http://61.12.111.81:8099/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  getAll(page) {
    return this.httpClient.get(`${this.API_URL}/vehicleDetails?page=${page}&size=1`, this.httpOptions);
  }
 /* getValidationData(value) {
    return this.httpClient.get(`${this.API_URL}/eptValidation?eptDataVal=${value}`, this.httpOptions);
  }

  changeValidationStatus(dataValidation) {
    return this.httpClient.put<DataValidation>(`${this.API_URL}/eptChangeStatus`, JSON.stringify(dataValidation), this.httpOptions);
  }

  getPaginationData(tableParam, page, size) {
    return this.httpClient.get(`${this.API_URL}/${tableParam}?page=${page}&size=${size}`, this.httpOptions);
  }*/
}
