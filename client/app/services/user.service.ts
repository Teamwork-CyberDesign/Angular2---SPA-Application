import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    private requester: AjaxRequesterService<User>;
    private usersUrl = '/api/users';
    private profileUrl = '/api/profile';

    constructor(requester: AjaxRequesterService<User>) {
        this.requester = requester;
    }

    getAllUsers(): Observable<User[] | User> {
        return this.requester.get(this.usersUrl);
    }

    getUserByUsername(username: string): Observable<User[] | User> {
        return this.requester.get(this.profileUrl + `/${username}`);
    }

    createUser(user: User): Observable<any> {
        return this.requester.post(this.usersUrl, user, false);
    }

    updateUser(user: User): Observable<any> {
        return this.requester.put(this.usersUrl, user, true);
    }

    // deleteUser(id: string){
    // TODO:
    // }
}
