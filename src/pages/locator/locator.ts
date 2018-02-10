import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import Shuffle from 'shufflejs';

@Component({
  selector: 'page-locator',
  templateUrl: 'locator.html'
})
export class LocatorPage {
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
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

}

