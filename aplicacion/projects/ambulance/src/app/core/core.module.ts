import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from 'projects/login/src/lib/login.module';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './views/components/header/header.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthOperation } from './infraestructure/auth.operation';
import { StorageOperation } from './infraestructure/storage.operation';
import { AuthRepository } from './application/auth.repository';
import { StorageRepository } from './application/storage.repository';

@NgModule({
  declarations: [PageLoginComponent, HeaderComponent, MenuComponent],
  exports: [PageLoginComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    LoginModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
  ],
  providers: [
    { provide: AuthRepository, useClass: AuthOperation },
    { provide: StorageRepository, useClass: StorageOperation },
    // {provide: AuthOperation, useClass: AuthOperation}
    /*     AuthOperation,
    StorageOperation, */
  ],
})
export class CoreModule {}
