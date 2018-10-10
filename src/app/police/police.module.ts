import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliceRoutingModule } from './police-routing.module';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PoliceRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent, FooterComponent, HeaderComponent, DashboardComponent]
})
export class PoliceModule { }
