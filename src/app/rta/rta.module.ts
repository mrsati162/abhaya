import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {RtaRoutingModule} from './rta-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { InstalledComponent } from './installed/installed.component';

@NgModule({
  imports: [
    CommonModule,
    RtaRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NewregistrationComponent,
    InstalledComponent],
  entryComponents: [
    NewregistrationComponent
  ]
})
export class RtaModule { }
