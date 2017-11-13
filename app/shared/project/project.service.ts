import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Project } from "./project";
import { Config } from "../config";

@Injectable()
export class ProjectService {
    public project: Project;

    constructor(private http: Http) {
        console.log("ProjectService Constructor");
    }

    getStatus() {
        console.log("calling getStatus");
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "status",
            JSON.stringify({
            }),
            { headers: headers }
        )
        .map(result => result.json())
        .do(result => {
            console.log("RESULT: ", result.project);
            this.project = result.project;
        })
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }
}

