import { Component } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
//import {RadDataForm, EntityProperty} from "nativescript-pro-ui/dataform";
import { Info, Project } from "../../shared/project/project";
import { ProjectService } from "../../shared/project/project.service";


@Component({
    selector: "home",
    moduleId: module.id,
    templateUrl: "home.html",
    styleUrls: ["../../app.css"]
})
  
export class HomeComponent {

    info: Info;
    isRunning:boolean;

    constructor(private nav: RouterExtensions, private projectService:ProjectService) {
        this.info = this.projectService.project.info;
        this.isRunning = this.projectService.project.isRunning;
        console.log('HomeComponent Constructor', this.isRunning);
    }

    pageLoaded(event) {
        console.log("page Loaded home");
    }

    onTap() {

    }
}
