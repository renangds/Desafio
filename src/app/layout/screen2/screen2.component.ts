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
  public columns: string[] = ['Id', 'Nome Completo', 'Foto', 'Editar'];

  constructor(private screenService: Screen2Service) {
    this.users = this.screenService.returnUsers();
  }

  ngOnInit() {
    
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public getUsers(){
    /*
    this.screenService.getUsers().subscribe(res => {
      this.users = res['data'];
    })
    */

    return this.screenService.returnUsers();
  }

  public deleteUser(id: number){
    /*
    this.screenService.deleteUser(id).subscribe( res => {
      this.users = this.users.filter(value => value.id !== id);
    })
    */
   this.users = this.screenService.deleteListUsers(id);
  }
}