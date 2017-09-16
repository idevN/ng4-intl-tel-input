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
	numberType: any;
	value: string;
	isValid: boolean;	
	@Output() change: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() {
		$('#phone').intlTelInput({
			geoIpLookup: function (callback) {
				$.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
					var countryCode = (resp && resp.country) ? resp.country : "";
					callback(countryCode);
				});
			},
			initialCountry: "auto", // note #1: initialCountry 
			utilsScript: '/node_modules/intl-tel-input/build/js/utils.js'
		});		
	}

	onValueChange() {
		this.value = $("#phone").intlTelInput("getNumber");
		this.isValid = $("#phone").intlTelInput("isValidNumber")
		this.change.emit(this.isValid);	
	}

}
