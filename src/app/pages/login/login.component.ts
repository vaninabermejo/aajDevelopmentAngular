import {Component, ElementRef} from '@angular/core';
import {AuthService} from '../../services/authService';
import {User} from '../../services/model/user';
@Component({
    selector: 'login',
    providers: [AuthService],
    templateUrl:'login.html'
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private authService:AuthService) {}

    login() {
        if(!this.authService.login(event,this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}
