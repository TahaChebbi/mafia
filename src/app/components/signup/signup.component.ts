import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "../validators/confirmPwd";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  //ID Formulaire
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  Signup = "Sign Up";
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email, Validators.required]],
      pwd: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ],
      ],
      confirmPwd: [""],
    },{
      validators:MustMatch("pwd","confirmPwd")
    }
    
    
    );
  }

  signup() {
    this.userService.signup(this.signupForm.value).subscribe((data) => {
      console.log(
        data.message,
        " first Name:",
        data.user.firstName,
        " last Name:",
        data.user.lastName,
        " Email:",
        data.user.email,
       
      );
    });
  }
}
