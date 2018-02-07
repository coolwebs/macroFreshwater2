import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-glossary',
  templateUrl: 'glossary.html'
})
export class GlossaryPage {
  public glossaryTerms = [];

  constructor(private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.http.get('./assets/appGlossary.json')
        .map(response => response.json())
        .subscribe((response) => {
          this.glossaryTerms = response;
        });
  }

}
