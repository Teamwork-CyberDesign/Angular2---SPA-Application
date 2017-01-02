import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    constructor(private router: Router) {
    }

    onFormSubmitted() {
       this.router.navigate(['/login']);
    }
}
