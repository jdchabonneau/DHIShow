import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DhiHeaderComponent } from '../components/dhi-header/dhi-header';
import { HomePage } from '../pages/home/home';
import { POPage } from '../pages/po/po';
import { DummyPage } from '../pages/dummy/dummy';
import { IPageInfo } from '../interfaces/iPageInfo';
import { ShowReceivingPage } from '../pages/show-receiving/show-receiving';
import { ItemTypesPage } from '../pages/item-types/item-types';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, pageInfos: IPageInfo[] }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Whse Map', pageInfos: [{page: DummyPage, name: "wm1", pageType: 0 }, {page: DummyPage, name: "wm2", pageType: 0 }, {page: DummyPage, name: "wm3", pageType: 0 }] },
      { title: 'Purchase Orders', pageInfos: [{page: DummyPage, name: "Create New Purchase Order", pageType: 0 }, {page: DummyPage, name: "Edit Existing Purchase Order", pageType: 1 }, {page: DummyPage, name: "Show All PO's", pageType: 0 }] },
      { title: 'Receiving', pageInfos: [{page: DummyPage, name: "Create New Receiving Order", pageType: 0 }, {page: DummyPage, name: "Edit Existing Receiving Order", pageType: 1 }, {page: ShowReceivingPage, name: "Show All Receiving Orders", pageType: 0 }, {page: DummyPage, name: "Assign Locations", pageType: 0 }, {page: DummyPage, name: "Shelve an Order", pageType: 1 }] },
      {
        title: 'Inventory', pageInfos: [{page: DummyPage, name: "Item Info", pageType: 0 }, {page: DummyPage, name: "Find These Items", pageType: 1 }, {page: DummyPage, name: "Snapshot", pageType: 0 },
        {page: DummyPage, name: "Customer Inventory", pageType: 0 }, {page: DummyPage, name: "In-Stock Inventory", pageType: 0 }, {page: DummyPage, name: "Physical Counts", pageType: 0 }, {page: DummyPage, name: "Storage History", pageType: 0 },
        {page: DummyPage, name: "Warehouse Activity", pageType: 0 }, {page: DummyPage, name: "Import Items", pageType: 0 }, {page: DummyPage, name: "Modify Items", pageType: 0 }, {page: ItemTypesPage, name: "Item Types", pageType: 0 },]
      },
      { title: 'Fill Orders', pageInfos: [{page: DummyPage, name: "Create New Fill Order", pageType: 0 }, {page: DummyPage, name: "Edit Existing Fill Order", pageType: 1 }, {page: DummyPage, name: "Show All Fill Orders", pageType: 0 }, {page: DummyPage, name: "Delivery Orders", pageType: 0 }, {page: DummyPage, name: "Open Will Calls", pageType: 1 }] },
      {
        title: 'Administration', pageInfos: [{page: DummyPage, name: "Admin Approvals", pageType: 0 }, {page: DummyPage, name: "Creaye Billing", pageType: 0 }, {page: DummyPage, name: "Customers", pageType: 0 },
        {page: DummyPage, name: "Items", pageType: 0 }, {page: DummyPage, name: "Label Printers", pageType: 0 }, {page: DummyPage, name: "Pallets", pageType: 0 }, {page: DummyPage, name: "Rate Tables", pageType: 0 },
        {page: DummyPage, name: "Settings", pageType: 0 }, {page: DummyPage, name: "Ship To's", pageType: 0 }, {page: DummyPage, name: "Special Charges", pageType: 0 }, {page: DummyPage, name: "Ship Via's", pageType: 0 },
        {page: DummyPage, name: "Users", pageType: 0 }, {page: DummyPage, name: "View Billing", pageType: 0 }, {page: DummyPage, name: "Warehouses", pageType: 0 }, ]
      },
      { title: 'Diagnostics', pageInfos: [{page: DummyPage, name: "Check This", pageType: 0 }, {page: DummyPage, name: "Check That", pageType: 0 }, {page: DummyPage, name: "Check the Other", pageType: 0 }] },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //    this.nav.setRoot(page.component);
    this.nav.setRoot(POPage,
      {
        title: page.title,
        pageInfos: page.pageInfos
      }
    );
  }
}
