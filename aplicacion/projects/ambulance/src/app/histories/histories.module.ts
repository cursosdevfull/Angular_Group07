import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { ListHistoriesComponent } from './list-histories/list-histories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListHistoriesComponent],
  imports: [CommonModule, HistoriesRoutingModule, SharedModule],
})
export class HistoriesModule {}
