import { WeatherService } from './../../services/weather.service';
import { FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherObj={};
  weatherForm:FormGroup;
  result;
  isLoaded=0;
  constructor(private weather:WeatherService) { }

  ngOnInit() {
  }
  weatherSubmit(){
    this.isLoaded=1
    this.weather.displayCountry(this.weatherObj).subscribe((data)=>{
      this.isLoaded=0
      this.result = data
      
    })
    
  
  }
}
