import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent{
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    login() {
        // TODO:
    }
}