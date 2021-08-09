import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { ListMedicsComponent } from './list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormMedicComponent } from './form-medic/form-medic.component';
import { MedicRepository } from './application/medic.repository';
import { MedicUseCase } from './application/medic.usecase';
import { MedicsService } from './infraestructure/medics.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListMedicsComponent, FormMedicComponent],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    MatIconModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MedicRepository, useClass: MedicsService },
    MedicUseCase,
  ],
})
export class MedicsModule {}
