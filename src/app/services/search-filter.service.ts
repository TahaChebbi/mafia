import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFilterService {
url="http://localhost:3000/score"
  constructor(private httpClient:HttpClient) { }

  display(obj){
    return this.httpClient.post<{var : any}>(this.url,obj)
  }
}
