import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { ListDriversComponent } from './list-drivers/list-drivers.component';


@NgModule({
  declarations: [
    ListDriversComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }
