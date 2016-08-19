import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";

//services missing
@Component({
  selector:'app',
  template:`
  <div class="navbar-fixed hide-on-small-only ">
  <nav>
    <div class="nav-wrapper teal darken-3">
      <ul class="right">
        <li><a [routerLink]="['/yyyy']">login</a></li>
        <li><a hreF="#" (click)="xxxx($event)">xxxx</a></li>
        <li><a href="#" (click)="logout($event)">Logout</a></li>
      </ul>
    </div>
  </nav>
</div>

<nav class="hide-on-med-and-up teal darken-3">
  <div class="container">
    <ul id="slide-out" class="side-nav fixed">
      <li class="logo" style="text-align: center;">
        <img src="image.png" style="padding-top: 10px;">
      </li>
      <li class="no-padding">
        <ul>
        <li><a [routerLink]="['/yyyy']">yyyy</a></li>
        <li><a hreF="#" (click)="xxxx($event)">xxxx</a></li>
        <li><a href="#" (click)="logout($event)">Logout</a></li>
        </ul>
      </li>
    </ul>
    <a href="#" materialize="sideNav" [materializeParams]="[{edge:'left'}]" data-activates="slide-out"
       class="button-collapse">
      <i class="fa fa-bars fa-2x"></i>
    </a>
  </div>
</nav>
<div class="container-fluid">
  <div class="content">
    <router-outlet></router-outlet>
  </div>
</div>    `,
  directives:[ROUTER_DIRECTIVES, MaterializeDirective]

})
export class App{
constructor(public router:Router){}
}
