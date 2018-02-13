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

    var shuffleInstance = new Shuffle(document.getElementById('grid'), {
      itemSelector: '.js-item',
      sizer: '.js-shuffle-sizer'
    });

    $('#filter li a').click(function (e) {
      e.preventDefault();

      // set active class
      $('#filter li a').removeClass('active');
      $(this).addClass('active');

      // get group name from clicked item
      var groupName = $(this).attr('data-group');
      console.log(groupName);

      // reshuffle grid
      shuffleInstance.filter( groupName );
    });
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

      // Define a variable to hold the current altitude reading
      // let locAltitude = position.coords.altitude;
      // console.log(locAltitude);

      // Build the map and setup the maps api options
      let mapOptions = {
        center: latLng,
        zoom: 15,
        enableHighAccuracy: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(this.map);

      console.log(position.coords.altitude);

    }, (err) => {
      console.log(err);
    });

  }

}

