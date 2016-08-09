import {RouterConfig, provideRouter} from '@angular/router';
import {loginRoutes} from './pages/login/login.routes';
//import {pagesRouter} from './pages/pages.routes';


export const routes: RouterConfig = [
  ...loginRoutes
  // pagesRouter

];
export const APP_ROUTES_PROVIDER= provideRouter(routes);
