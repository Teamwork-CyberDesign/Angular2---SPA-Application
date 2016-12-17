import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    template: `<div class="col-md-6 col-md-offset-3">
    <h2>Login</h2>
</div>`
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