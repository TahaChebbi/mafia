import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) {}
// displayAllUsers(){
//      return this.httpClient.get(this.userURL);
//   }

  login(obj) {
    return this.httpClient.post<{ message: any ,user:any}>(`${this.userURL}/login`, obj);
  }
  //  editProfile(user){
  //   return this.httpClient.put(`${this.userURL}/${user.id}`,user)

  // }
  // displayProfile(id){
  //   return this.httpClient.get(`${this.userURL}/${id}`)
  // }
  signup(obj) {
    return this.httpClient.post<{ message; user: any }>(
      `${this.userURL}/signup`,
      obj
    );
  }
}
