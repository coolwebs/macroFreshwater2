import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import Shuffle from 'shufflejs';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-locator',
  templateUrl: 'locator.html'
})
export class LocatorPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad() {

    // Load the google map
    this.loadMap();

  }

  // Function to add marker at current location
  addMarker(map:any){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

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

      myGeoCoords.innerHTML = '<h2>Detailed Gelocation information</h2><table class="geoTable"><tr><td class="noborder" border="0" style="background-color: #f9f9f9;"></td><th>Latitude</th><th>Longitude</th><th>Accuracy</th><th>Timestamp</th></tr>' +
          '<tr><td class="head">Data Value</td>' +
          '<td class="centre">' + position.coords.latitude  + '</td>' +
          '<td class="centre">' + position.coords.longitude + '</td>' +
          '<td class="centre">'  + position.coords.accuracy + '</td>' +
          '<td class="centre">' + new Date(position.timestamp) + '</td>'+
          '<td><button ion-button (click)="loadMap()"><ion-icon name="reset"></ion-icon>Reset GPS Location</button></td></tr>';
          '</table>' +
              '<button ion-button (click)="loadMap()"><ion-icon name="reset"></ion-icon>Reset GPS Location</button>';

    }, (err) => {
      console.log(err);
    });

  }

}

