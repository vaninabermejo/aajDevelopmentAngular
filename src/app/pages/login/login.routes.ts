import { RouterConfig }       from '@angular/router';
//import { AuthGuard }          from './auth-guard.service';
import { AuthService }        from '../../services/authService';
import { LoginComponent }     from './login.component';

export const loginRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const authProviders = [AuthService];
