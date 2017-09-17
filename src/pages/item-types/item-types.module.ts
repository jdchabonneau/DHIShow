import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemTypesPage } from './item-types';

@NgModule({
  declarations: [
    ItemTypesPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemTypesPage),
  ],
})
export class ItemTypesPageModule {}
