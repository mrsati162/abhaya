import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent, data: {message: 'Login Page'}},
  {path: 'login', component: LoginComponent, data: {message: 'Login Page'}},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'} )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
