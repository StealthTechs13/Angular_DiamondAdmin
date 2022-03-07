import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { UiService } from '../services/ui-service';


@Injectable()
export class BaseHttpService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http,private uISERVICE: UiService) { }

    GetHeaders(): Headers {
        this.createAuthorizationHeader();
        return this.headers;
    }

    createAuthorizationHeader() {
        
        if (Cookie.check("AdminCookies")) {
            this.headers.set('Authorization', 'Bearer ' + Cookie.get("AdminCookies"));
        }
        this.headers.set('Access-Control-Allow-Origin', 'GET, POST, DELETE, PUT');
    }
    Post(url, model: any) {

        this.createAuthorizationHeader();
        return this.http.post(url, model, { headers: this.headers }).toPromise();
    }

    Put(url, model: any) {
        this.createAuthorizationHeader();
        return this.http.put(url, model, { headers: this.headers }).toPromise();
    }

    Get(url: string) {
        this.createAuthorizationHeader();
        return this.http.get(url, { headers: this.headers }).toPromise();
    }


    Delete(url: string) {
        this.createAuthorizationHeader();
        return this.http.delete(url, { headers: this.headers }).toPromise();
    }
}