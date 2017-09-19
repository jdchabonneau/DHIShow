import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
    selector: 'modal-CSV',
    templateUrl: 'modalCSV.html',
})
export class ModalCSVPage {
    api;
    p = {};
    constructor(private params: NavParams, private viewCtrl: ViewController) {
        this.api = params.get("api");
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    createFile() {
        console.log(this);
        this.api.exportDataAsCsv(this.p);
        this.viewCtrl.dismiss();
    }
}
