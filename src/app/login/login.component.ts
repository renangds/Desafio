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
        console.log(this.user, this.password);

        this.loginService.getLogin(this.loginData[0]).subscribe(
            res => {
                console.log(res);
                this.token = res['token'];
                sessionStorage.setItem('gottenToken', res['token']);
            }
        )
    }

    onLogin() {
        this.setLogin();
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/screen1']);
    }
}