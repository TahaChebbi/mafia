import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataURL="http://localhost:3000/data"
  constructor(private httpClient:HttpClient) { }

  displayAllData(){
    return this.httpClient.get<{donnee:any}>(this.dataURL);
  }

 







}
