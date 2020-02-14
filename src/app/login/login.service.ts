import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../Model/login';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = 'https://reqres.in/api/login';

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getToken(object: Login){
    this.getLogin(object).subscribe(
      res => {
          //console.log(res);
          //this.token = res['token'];
          sessionStorage.setItem('token', res['token']);
      }
    )
  }

  public getLogin(object: Login): Observable<Login>{
    return this.httpClient.post<Login>(this.url, object);
  }

  public startLogin(){
    
  }
}
