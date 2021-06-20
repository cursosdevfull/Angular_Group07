import { NgModule } from '@angular/core';
import { LoginModule } from 'projects/login/src/lib/login.module';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';

@NgModule({
  declarations: [PageLoginComponent],
  exports: [PageLoginComponent],
  imports: [LoginModule],
})
export class CoreModule {}
