import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherUrl="http://localhost:3000/weather"
  constructor(private httpClient:HttpClient) { }
  displayCountry(obj){
    return this.httpClient.post<{msg1,msg2 : any}>(this.weatherUrl,obj);
  }
}
