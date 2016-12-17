import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAllUsers(){
        // TODO:
    }

    getUserById(id: string){
        // TODO:
    }

    createUser(user: User){
        // TODO:
    }

    updateUser(user: User){
        // TODO:
    }

    deleteUser(id: string){
        // TODO:
    }
}