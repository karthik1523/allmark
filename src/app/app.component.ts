import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allmark';

  showbutton=false;

  oncheck(){
    this.showbutton=true;
  }

  showdelete=false;
  ondelete(){
    this.showdelete=true
  }

  received=false;
  onreceive(){
    this.received=true;
  }

  tabledelete=false;
  ontabledelete(){
    this.tabledelete=true;
  }

  mobiletablereceive =false;
  onmobilerecive(){
    this.mobiletablereceive=true;
  }

  productTable=false;
   onproductTable(){
    this.productTable =!this.productTable;
   }

   putaway=false;
   done=true;
   onputaway(){
    this.putaway= ! this.putaway;
    this.done=false;
   }

   containerCode=false;
   oncontainerCode(){
    this.containerCode = !this.containerCode;
   }

   clickcontainer=false;
   tbody=false;
   onclickcontainer(){
    this.clickcontainer = !this.clickcontainer;
    this.tbody=true;
    

   }

   addproduct=false;
   onaddProduct(){
    this.addproduct= ! this.addproduct;
   }

   increase=false
   onincrease(){
    this.increase =! this.increase;
   }
}
