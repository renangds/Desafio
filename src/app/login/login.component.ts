import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';
import {Login} from '../Model/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user: string;
    password: string;
    loginData: Login[];
    token: string;

    constructor(private router: Router, private loginService: LoginService) {
        this.user = '';
        this.password = '';
        this.token = '';
    }

    ngOnInit() {}

    public setLogin(){
       this.loginData = [{email: this.user, password: this.password}];

        this.loginService.getToken(this.loginData[0]);
    }

    onLogin() {
        this.setLogin();
        //localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/screen1']);
    }
}