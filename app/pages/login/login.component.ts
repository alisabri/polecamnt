import { Component } from "@angular/core";
//import { Router } from "@angular/router";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import * as Toast from "nativescript-toast";

@Component({
  selector: "my-app",
  moduleId: module.id,
  providers: [UserService],
  templateUrl: "login.html",
  styleUrls: ["../../app.css", "login.css"]
})

export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private nav: RouterExtensions, private userService: UserService) {
      this.user = new User();
      this.user.username = "polecam";
      this.user.password = "parolb";
  }
  
  submit() {
    alert("You’re using: " + this.user.username);
  }

  login() {
    this.userService.login(this.user)
                    .subscribe(
                        () => this.nav.navigate(["/home"], { clearHistory: true }),
                        (error) =>  Toast.makeText(error.json().message).show()
                    );
  }

}

