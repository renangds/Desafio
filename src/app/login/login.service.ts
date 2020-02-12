import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../Model/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url = 'https://reqres.in/api/login';

  constructor(private httpClient: HttpClient) { }

  public getLogin(object: any){
    console.log(object);
    return this.httpClient.post<Login>(this.url, object);
  }
}
