import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navabar3',
  templateUrl: './navabar3.component.html',
  styleUrls: ['./navabar3.component.scss']
})
export class Navabar3Component implements OnInit {
  @ViewChild('drawer') drawer: any;

  constructor() { 
  }

  ngOnInit(): void {
    const windowSize = window.innerWidth;
    if(windowSize>=992){
      this.mobileView=true;
    }
    else{
      this.mobileView=!this.mobileView
    }
  }
  mobileView!:boolean;
  isShowLayout = true;
 
  onmobile(){
    this.mobileView=!this.mobileView
  }


}
