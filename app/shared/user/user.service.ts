import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "oauth/token",
            JSON.stringify({
                username: user.username,
                password: user.password,
                authenticate: "password"
            }),
            { headers: headers }
        )
        .map(result => result.json())
        .do(result => {
            console.log("RESULT: ", result.token);
            Config.token = result.token;            
        })
        .catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        return Observable.throw(error);
    }
}

