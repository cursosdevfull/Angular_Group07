import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'medics',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./medics/medics.module').then((m) => m.MedicsModule),
  },
  {
    path: 'drivers',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'histories',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./histories/histories.module').then((m) => m.HistoriesModule),
  },
  {
    path: 'users',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
