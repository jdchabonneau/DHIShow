import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
/**
 * Generated class for the ShowReceivingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-receiving',
  templateUrl: 'show-receiving.html',
})
export class ShowReceivingPage {
  gridOptions: any;
  columnDefs: any[]
  rowData: any[];
  showToolPanel = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //    this.gridOptions = <GridOptions>{};
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableRangeSelection: true,
      getContextMenuItems: this.getContextMenuItems,
      allowContextMenuWithControlKey: true
    };
    this.columnDefs = [
      {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true
      },
      { headerName: "Whse", field: "whseName", width: 50 },
      { headerName: "ID", field: "ID" },// cellRendererFramework: RedComponent },
      { headerName: "Customer", field: "custName", width: 80 },
      { headerName: "Bill of Lading", field: "custRefNum", width: 80 },
      { headerName: "Ref#", field: "refNum", width: 80 },
      { headerName: "Carrier", field: "via", width: 80 },
      { headerName: "Supplier", field: "price", width: 80 },
      { headerName: "Items", field: "price", width: 80 },
      { headerName: "Plts", field: "price", width: 80 },
      { headerName: "Pkgs", field: "totalPackageCount", width: 80 },
      { headerName: "Received", field: "enteredBy", width: 80 },
      { headerName: "Rcvd By", field: "price", width: 80 },
      { headerName: "Shelved", field: "price", width: 80 },
      { headerName: "Shelved By", field: "price", width: 80 },
      { headerName: "P.O. ID", field: "price", width: 80 },
      //{ headerName: "Year", field: "year" }
    ];

    this.rowData = [
      //   { make: "Toyota", model: "Celica", price: 35000 },
      //   { make: "Chevrolet", model: "Wagon", price: 93000, year: 1957 },
      //   { make: "Ford", model: "Mondeo", price: 32000 },
      //   { make: "Porsche", model: "Boxter", price: 72000 }

      //[
      { "ID": 7038, "custName": "Impact", "custRefNum": "813497", "dueDate": "\/Date(1503248400000+0700)\/", "enteredBy": "jody", "notes": "813497", "pickedBy": "", "refNum": "81817OH", "shipTo": "", "totalPackageCount": 0, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 6547, "custName": "IWKB", "custRefNum": "", "dueDate": "\/Date(1495126800000+0700)\/", "enteredBy": "jody", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 2, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 6140, "custName": "Impact", "custRefNum": "793276", "dueDate": "\/Date(1488042000000+0700)\/", "enteredBy": "jody", "notes": "793276", "pickedBy": "", "refNum": "22417OH", "shipTo": "", "totalPackageCount": 0, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 6002, "custName": "ELE", "custRefNum": "", "dueDate": "\/Date(1485709200000+0700)\/", "enteredBy": "asher", "notes": "", "pickedBy": "", "refNum": "78302", "shipTo": "", "totalPackageCount": 3, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5994, "custName": "DAY", "custRefNum": "788455", "dueDate": "\/Date(1485450000000+0700)\/", "enteredBy": "asher", "notes": "788455", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5986, "custName": "KPub", "custRefNum": "", "dueDate": "\/Date(1485363600000+0700)\/", "enteredBy": "nina", "notes": "", "pickedBy": "", "refNum": "01262017", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5899, "custName": "jdc", "custRefNum": "eswedrfr4q", "dueDate": "\/Date(1483808400000+0700)\/", "enteredBy": "jack", "notes": "eswedrfr4q", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 2, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5895, "custName": "ELE", "custRefNum": "", "dueDate": "\/Date(1483635600000+0700)\/", "enteredBy": "asher", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5712, "custName": "BTS", "custRefNum": "", "dueDate": "\/Date(1479661200000+0700)\/", "enteredBy": "jody", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 0, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5620, "custName": "MSC", "custRefNum": "", "dueDate": "\/Date(1477846800000+0700)\/", "enteredBy": "jody", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" }
    ];
  }

  getContextMenuItems() {
    alert(99);
    return ["copy", "paste"];
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }


}
