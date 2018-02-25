import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import {NavController, ToastController} from 'ionic-angular';
import { SpecimensProvider } from  '../../providers/specimens/specimens';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from "@ionic-native/network";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor ( private toast: ToastController, private network: Network, private inAppBrowser: InAppBrowser ) {}

  ionViewDidEnter() {
    this.network.onConnect().subscribe(data => {
      console.log(data)
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {
      console.log(data)
    }, error => console.error(error));

  }

}