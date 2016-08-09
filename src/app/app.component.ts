import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


//services missing
@Component({
  selector:'app',
  template:`
      <router-outlet></router-outlet>
    `,
  directives:[ROUTER_DIRECTIVES]

})
export class App{
constructor(public router:Router){}
}
