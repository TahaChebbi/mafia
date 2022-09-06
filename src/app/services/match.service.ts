
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchURL:string="http://localhost:3000/matches"
  constructor(private httpClient:HttpClient) { }

// Array of objects
  displayAllMatches(){
    return this.httpClient.get<{match :any}>(this.matchURL);

  }
  // one object if finded
  displayMatchById(id){
        return this.httpClient.get<{dispMatches:any}>(`${this.matchURL}/${id}`)
  }
//  delete one object from DB
  deleteMatchById(id){
    return this.httpClient.delete<{message :any}>(`${this.matchURL}/${id}`)

  }

  addMatch(matchObj){
      return this.httpClient.post(this.matchURL,matchObj)
  }
  editMatch(matchObj){
    return this.httpClient.put(`${this.matchURL}/${matchObj._id}`,matchObj)
  }
}
