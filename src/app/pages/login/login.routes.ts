import { RouterConfig }       from '@angular/router';
//import { AuthGuard }          from './auth-guard.service';
import { AuthService }        from '../../services//authService';
import { LoginComponent }     from './login.component';

export const loginRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const authProviders = [AuthService];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
