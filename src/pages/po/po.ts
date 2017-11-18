import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'po.html'
})
export class POPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string, targetPage: any, needsInput:boolean}>;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    
    this.title = navParams.get("title");
    let pageInfos = navParams.get("pageInfos");
    for (let i = 0; i < pageInfos.length; i++) {
      this.items.push({
        title: pageInfos[i].name,
        note: 'This is type #' + pageInfos[i].pageType,
        needsInput: pageInfos[i].pageType == 1,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        targetPage: pageInfos[i].page
      });
    }
  }

  itemTapped(event, item) {
    //console.log("item = " + item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item.targetPage, {
      item: item
    });
  }
}
