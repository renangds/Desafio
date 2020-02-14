import { Component, OnInit } from '@angular/core';
import {Screen2Service} from './screen2.service';
import {User} from 'src/app/Model/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalDeleteComponent} from '../modal-delete/modal-delete.component';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})

export class Screen2Component implements OnInit {

  public users: User[];
  public columns: string[] = ['Id', 'Nome Completo', 'Foto', 'Opções'];

  constructor(private screenService: Screen2Service, public dialog: MatDialog) {
    this.users = this.screenService.returnUsers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '250px',
      data: this.users
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ngOnInit() {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users = this.users.filter((element, index, array) =>
      element.id == Number.parseInt(filterValue)
    );
  }

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
   //this.openDialog(id);
   this.screenService.setDeleteId(id);
   this.openDialog();
   //this.users = this.screenService.deleteListUsers(id);
  }
}