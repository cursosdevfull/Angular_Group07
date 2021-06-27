import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { ListHistoriesComponent } from './list-histories/list-histories.component';


@NgModule({
  declarations: [
    ListHistoriesComponent
  ],
  imports: [
    CommonModule,
    HistoriesRoutingModule
  ]
})
export class HistoriesModule { }
