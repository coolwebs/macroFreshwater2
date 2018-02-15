import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-contributors',
  templateUrl: 'contributors.html'
})
export class ContributorsPage {

  constructor ( private iab: InAppBrowser, public navCtrl: NavController ) {

  }

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.iab.create(url,target);
  }
  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.iab.create(url,target);
  }
  public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.iab.create(url,target);
  }

}
