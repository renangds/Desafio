import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Screen2Service} from '../screen2/screen2.service';
import {User} from '../../Model/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  id: string;
  name: string;
  job: string;

  constructor(private route: ActivatedRoute, private screenService: Screen2Service) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    const user = this.screenService.getUser(Number.parseInt(this.id));

    this.name = user.first_name;
    this.job = user.job;
  }

  editJobUser(){
    this.screenService.putUser(this.job, Number.parseInt(this.id));
  }

}
