import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DhiHeaderComponent } from '../components/dhi-header/dhi-header';
import { HomePage } from '../pages/home/home';
import { POPage } from '../pages/po/po';
import { DummyPage } from '../pages/dummy/dummy';
import { ItemTypesPage } from '../pages/item-types/item-types';
import { ShowReceivingPage } from '../pages/show-receiving/show-receiving';
import {AgGridModule} from 'ag-grid-angular/main';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DhiDataProvider } from '../providers/dhi-data/dhi-data';
import { UsersProvider } from '../providers/users/users';
import { ModalController } from 'ionic-angular';
import { ModalCSVPage } from '../pages/modalCSV/modalCSV';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    POPage,
    DummyPage,
    ItemTypesPage,
    DhiHeaderComponent,
    ShowReceivingPage,
    ModalCSVPage,
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
    ItemTypesPage,
    DhiHeaderComponent,
    ShowReceivingPage,
    ModalCSVPage,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DhiDataProvider,
    UsersProvider
  ]
})
export class AppModule {}
