import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";

//services missing
@Component({
  selector:'app',
  template:`
      <router-outlet></router-outlet>
    `,
  directives:[ROUTER_DIRECTIVES, MaterializeDirective]

})
export class App{
constructor(public router:Router){}
}
