import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { ListMedicsComponent } from './list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ListMedicsComponent],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    MatIconModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MedicsModule {}
