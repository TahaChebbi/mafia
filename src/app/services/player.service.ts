import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL:string="http://localhost:3000/players"
  constructor(private httpClient:HttpClient) { }
  displayAllplayers(){
    return this.httpClient.get<{allplayers :any}>(this.playerURL);

  }
  // one object if finded
  displayPlayerById(id){
  
    
        return this.httpClient.get<{player:any}>(`${this.playerURL}/${id}`)
  }
//  delete one object from DB
  deletePlayerById(id){
    return this.httpClient.delete(`${this.playerURL}/${id}`)

  }

  addPlayer(playerObj,img:File){
    let formData= new FormData()
    formData.append("name",playerObj.name);
    formData.append("age",playerObj.age);
    formData.append("position",playerObj.position);
    formData.append("nbr",playerObj.nbr);
    formData.append("img",img);
      return this.httpClient.post<{message:"string"}>(this.playerURL,formData)
  }
  editPlayer(playerObj){
    return this.httpClient.put<{player:any}>(`${this.playerURL}/${playerObj._id}`,playerObj)
  }
}
