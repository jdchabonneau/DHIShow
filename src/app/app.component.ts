import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { POPage } from '../pages/po/po';
import { IPageInfo } from '../interfaces/iPageInfo';

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
      { title: 'Whse Map', pageInfos: [{ name: "wm1", pageType: 0 }, { name: "wm2", pageType: 0 }, { name: "wm3", pageType: 0 }] },
      { title: 'Purchase Orders', pageInfos: [{ name: "Create New Purchase Order", pageType: 0 }, { name: "Edit Existing Purchase Order", pageType: 1 }, { name: "Show All PO's", pageType: 0 }] },
      { title: 'Receiving', pageInfos: [{ name: "Create New Receiving Order", pageType: 0 }, { name: "Edit Existing Receiving Order", pageType: 1 }, { name: "Show All Receiving Orders", pageType: 0 }, { name: "Assign Locations", pageType: 0 }, { name: "Shelve an Order", pageType: 1 }] },
      {
        title: 'Inventory', pageInfos: [{ name: "Item Info", pageType: 0 }, { name: "Find These Items", pageType: 1 }, { name: "Snapshot", pageType: 0 },
        { name: "Customer Inventory", pageType: 0 }, { name: "In-Stock Inventory", pageType: 0 }, { name: "Physical Counts", pageType: 0 }, { name: "Storage History", pageType: 0 },
        { name: "Warehouse Activity", pageType: 0 }, { name: "Import Items", pageType: 0 }, { name: "Modify Items", pageType: 0 }, { name: "Item Types", pageType: 0 },]
      },
      { title: 'Fill Orders', pageInfos: [{ name: "Create New Fill Order", pageType: 0 }, { name: "Edit Existing Fill Order", pageType: 1 }, { name: "Show All Fill Orders", pageType: 0 }, { name: "Delivery Orders", pageType: 0 }, { name: "Open Will Calls", pageType: 1 }] },
      {
        title: 'Administration', pageInfos: [{ name: "Admin Approvals", pageType: 0 }, { name: "Creaye Billing", pageType: 0 }, { name: "Customers", pageType: 0 },
        { name: "Items", pageType: 0 }, { name: "Label Printers", pageType: 0 }, { name: "Pallets", pageType: 0 }, { name: "Rate Tables", pageType: 0 },
        { name: "Settings", pageType: 0 }, { name: "Ship To's", pageType: 0 }, { name: "Special Charges", pageType: 0 }, { name: "Ship Via's", pageType: 0 },
        { name: "Users", pageType: 0 }, { name: "View Billing", pageType: 0 }, { name: "Warehouses", pageType: 0 }, ]
      },
      { title: 'Diagnostics', pageInfos: [{ name: "Check This", pageType: 0 }, { name: "Check That", pageType: 0 }, { name: "Check the Other", pageType: 0 }] },
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
