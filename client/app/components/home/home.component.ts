import { Component } from '@angular/core';
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    animations:  [animateFactory(1000, 200, 'ease-in')]
})
export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'School administrative software';
    };
}
