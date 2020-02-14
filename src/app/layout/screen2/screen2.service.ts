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
  page = '?page='
  users: User[];

  constructor(private httpClient: HttpClient) {
    this.users = this.getListUsers();
  }

  public returnUsers(){
    return this.users;
  }

  public getListUsers(){
    this.getUsers(1).subscribe(res => {
      this.users = res['data'];
    })

    this.getUsers(2).subscribe(res => {
      res['data'].forEach(p => {
        this.users.push(p);
      });
    })

    return this.users;
  }

  public deleteListUsers(id: number){
    this.deleteUser(id).subscribe( res => {
      this.users = this.users.filter(value => value.id !== id);
    })
    console.log(this.users.length);

    return this.users;
  }

  public getUsers(page: number): Observable<User[]>{
    //this.httpClient.get<User>(this.url).pipe(map((res: any) => res.json()));
    return this.httpClient.get<User[]>(this.url + this.page + page);
  }

  public deleteUser(id: number){
    return this.httpClient.delete(this.url + '/' + id);
  }

  public createUser(data: object){
    return this.httpClient.post(this.url + '/register', data);
  }
}
