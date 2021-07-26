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
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Paginator } from './shared/class/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ConfigModule } from './config/modules/config.module';
import { AMB_Config } from './config/constants/config.constant';
import { SharedModule } from './shared/shared.module';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';

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
    RecaptchaFormsModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthenticationGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconService: IconService) {}
}
