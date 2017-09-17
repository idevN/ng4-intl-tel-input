import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import intlTelInput from 'intl-tel-input';

declare const $: any;
declare const intlTelInput: any;
declare const intlTelInputUtils: any;

@Component({
	selector: 'intl-tel-input',
	templateUrl: './intl-tel-input.component.html',
	styleUrls: ['./intl-tel-input.component.css']
})

export class IntlTelInputComponent implements OnInit {
	
	value: string;
	status: boolean;	
	inputElement: string = '#phone'; // set this here to keep code maintainable
	initialCountryCode: string;

	@Output() change: EventEmitter<any> = new EventEmitter();	

	constructor() { }

	ngOnInit() {
		// initialize intl-tel-input plugin
		this.intlTelInputInit();
		// add event listener to input element
		document.querySelector(this.inputElement).addEventListener('keyup', () => this.onValueChange());
		
	}

	// function that will init intl-tel-input plugin
	intlTelInputInit() {
		$(this.inputElement).intlTelInput({
			geoIpLookup: function (callback) {
				$.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
					var countryCode = (resp && resp.country) ? resp.country : "";
					callback(countryCode);
					this.initialCountryCode = countryCode;					
				});
			},
			initialCountry: "auto", 
			utilsScript: '/node_modules/intl-tel-input/build/js/utils.js'
		});	
	}

	onValueChange() {
		this.value = $(this.inputElement).intlTelInput("getNumber");
		this.status = $(this.inputElement).intlTelInput("isValidNumber");
		// event emitter on value change
		this.change.emit(this.status);	
	}

}

