import { Component, style, state, transition, animate,keyframes, AnimationMetadata } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'School administrative software';
    };
}
