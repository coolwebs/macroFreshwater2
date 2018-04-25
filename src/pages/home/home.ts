import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import {NavController, ToastController, Platform} from 'ionic-angular';
import { SpecimensProvider } from  '../../providers/specimens/specimens';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from "@ionic-native/network";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(private toast: ToastController, private network: Network, private platform: Platform, private inAppBrowser: InAppBrowser) {
    }

    ionViewDidEnter() {
        this.network.onConnect().subscribe(data => {
            console.log(data);
        }, error => console.error(error));

        this.network.onDisconnect().subscribe(data => {
            console.log(data)
        }, error => console.error(error));

    }

    ionViewDidLoad() {

        this.platform.ready().then(() => {

            setTimeout(() => {
                if (this.network.type === 'none') {
                    this.toast.create({
                        message: "Your device is not connected to a network. If you want to use the geolocation service, you must connect your device to a network.",
                        duration: 5000
                    }).present();
                }
            }, 3000);

        });

    }
}