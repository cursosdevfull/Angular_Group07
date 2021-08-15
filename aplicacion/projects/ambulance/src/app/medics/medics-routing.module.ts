import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { ListMedicsComponent } from './list-medics/list-medics.component';

const routes: Routes = [
  {
    path: '',
    component: ListMedicsComponent,
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
export class MedicsRoutingModule {}
