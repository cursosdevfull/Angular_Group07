import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { ListHistoriesComponent } from './list-histories/list-histories.component';
import { SharedModule } from '../shared/shared.module';
import { MedicRepository } from '../medics/application/medic.repository';
import { MedicsService } from '../medics/infraestructure/medics.service';
import { MedicUseCase } from '../medics/application/medic.usecase';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHistoryComponent } from './form-history/form-history.component';
import { HistoryRepository } from './application/history.repository';
import { HistoryUseCase } from './application/history.usecase';
import { HistoriesService } from './infraestructure/history.service';

@NgModule({
  declarations: [ListHistoriesComponent, FormHistoryComponent],
  imports: [
    CommonModule,
    HistoriesRoutingModule,
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
    { provide: HistoryRepository, useClass: HistoriesService },
    HistoryUseCase,
  ],
})
export class HistoriesModule {}
