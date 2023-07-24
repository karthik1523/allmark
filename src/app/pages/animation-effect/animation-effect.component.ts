import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-effect',
  templateUrl: './animation-effect.component.html',
  styleUrls: ['./animation-effect.component.scss']
})
export class AnimationEffectComponent implements OnInit {
  selected:any=[]
  constructor() { }

  ngOnInit(): void {
  }
   dataTable:Array<{amount:number,image:string,name:string}>=[{amount:100,image:'../../../assets/images/download.png',name:'p-tea'},
   {amount:200,image:'../../../assets/images/download.png',name:'Samosa'},
   {amount:300,image:'../../../assets/images/download.png',name:'Idly'},
   {amount:400,image:'../../../assets/images/download.png',name:'Masala Dosa'},
  ]


  onclick(tab:any){
      this.selected.push(tab);
      console.log(this.selected)

    
  }
}
