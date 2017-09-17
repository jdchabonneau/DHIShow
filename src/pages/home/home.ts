import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { DhiHeaderComponent } from '../../components/dhi-header/dhi-header' 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private mnuCtrl: MenuController) {
    mnuCtrl.open();
  }

}
