import {bootstrap} from '@angular/platform-browser-dynamic';
import {ENV_PROVIDERS} from './platform/environment';
import {App} from './app/app.component';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import { FORM_PROVIDERS } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './app/services/common/auth.guard';
import {AuthService} from './app/services/authService';
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    FORM_PROVIDERS,
    ENV_PROVIDERS,
    AUTH_PROVIDERS,
    AuthGuard,
    AuthService,
    APP_ROUTES_PROVIDER
  ])
  .catch(err => console.error(err));

}
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when documetn is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
