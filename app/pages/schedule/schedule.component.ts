import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { Schedule, Recording, Project } from "../../shared/project/project";
import { ProjectService } from "../../shared/project/project.service";

@Component({
    selector: "schedule",
    moduleId: module.id,
    templateUrl: "schedule.html",
    styleUrls: ["../../app.css"]
})
  
export class ScheduleComponent {

    isRunning:boolean;
    schedule: any;
    days: Recording[];
    
    constructor(private nav: RouterExtensions, private projectService:ProjectService) {
        console.log('HomeComponent Constructor');
        this.schedule = {
            "startDate": ""
        }
        this.schedule.startDate = this.projectService.project.schedule.startDate;
        this.isRunning = this.projectService.project.isRunning;
        this.days = this.projectService.project.schedule.days;
    }

}
