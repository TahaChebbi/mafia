import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL:string="http://localhost:3000/teams"
  constructor(private httpClient:HttpClient) { }

// Array of objects
  displayAllTeams(){
    return this.httpClient.get<{allteams:any}>(this.teamURL);

  }
  // one object if finded
  displayTeamById(id){
        return this.httpClient.get(`${this.teamURL}/${id}`)
  }
//  delete one object from DB
  deleteTeamById(id){
    return this.httpClient.delete(`${this.teamURL}/${id}`)

  }

  addTeam(teamObj){
      return this.httpClient.post(this.teamURL,teamObj)
  }
  editTeam(teamObj){
    return this.httpClient.put(`${this.teamURL}/${teamObj.id}`,teamObj)
  }
}
