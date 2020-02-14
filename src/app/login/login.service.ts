import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../Model/login';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = 'https://reqres.in/api/login';

  constructor(private httpClient: HttpClient) { }

  public getLogin(object: Login): Observable<Login>{
    return this.httpClient.post<Login>(this.url, object);
  }
}
