import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User }          from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    private HandleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    login(req: string): Promise<User> {
        return this.http
                .post('./user/login', JSON.stringify(req), {headers: this.headers})
                .toPromise()
                .then(response => response.json())             
                .catch(this.HandleError);
    }

}

