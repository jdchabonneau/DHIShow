import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GridOptions } from "ag-grid/main";

@IonicPage()
@Component({
  selector: 'page-receiving-order',
  templateUrl: 'receiving-order.html',
})
export class ReceivingOrderPage {
  todo = {
    title: '',
    description: ''
  };
  gridOptions: any;
  columnDefs: any[]
  rowData: any[];
  showToolPanel = true;
  jjj="";


constructor(){
  this.gridOptions = {
    columnDefs: this.columnDefs,
    enableRangeSelection: true,
//    getContextMenuItems: this.getContextMenuItems,
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
    { headerName: "ID", field: "ID", width: 4 },
    { headerName: "Itemnum", field: "itemNum", width: 130 },
    { headerName: "Description A", field: "descriptionA", width: 140 },
    { headerName: "Description B", field: "descriptionB", width: 140 },
    { headerName: "Quantity", field: "quantity", width: 140},
  ],
  this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Chevrolet", model: "Wagon", price: 93000, year: 1957 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 }

    //[
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
      { "ID": 7038, "itemNum": "Impact", "descriptionA": "813497", "descriptionB": "Nice Iteem", "quantity": "1080" },
      { "ID": 7039, "itemNum": "Xl-500s", "descriptionA": "Bikini Bottoms", "descriptionB": "Barely Legal", "quantity": "100" },
  ]
}

onDateKeyPress(event){
  if(event.key != '/' && (event.key < '0' || event.key > '9')) {event.cancel = true;}
  //console.log(event, event.keyCode)
  this.todo["ID"] = (this.bar(this.todo["ID"]))
}

bar(str) {
  let txtBox = {value: str};
  if (txtBox == null) {
    return ''
  }

  var re = new RegExp(/(\d{6})(\d{2})?/);

  // if (re.test(txtBox.value)) {
   if (str) {
    if (txtBox.value.length == 8) {
      txtBox.value = txtBox.value.substring(0, 2) + '/' + txtBox.value.substring(2, 4) + '/' + txtBox.value.substring(4, 8)
    }
    if (txtBox.value.length == 7) {
      txtBox.value = txtBox.value.substring(0, 2) + '/' + txtBox.value.substring(2, 3) + '/' + txtBox.value.substring(3, 8)
    }

    // if (txtBox.value.length == 6) {
    //   if (txtBox.value.substring(4, 6) < 20) {
    //     txtBox.value = txtBox.value.substring(0, 2) + '/' + txtBox.value.substring(2, 4) + '/20' + txtBox.value.substring(4, 6);
    //   } else {
    //     txtBox.value = txtBox.value.substring(0, 2) + '/' + txtBox.value.substring(2, 4) + '/19' + txtBox.value.substring(4, 6);
    //   }
    // }
  }
  return txtBox.value;
}
  logForm(form){
    console.log(form.value);
  }

  ionViewDidLoad() {
  }

}
