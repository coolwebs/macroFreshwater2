import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { NavController } from 'ionic-angular';
import { SpecimensProvider } from  '../../providers/specimens/specimens';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor ( private inAppBrowser: InAppBrowser ) {}
}