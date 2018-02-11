import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import Shuffle from 'shufflejs';
import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'page-locator',
  templateUrl: 'locator.html'
})
export class LocatorPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

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

  // Function for loading the google map and getting geolocation coords
  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}

