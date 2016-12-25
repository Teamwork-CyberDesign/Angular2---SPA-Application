import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    private auth: AuthenticationService;

    constructor(auth: AuthenticationService) {
        this.auth = auth;
    }
}