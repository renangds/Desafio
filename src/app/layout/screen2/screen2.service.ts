import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/Model/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class Screen2Service {
  url = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    //this.httpClient.get<User>(this.url).pipe(map((res: any) => res.json()));
    return this.httpClient.get<User[]>(this.url);
  }

  public deleteUser(id: number){
    return this.httpClient.delete(this.url + '/' + id);
  }

  public createUser(data: User){
    return this.httpClient.post(this.url + '/register', data);
  }
}
