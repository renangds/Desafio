import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Screen2Service} from '../screen2/screen2.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  editJobUser(){

  }

}
