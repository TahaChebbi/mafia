import { UserService } from './../../services/user.service';
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any = {};
  
  constructor(private userService:UserService) {}

  ngOnInit() {}

  login(){
    this.userService.login(this.user).subscribe((data)=>{
      console.log("here response :",data.message);
      console.log("object :",data.user);
      
    })
  }

}
