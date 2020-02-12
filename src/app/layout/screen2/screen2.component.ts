import { Component, OnInit } from '@angular/core';
import {Screen2Service} from './screen2.service';
import {User} from 'src/app/Model/user';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})

export class Screen2Component implements OnInit {

  public users: User[];
  public static users2: User[];
  public static control: boolean = false;
  public columns: string[] = ['Id', 'Nome Completo', 'Foto', 'Editar'];

  constructor(private screenService: Screen2Service) { }

  ngOnInit() {
    this.getUsers();
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public static test(){

  }

  public getUsers(){
    this.screenService.getUsers().subscribe(res => {
      this.users = res['data'];
      Screen2Component.users2 = res['data'];
    })
  }

  public deleteUser(id: number){
    this.screenService.deleteUser(id).subscribe( res => {
      this.users = this.users.filter(value => value.id !== id);
    })
  }

  public createUser(){
    
  }
}