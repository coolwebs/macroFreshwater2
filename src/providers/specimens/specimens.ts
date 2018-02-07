import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpecimensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpecimensProvider {

  constructor(public http: Http) {
  }

  getSpecimens() {
    return this.http.get('./assets/appdata.json')
        .map(response => response.json());
  }

}
