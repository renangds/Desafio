import { Component, OnInit } from '@angular/core';
import {Screen1Service} from './screen1.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})

export class Screen1Component implements OnInit {
  name: string;
  job: string;

  constructor(private screenService: Screen1Service) {
    this.name = '';
    this.job = '';
   }

  ngOnInit() {
  }

  public registerUser(){
    
  }
}