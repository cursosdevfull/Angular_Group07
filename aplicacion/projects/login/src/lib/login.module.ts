import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
