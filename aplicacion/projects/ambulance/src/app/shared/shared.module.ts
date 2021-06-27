import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, FlexLayoutModule],
  exports: [TitleComponent],
})
export class SharedModule {}
