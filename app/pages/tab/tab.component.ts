import { Component } from "@angular/core";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { registerElement } from 'nativescript-angular';
//import {RadDataForm, EntityProperty} from "nativescript-pro-ui/dataform";
import { ProjectService } from "../../shared/project/project.service";
import * as Toast from "nativescript-toast";

import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';

registerElement('BottomBar', () => BottomBar);

@Component({
    selector: "tab",
    moduleId: module.id,
    templateUrl: "tab.html",
    styleUrls: ["../../app.css"]
})
  
export class TabComponent {
    public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;

    public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Home", "ic_home_black_24dp", "blue"),
        new BottomBarItem(1, "Schedule", "ic_calendar", "blue"),
        new BottomBarItem(2, "Preview", "ic_collaborator", "blue"),
        new BottomBarItem(3, "Folder", "ic_paperplane", "blue")
    ];

    constructor(private nav: RouterExtensions, private projectService: ProjectService) {
        console.log('TabComponent Constructor');
    }

    tabLoaded(event) {
        console.log("barLoaded");


        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.inactiveColor = "#939393";
        this.accentColor = "white";
        this.projectService.getStatus()
                            .subscribe(
                                () => this.nav.navigate(["/tabs/home"]),
                                (error) =>  Toast.makeText(error.json().message).show()
                            );    
    }

    tabSelected(args: SelectedIndexChangedEventData) {
        // only triggered when a different tab is tapped
        console.log(args.newIndex);
        if (args.newIndex==0)
            this.nav.navigate(["tabs/home"]);
        else if (args.newIndex==1)
            this.nav.navigate(["tabs/schedule"]);
    }

    pageLoaded(event) {
        console.log("page Loaded");
    }

    onTap() {

    }
}
