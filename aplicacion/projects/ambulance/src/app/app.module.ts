import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuService } from './shared/services/menu.service';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { Paginator } from './shared/class/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ConfigModule } from './config/modules/config.module';
import { AMB_Config } from './config/constants/config.constant';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    ConfigModule.forRoot(AMB_Config),
    SharedModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: Paginator }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconService: IconService) {}
}
