import { Component } from '@angular/core';
import { DhiDataProvider } from "../../providers/dhi-data/dhi-data"
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from './pop-over'

@Component({
  selector: 'dhi-header',
  templateUrl: 'dhi-header.html'

})
export class DhiHeaderComponent {

  text: string;
  warehouses: any[] = [];
  currentWhse = "Maui";
  currentWhseId = 0;
  currentUser = "John";

  constructor(private dhiDataProvider: DhiDataProvider, private popoverController: PopoverController) {
    this.text = 'Delivery Hawaii, Inc.';
    //this.currentWhse = "Maui";

    this.warehouses = dhiDataProvider.getWarehouses();
  }

  changeUser() {
  }
  
  changeWhse() {
    let popover:any  = this.popoverController.create(PopoverPage, {currentWhse: this.currentWhse, currentWhseId: this.currentWhseId}, { cssClass: 'warehouse-popover' });
    popover.selected
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: '100',
            left: '10'
          };
        }
      }
    };
    popover.onDidDismiss((data)=>{
      console.log(data)
      if(data){this.currentWhse = data.currentWhse; this.currentWhseId = data.currentWhseId;}})
    popover.present({ ev });
  }

}
