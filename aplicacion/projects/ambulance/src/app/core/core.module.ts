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

@NgModule({
  declarations: [PageLoginComponent, HeaderComponent, MenuComponent],
  exports: [PageLoginComponent, HeaderComponent, MenuComponent],
  imports: [
    LoginModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
  ],
})
export class CoreModule {}
