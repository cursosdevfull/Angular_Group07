import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidComponent } from './covid/covid.component';
import { CovidUseCase } from './application/covid.usecase';
import { CovidRepository } from './application/covid.repository';
import { CovidOperation } from './infraestructure/covid.operation';
import { SocketComponent } from './socket/socket.component';
import { SocketUseCase } from './application/socket.usecase';
import { SocketRepository } from './application/socket.repository';
import { SocketOperation } from './infraestructure/socket.operation';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DashboardComponent, CovidComponent, SocketComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
    FlexLayoutModule,
  ],
  providers: [
    CovidUseCase,
    SocketUseCase,
    { provide: CovidRepository, useClass: CovidOperation },
    { provide: SocketRepository, useClass: SocketOperation },
  ],
})
export class DashboardModule {}
