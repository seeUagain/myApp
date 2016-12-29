import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Http }      from '@angular/http';

import { LoginService } from './login.service';
import { User }      from '../models/user';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})

export class LoginComponent {

    constructor(private http: Http, private loginService: LoginService) {}

    private user: User;

    onSubmit(f: NgForm): void {
        console.log(f);
        console.log(f.value);
        this.loginService.login(f.value).then(user => {this.user = user; console.log(this.user)});          
        // this.http.post('./login', )
    }

}