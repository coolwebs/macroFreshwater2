import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';

declare var google;

@Component({
  selector: 'page-locator',
  templateUrl: 'locator.html'
})
export class LocatorPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation, private toast: ToastController, private network: Network, private platform: Platform) { }

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

    // Load the google map
    this.loadMap();

  }

  ionViewDidEnter() {
      this.network.onConnect().subscribe(data => {
          console.log(data);
          this.displayNetworkConnect(data.type);
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }, error => console.error(error));

      this.network.onDisconnect().subscribe(data => {
          console.log(data)
          this.displayNetworkError();
      }, error => console.error(error));
  }

  // Function to add marker at current location
  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>Your current location</p>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  // Function for loading the google map and getting geolocation coords
  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      // Define a variable to hold the lattitude and longitude coords
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      // Build the map and setup the maps api options
      let mapOptions = {
        center: latLng,
        zoom: 15,
        timeout: 5000,
        maximumAge: 3000,
        enableHighAccuracy: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(this.map);

      let myGeoCoords;
      myGeoCoords = document.getElementById('geoCoords');

      myGeoCoords.innerHTML = '<h3>Detailed Gelocation information</h3><table class="geoTable"><tr><th class="noborder" border="0" style="background-color: #f9f9f9;"></th><th>Latitude</th><th>Longitude</th><th>Accuracy</th><th>Timestamp</th></tr>' +
          '<tr><td class="head"><strong>Data Value</strong></td>' +
          '<td class="centre">' + position.coords.latitude  + '</td>' +
          '<td class="centre">' + position.coords.longitude + '</td>' +
          '<td class="centre">'  + position.coords.accuracy + '</td>' +
          '<td class="centre">' + new Date(position.timestamp) + '</td>'+
          '</tr>' +
          '</table>';

      document.getElementById("reloadMap").style.display="block";

    }, (err) => {
      console.log(err);
      alert(err + 'Please check your device network connectivity, it is necessary to find your location. Dismissing this notice will attempt to retrieve your geolocation again.');
    });

  }

}

