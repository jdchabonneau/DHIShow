import { ReceivingOrderPage } from './../receiving-order/receiving-order';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
import { DhiDataProvider } from "../../providers/dhi-data/dhi-data"
import { ModalCSVPage } from '../../pages/modalCSV/modalCSV';
import { DateComponent } from '../../components/date/date.component';


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
  noneSelected: boolean = true;
  selectedRows;
  includeAllWhses: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private dhiData: DhiDataProvider,
    private modalCtrl: ModalController 
  ) {
    //    this.gridOptions = <GridOptions>{};
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableRangeSelection: true,
      getContextMenuItems: this.getContextMenuItems,
      allowContextMenuWithControlKey: true,
      "onSelectionChanged": (event: any) => {
        this.selectedRows = event.api.getSelectedRows();
        this.noneSelected = this.selectedRows.length === 0;
      }

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
      { headerName: "Whse", field: "warehouse", width: 50 },
      { headerName: "ID", field: "ID" },// cellRendererFramework: RedComponent },
      { headerName: "Customer", field: "custName", width: 80 },
      { headerName: "Bill of Lading", field: "BillOfLading", width: 80 },
      { headerName: "Ref#", field: "refNum", width: 80 },
      { headerName: "Carrier", field: "truckLine", width: 80 },
      { headerName: "Supplier", field: "supplier", width: 80 },
      { headerName: "Items", field: "numItems", width: 80 },
      { headerName: "Plts", field: "palletTotal", width: 80 },
      { headerName: "Pkgs", field: "packageTotal", width: 80 },
//      { headerName: "Received", field: "rcvdDate", width: 80, cellFilter: 'date:\'yyyy-MM-dd\'' },
      { headerName: "Received", field: "rcvdDate", width: 80, cellRendererFramework: DateComponent },
      { headerName: "Rcvd By", field: "rcvdBy", width: 80 },
      { headerName: "Shelved", field: "shelvedDate", width: 80, cellRendererFramework: DateComponent },
      { headerName: "Shelved By", field: "shelvedBy", width: 80 },
      { headerName: "P.O. ID", field: "PoID", width: 80 },
      //{ headerName: "Year", field: "year" }
    ];

    this.rowData = [
      //   { make: "Toyota", model: "Celica", price: 35000 },
      //   { make: "Chevrolet", model: "Wagon", price: 93000, year: 1957 },
      //   { make: "Ford", model: "Mondeo", price: 32000 },
      //   { make: "Porsche", model: "Boxter", price: 72000 }

      //[
      { "ID": 7038, "custName": "Impact", "custRefNum": "813497", "rcvdDate": "1503248400000", "enteredBy": "jody", "notes": "813497", "pickedBy": "", "refNum": "81817OH", "shipTo": "", "totalPackageCount": 0, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 6547, "custName": "IWKB", "custRefNum": "", "rcvdDate": "(1495126800000+0700)", "enteredBy": "jody", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 2, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 6140, "custName": "Impact", "custRefNum": "793276", "rcvdDate": "2009-02-15T00:00:00Z", "enteredBy": "jody", "notes": "793276", "pickedBy": "", "refNum": "22417OH", "shipTo": "", "totalPackageCount": 0, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 6002, "custName": "ELE", "custRefNum": "", "dueDate": "\/Date(1485709200000+0700)\/", "enteredBy": "asher", "notes": "", "pickedBy": "", "refNum": "78302", "shipTo": "", "totalPackageCount": 3, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5994, "custName": "DAY", "custRefNum": "788455", "dueDate": "\/Date(1485450000000+0700)\/", "enteredBy": "asher", "notes": "788455", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5986, "custName": "KPub", "custRefNum": "", "dueDate": "\/Date(1485363600000+0700)\/", "enteredBy": "nina", "notes": "", "pickedBy": "", "refNum": "01262017", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5899, "custName": "jdc", "custRefNum": "eswedrfr4q", "dueDate": "\/Date(1483808400000+0700)\/", "enteredBy": "jack", "notes": "eswedrfr4q", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 2, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5895, "custName": "ELE", "custRefNum": "", "dueDate": "\/Date(1483635600000+0700)\/", "enteredBy": "asher", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5712, "custName": "BTS", "custRefNum": "", "dueDate": "\/Date(1479661200000+0700)\/", "enteredBy": "jody", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 0, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" },
      { "ID": 5620, "custName": "MSC", "custRefNum": "", "dueDate": "\/Date(1477846800000+0700)\/", "enteredBy": "jody", "notes": "", "pickedBy": "", "refNum": "", "shipTo": "", "totalPackageCount": 1, "verifiedBy": "", "via": "", "whseID": 2, "whseName": "Oahu" }
    ];
  }

  onCSVExport() {
    //    this.gridOptions.api.exportDataAsCsv();
    let modal = this.modalCtrl.create(ModalCSVPage, {"api": this.gridOptions.api});
    modal.present();
  }
  onBtnRefresh(){
    this.dhiData.getReceivingOrders(this.includeAllWhses ? -1 : 0, -1).subscribe(resp=>this.rowData = resp.json());
  }

  onEdit() {
    if (this.selectedRows && this.selectedRows.length > 0) {
      let id = this.selectedRows[0]["ID"];
      this.navCtrl.push(ReceivingOrderPage, { ID: id });
    }
  }

  onReceive() {
    //    console.log("onReceive()");
    //    this.navCtrl.push(ReceivingOrderPage,{ID:7038});
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
