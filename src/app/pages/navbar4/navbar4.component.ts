import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.scss']
})
export class Navbar4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   canvasWidth=false;
  onclick(){
    this.canvasWidth=!this.canvasWidth;

  }
}
