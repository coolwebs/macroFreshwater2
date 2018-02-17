import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MacroDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-macro-detail',
  templateUrl: 'macro-detail.html',
})
export class MacroDetailPage {

  public macroDetails = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.macroDetails = this.navParams.get("macroDetails");
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MacroDetailPage');
  }

}
