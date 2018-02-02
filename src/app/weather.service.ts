import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

	results: string[];

	constructor(private http:Http) { 
	}

	getWeather(){
		//
		return(this.http.get('https://www.prevision-meteo.ch/services/json/paris'));
	}
}
 