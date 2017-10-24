import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivingOrderPage } from './receiving-order';

@NgModule({
  declarations: [
    ReceivingOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivingOrderPage),
  ],
})
export class ReceivingOrderPageModule {}
