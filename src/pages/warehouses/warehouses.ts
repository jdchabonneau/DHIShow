import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
import { ModalCSVPage } from '../../pages/modalCSV/modalCSV';
import { DhiDataProvider } from './../../providers/dhi-data/dhi-data';
import 'rxjs';

@IonicPage()
@Component({
  selector: 'page-warehouses',
  templateUrl: 'warehouses.html',
})
export class WarehousesPage {
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
      { headerName: "Name", field: "name", editable: true },
      { headerName: "City", field: "city", editable: true },
      { headerName: "State", field: "state", editable: true },
      { headerName: "Zip", field: "zip", editable: true },
      { headerName: "Phone", field: "phone", editable: true },
    ];
      }

  ionViewDidLoad() {
    this.dhiDataPrvider.getWarehouses().subscribe(resp => {
      this.rowData = resp.json();
      console.log('ionViewDidLoad', this.rowData)
    });
  }
}
    

