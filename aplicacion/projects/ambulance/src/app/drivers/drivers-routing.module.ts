import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDriversComponent } from './list-drivers/list-drivers.component';

const routes: Routes = [{ path: '', component: ListDriversComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversRoutingModule {}
