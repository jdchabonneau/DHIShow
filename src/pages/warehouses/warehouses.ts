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
      { headerName: "ID", field: "ID", width: 55 },
      { headerName: "Name", field: "name", editable: true, width: 110 },
      { headerName: "Address", field: "address", editable: true, width: 110 },
      { headerName: "Address2", field: "address2", editable: true, width: 110 },
      { headerName: "City", field: "city", editable: true, width: 110 },
      { headerName: "State", field: "state", editable: true, width: 110 },
      { headerName: "Zip", field: "zip", editable: true, width: 90 },
      { headerName: "Phone", field: "phone", editable: true, width: 110 },
      { headerName: "EMail", field: "email", editable: true, width: 110 },
    ];
      }
      onNewRow(){
        let newWhse = Object.assign({}, this.rowData[0]);
        newWhse.Name = "New Whse";
        newWhse.ID = "";
        newWhse.Address = "";
        console.log(newWhse);
        newWhse.Address2 = "";
        newWhse.City = "";
        newWhse.State = "";
        newWhse.Zip = "";
        newWhse.Phone = "";
        newWhse.Email = "";
        this.rowData.unshift(newWhse);
        console.log(this.rowData);
      }
  

  ionViewDidLoad() {
    this.dhiDataPrvider.getWarehouses().subscribe(resp => {
      this.rowData = resp.json();
      console.log('ionViewDidLoad', this.rowData)
    });
  }
}
    

