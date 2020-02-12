import { Component, OnInit } from '@angular/core';
import {Screen1Service} from './screen1.service';
import {User} from 'src/app/Model/user';
import {Screen2Service} from '../screen2/screen2.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})

export class Screen1Component implements OnInit {
  name: string;
  job: string;
  user: User = {id: 0, email: '', first_name: '', last_name: '', avatar: '', job: '', createdAt: ''};

  constructor(private screenService: Screen1Service, private screen2Service: Screen2Service) {
    this.name = '';
    this.job = '';
   }

  ngOnInit() {
  }

  public registerUser(){
    this.user.first_name = this.name;
    this.user.job = this.job;

    this.screenService.createUser(this.user).subscribe( res => {
      this.user.id = res['id'];
      this.user.createdAt = res['createdAt'];
      this.screen2Service.users.push(this.user);
    })
  }
}