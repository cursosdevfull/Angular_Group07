import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from 'projects/login/src/lib/login.module';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PageLoginComponent],
  exports: [PageLoginComponent],
  imports: [LoginModule, FlexLayoutModule, MatIconModule],
})
export class CoreModule {}
