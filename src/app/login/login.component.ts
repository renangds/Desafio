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
    loginData: Login;

    constructor(private router: Router, private loginService: LoginService) {
        this.user = '';
        this.password = '';
    }

    ngOnInit() {}

    public setLogin(){
        //console.log(this.user, this.password);
       // console.log(JSON.stringify({email: this.user, password: this.password}));

        
        this.loginService.getLogin(JSON.stringify({email: 'cityslicka', password: 'eve.holt@reqres.in'})).subscribe(
            res => {
                console.log(res);
            }
        )
        
        //console.log(this.loginService.getLogin(JSON.stringify({"email": this.user, "password": this.password})));
    }

    onLogin() {
        this.setLogin();
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}