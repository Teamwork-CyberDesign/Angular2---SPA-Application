import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    animations:  [animateFactory(1000, 200, 'ease-in')]
})
export class AppComponent {
    show: boolean = true;
    private auth: AuthenticationService;
    private notifierOptions = {
        timeOut: 3000,
        preventDuplicates: true,
        position: ['bottom', 'left']
    };

    constructor(auth: AuthenticationService) {
        this.auth = auth;
    }
}
