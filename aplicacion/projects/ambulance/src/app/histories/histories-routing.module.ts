import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { ListHistoriesComponent } from './list-histories/list-histories.component';

const routes: Routes = [
  {
    path: '',
    component: ListHistoriesComponent,
    data: {
      rolesAllowed: ['ADMIN'],
    },
    canActivate: [AuthorizationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriesRoutingModule {}
