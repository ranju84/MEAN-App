import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login'}
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Signup'}
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard'}
  },
  {
    path: '*',
    component: PageNotFoundComponent,
    data: { title: '404: Page not found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
