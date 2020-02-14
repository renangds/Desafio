import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../../Model/user'
import {Screen2Service} from '../screen2/screen2.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User[], public screenService: Screen2Service) 
    {
        }

  ngOnInit() {
  }

  public delete(){
    this.data = this.screenService.deleteListUsers(this.screenService.getDeleteId());
    this.dialogRef.close();
  }

}
