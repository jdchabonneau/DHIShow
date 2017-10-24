import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
import { ModalCSVPage } from '../../pages/modalCSV/modalCSV';
import { DhiDataProvider } from './../../providers/dhi-data/dhi-data';
import 'rxjs';

@IonicPage()
@Component({
  selector: 'page-label-printers',
  templateUrl: 'label-printers.html',
})
export class LabelPrintersPage {
  gridOptions: GridOptions;
  columnDefs: any[]
  rowData: any[];
  sbInput;
  showToolPanel = true;
  hideDeleteBtn = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private dhiDataPrvider: DhiDataProvider) {
    this.gridOptions = <GridOptions>{
      "onSelectionChanged": (event: any) => {
        var selectedRows = event.api.getSelectedRows();
        this.hideDeleteBtn = selectedRows.length === 0;
      }
    }
    this.columnDefs = [
      {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true
      },
      { headerName: "ID", field: "ID" },
      { headerName: "WhseID", field: "whseID" },
      { headerName: "Warehouse", field: "name", editable: true },
      { headerName: "Printer #", field: "num", editable: true },
      { headerName: "Printer Name", field: "name", editable: true },
      { headerName: "Printer Description", field: "desc", editable: true },
      { headerName: "IPAddress", field: "ipAddress", editable: true },
      { headerName: "XOffset", field: "xOffset", editable: true },
      { headerName: "YOffset", field: "yOffset", editable: true },
      { headerName: "Printer Type", field: "type", editable: true },
      {
        headerName: "Default", field: "isDefault", editable: true, cellRenderer: params => {
          return `<input type='checkbox' ${params.value > 0 ? 'checked' : ''} />`;
        }
      },
    ];
  }

  ionViewDidLoad() {
    this.dhiDataPrvider.getLabelPrinters().subscribe(resp => {
      this.rowData = resp.json();
      console.log('ionViewDidLoad', this.rowData)
    });
  }
}
