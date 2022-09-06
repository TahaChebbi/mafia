import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumURL="http://localhost:3000/stadiums"
  constructor(private httpClient:HttpClient) { }

  addStadium(obj){
    return this.httpClient.post<{message:any}>(this.stadiumURL,obj)
  }
  getAllStadiums(){
    return this.httpClient.get<{message:any}>(this.stadiumURL);
  }
  getStadiumById(id){
    return  this.httpClient.get<{message:any}>(`${this.stadiumURL}/${id}`);
  }
  editStadium(obj){
    return this.httpClient.put(`${this.stadiumURL}/${obj._id}`,obj)
  }
}
