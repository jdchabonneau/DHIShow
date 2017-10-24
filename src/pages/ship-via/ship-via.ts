import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
import { DhiDataProvider } from './../../providers/dhi-data/dhi-data';

@IonicPage()
@Component({
  selector: 'page-ship-via',
  templateUrl: 'ship-via.html',
})

export class ShipViaPage {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];
    sbInput;
    showToolPanel = true;
    hideDeleteBtn = true;
  
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
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
        { headerName: "Ship Via", field: "name", editable: true },
        { headerName: "Short Name", field: "shortName", editable: true },
        { headerName: "City", field: "city", editable: true },
        {
          headerName: "Active", field: "isActive", editable: true, cellRenderer: params => {
            return `<input type='checkbox' ${params.value > 0 ? 'checked' : ''} />`;
          }
        },
        {
          headerName: "Partner", field: "isPartner", editable: true, cellRenderer: params => {
            return `<input type='checkbox' ${params.value > 0 ? 'checked' : ''} />`;
          }
        },
        {
          headerName: "Show In Ratetable", field: "showInRateTable", editable: true, cellRenderer: params => {
            return `<input type='checkbox' ${params.value > 0 ? 'checked' : ''} />`;
          }
        },
   ];
        }
  
    ionViewDidLoad() {
      this.dhiDataPrvider.getShipVias().subscribe(resp => {
        this.rowData = resp.json();
        console.log('ionViewDidLoad', this.rowData)
      });
    }
  }