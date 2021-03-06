import { Component } from '@angular/core';
import "rxjs/add/operator/map";

import { NavController, ToastController, Platform } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from "@ionic-native/network";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, private toast: ToastController, private network: Network, private platform: Platform, private iab: InAppBrowser) {
    }

    // function for activating the InAppBrowser links on contribution page
    public openWithInAppBrowser(url : string){
        let target = "_blank";
        this.iab.create(url,target);
    }

    displayNetworkConnect(connectionState: string){
        let networkType = this.network.type;
        this.toast.create({
            message: `You are now ${connectionState} with ${networkType} connection`,
            duration: 5000
        }).present();
    }

    displayNetworkError(){
        this.toast.create({
            message: `You do not have a network connection, please check`,
            duration: 5000
        }).present();
    }

    ionViewDidEnter() {
        this.network.onConnect().subscribe(data => {
            console.log(data)
            this.displayNetworkConnect(data.type);
        }, error => console.error(error));

        this.network.onDisconnect().subscribe(data => {
            console.log(data)
            this.displayNetworkError();
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