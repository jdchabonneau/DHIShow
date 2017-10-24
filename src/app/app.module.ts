import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DhiHeaderComponent } from '../components/dhi-header/dhi-header';
import { PopoverPage } from './../components/dhi-header/pop-over';
import { HomePage } from '../pages/home/home';
import { POPage } from '../pages/po/po';
import { DummyPage } from '../pages/dummy/dummy';
import { ItemTypesPage } from '../pages/item-types/item-types';
import { CustomersPage } from '../pages/customers/customers';
import { ShipViaPage } from '../pages/ship-via/ship-via';
import { LabelPrintersPage } from '../pages/label-printers/label-printers'
import { WarehousesPage } from '../pages/warehouses/warehouses';
import { ShowReceivingPage } from '../pages/show-receiving/show-receiving';
import { AgGridModule } from 'ag-grid-angular/main';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DhiDataProvider } from '../providers/dhi-data/dhi-data';
import { UsersProvider } from '../providers/users/users';
import { ModalController } from 'ionic-angular';
import { ModalCSVPage } from '../pages/modalCSV/modalCSV';
import { ReceivingOrderPage } from './../pages/receiving-order/receiving-order';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    POPage,
    DummyPage,
    ItemTypesPage,
    CustomersPage,
    ShipViaPage,
    LabelPrintersPage,
    WarehousesPage,
    DhiHeaderComponent,
    ShowReceivingPage,
    ReceivingOrderPage,
    ModalCSVPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgGridModule.withComponents([]),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    POPage,
    DummyPage,
    CustomersPage,
    ShipViaPage,
    LabelPrintersPage,
    WarehousesPage,
    DhiHeaderComponent,
    ShowReceivingPage,
    ReceivingOrderPage,
    ModalCSVPage,
    PopoverPage,
    ],
  providers: [
    StatusBar,
    FormBuilder,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DhiDataProvider,
    UsersProvider
  ]
})
export class AppModule {}
