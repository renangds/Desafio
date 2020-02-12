import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class Screen1Service {
  url = 'https://reqres.in/api/register';

  constructor(private httpClient: HttpClient) { }

  public createUser(data: User){
    return this.httpClient.post(this.url, data);
  } 
}
