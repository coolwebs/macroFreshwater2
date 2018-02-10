import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-glossary',
  templateUrl: 'glossary.html'
})
export class GlossaryPage {
  public glossaryList = [];

    descending: boolean = false;
    order: number;
    column: string = 'name';

  constructor(private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.http.get('./assets/appGlossary.json')
        .map(response => response.json())
        .subscribe((response) => {
          this.glossaryList = response;
        });
  }

    sort(){
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    }

}
