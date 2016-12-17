import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    template: `<div class="col-md-6 col-md-offset-3">
    <h2>Register</h2>
</div>`
})

export class RegisterComponent {
    model: any = {};

    constructor(
        private router: Router
    ) {}

    register() {
        // TODO:
    }
}