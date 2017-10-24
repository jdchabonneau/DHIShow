import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabelPrintersPage } from './label-printers';

@NgModule({
  declarations: [
    LabelPrintersPage,
  ],
  imports: [
    IonicPageModule.forChild(LabelPrintersPage),
  ],
})
export class LabelPrintersPageModule {}
