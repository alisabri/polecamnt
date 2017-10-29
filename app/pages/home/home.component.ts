import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import * as Toast from "nativescript-toast";

@Component({
  selector: "status",
  moduleId: module.id,
  providers: [UserService],
  templateUrl: "home.html",
  styleUrls: ["../../app.css"]
})

export class HomeComponent {

  constructor(private router: Router, private userService: UserService) {
      console.log("starting sstatus page");
  }
  
}
