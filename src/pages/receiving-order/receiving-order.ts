import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  logForm(form){
    console.log(form.value);
  }

  ionViewDidLoad() {
  }

}
