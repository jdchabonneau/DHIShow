import { Component } from '@angular/core';
import { DhiDataProvider } from "../../providers/dhi-data/dhi-data"

@Component({
  selector: 'dhi-header',
  templateUrl: 'dhi-header.html'
})
export class DhiHeaderComponent {

  text: string;
  warehouses: any[] = [];

  constructor(private dhiDataProvider: DhiDataProvider) {
    this.text = 'Delivery Hawaii, Inc.';
    this.warehouses = dhiDataProvider.getWarehouses();
  }

}
