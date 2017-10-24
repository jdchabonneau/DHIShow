import { DhiDataProvider } from './../../providers/dhi-data/dhi-data';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular'


@Component({
    templateUrl: 'pop-over.html',
    //styleUrls: ["poop-over.scss"]
//    styles:[".popover { height: auto !important;}"]
    
styles:[".warehouse-popover{height: 400px}", ".popover-content { height: 400px;}", "h2 { color: red;}"]
})export class PopoverPage {
  
    warehouses;
    public selectedWhse;
    public selectedWhseId;
    selectedWhseSave;
    selectedWhseIdSave;
    
    constructor(
//        whse:string, whseId:number,
        private navParams: NavParams, private dhiDataPrvider: DhiDataProvider,
        private viewController: ViewController) {
            this.dhiDataPrvider.getCustomers();
    this.dhiDataPrvider.getWarehouses().subscribe(
        resp=> {
            let w = resp.json();
            w.map(w=>w.selected= w.ID == 2? true : false);
            this.warehouses = w;
        })
      this.selectedWhse = this.navParams.data.currentWhse;
      this.selectedWhseId = this.navParams.data.currentWhseId;
      
      this.selectedWhseSave = this.selectedWhse;
      this.selectedWhseIdSave = this.selectedWhseId;
    }

    onChooseWhse(ID){
        for(let i=0; i < this.warehouses.length; i++){
            if (this.warehouses[i].ID == ID){
                this.selectedWhseId = ID;
                this.selectedWhse = this.warehouses[i].name;
                return;
            }
        }
    }
    
    onOK(){
        this.viewController.dismiss({"currentWhse": this.selectedWhse, "currentWhseId": this.selectedWhseId});
    }
    
    onCancel(){
        this.selectedWhse = this.selectedWhseSave;
        this.selectedWhseId = this.selectedWhseIdSave;
        this.viewController.dismiss()
    }
}