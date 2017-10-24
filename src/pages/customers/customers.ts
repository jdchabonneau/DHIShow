import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GridOptions } from "ag-grid/main";
import { ModalCSVPage } from '../../pages/modalCSV/modalCSV';
import { DhiDataProvider } from './../../providers/dhi-data/dhi-data';
import 'rxjs';

@IonicPage()
@Component({
  selector: 'page-item-types',
  templateUrl: 'customers.html',
})
export class CustomersPage {
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
       {
         headerName: "Active", field: "isActive", editable: true, cellRenderer: params => {
           return `<input type='checkbox' ${params.value > 0 ? 'checked' : ''} />`;
         }
       },
      { headerName: "Short Name", field: "shortName", editable: true },
      { headerName: "Cust Name", field: "name", editable: true },
    ];
      }

  ionViewDidLoad() {
    this.dhiDataPrvider.getCustomers().subscribe(resp => {
      this.rowData = resp.json();
      console.log('ionViewDidLoad', this.rowData)
    });
  }
}
    

