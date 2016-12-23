import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';

@Injectable()
export class UserService {
    private usersUrl = 'api/users';

    constructor(private http: Http) {
    }

    getAllUsers(): Promise<User[]> {
        return this.http
            .get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUserById(id: string) {
        return this.getAllUsers()
            .then(users => users.find(user => user.id === id));
    }

    createUser(user: User): Promise<User> {
        return this.post(user);
    }

    updateUser(user: User): Promise<User> {
        return this.put(user);
    }

    // deleteUser(id: string){
    // TODO:
    // }

    private post(user: User): Promise<User> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.usersUrl, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(user: User): Promise<User> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.usersUrl}/${user.id}`;

        return this.http
            .put(url, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
