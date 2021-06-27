import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OwnComponent } from './own.component';

const routes: Routes = [
  { path: '', component: OwnComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
