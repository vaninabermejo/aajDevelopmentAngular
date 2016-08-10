import {RouterConfig, provideRouter} from '@angular/router';
import {loginRoutes} from './pages/login/login.routes';
//import {pageRoutes} from './pages/pages.routes';


export const routes: RouterConfig = [
  ...loginRoutes
//  ...pageRoutes

];
export const APP_ROUTES_PROVIDER= provideRouter(routes);
