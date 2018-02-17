import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import * as $ from "jquery";
import Shuffle from 'shufflejs';

import { NavController } from 'ionic-angular';
import { SpecimensProvider } from '../../providers/specimens/specimens';
import { MacroDetailPage } from '../../pages/macro-detail/macro-detail';

@Component({
	selector: 'page-filter',
	templateUrl: 'filter.html'
})
export class FilterPage {
	size: any = "";
	shell: any = "";
	legs: any = "";
	tail: any = "";
	sensitive: any = "";

	buttonIconSize: string = "ios-add-circle-outline";
	toggleIconSize(getIcon: string) {

		if (this.buttonIconSize === 'ios-remove-circle-outline') {
			this.buttonIconSize = "ios-add-circle-outline";
		}
		else if (this.buttonIconSize === 'ios-add-circle-outline') {
			this.buttonIconSize = "ios-remove-circle-outline";
		}
	}

	buttonIconShell: string = "ios-add-circle-outline";
	toggleIconShell(getIcon: string) {

		if (this.buttonIconShell === 'ios-remove-circle-outline') {
			this.buttonIconShell = "ios-add-circle-outline";
		}
		else if (this.buttonIconShell === 'ios-add-circle-outline') {
			this.buttonIconShell = "ios-remove-circle-outline";
		}
	}

	buttonIconLegs: string = "ios-add-circle-outline";
	toggleIconLegs(getIcon: string) {

		if (this.buttonIconLegs === 'ios-remove-circle-outline') {
			this.buttonIconLegs = "ios-add-circle-outline";
		}
		else if (this.buttonIconLegs === 'ios-add-circle-outline') {
			this.buttonIconLegs = "ios-remove-circle-outline";
		}
	}

	buttonIconTail: string = "ios-add-circle-outline";
	toggleIconTail(getIcon: string) {

		if (this.buttonIconTail === 'ios-remove-circle-outline') {
			this.buttonIconTail = "ios-add-circle-outline";
		}
		else if (this.buttonIconTail === 'ios-add-circle-outline') {
			this.buttonIconTail = "ios-remove-circle-outline";
		}
	}

	buttonIconSense: string = "ios-add-circle-outline";
	toggleIconSense(getIcon: string) {

		if (this.buttonIconSense === 'ios-remove-circle-outline') {
			this.buttonIconSense = "ios-add-circle-outline";
		}
		else if (this.buttonIconSense === 'ios-add-circle-outline') {
			this.buttonIconSense = "ios-remove-circle-outline";
		}
	}

	public allMacros = [];

	constructor(private specimensProvider: SpecimensProvider, private http: Http, public navCtrl: NavController) {

		$(document).ready(function($) {

			$('#accordion').find('.accordion-toggle').click(function() {

				$(this).toggleClass('activeState');
				// Expand or collapse this panel
				$(this).next().slideToggle('fast');

			});
		});
	}

	ionViewDidLoad() {
		// Get the json data for specimens and prepare for template
		this.specimensProvider.getSpecimens()
			.subscribe((response) => {
				this.allMacros = response;
				console.log(response);
			});
	}

	goToMacroDetailsPage(macro) {
		this.navCtrl.push(MacroDetailPage, {
			macroDetails: macro
		});
	}

    
    resetFilters() {
        //this.size = "";
        //this.shell = "";
        //this.legs = "";
        //this.tail = "";
       // this.sensitive = "";
       //document.getElementById('all').checked = true;
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
	}


}
