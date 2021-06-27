import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { ListMedicsComponent } from './list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListMedicsComponent],
  imports: [CommonModule, MedicsRoutingModule, SharedModule],
})
export class MedicsModule {}
