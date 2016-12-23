import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map((response: Response) => {
                let user = JSON.parse(response.json());
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user.username));
                    localStorage.setItem('session', JSON.stringify(user.token));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('session');
    }
}