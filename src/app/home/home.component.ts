import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

 constructor(private weatherService:WeatherService) { 
  
  ngOnInit() {

  }

   	console.log("ngOnInit marche");
   	console.log(this.weatherService.getWeather());
   	console.log("Aprés le weather");
   	this.weatherService.getWeather();
    /*return(this.http.get('https://www.prevision-meteo.ch/services/json/paris'));.subscribe((res) => console.log(res)));*/
  }
} 
 