import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { ListMedicsComponent } from './list-medics/list-medics.component';


@NgModule({
  declarations: [
    ListMedicsComponent
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule
  ]
})
export class MedicsModule { }
