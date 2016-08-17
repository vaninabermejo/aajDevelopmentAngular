import {RouterConfig, provideRouter} from '@angular/router';
import {AuthGuard}  from './services/common/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent }  from './pages/home/home.component';





export const routes: RouterConfig = [
   {path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: '**',     component: HomeComponent }
];

export const APP_ROUTES_PROVIDER= [provideRouter(routes)];
