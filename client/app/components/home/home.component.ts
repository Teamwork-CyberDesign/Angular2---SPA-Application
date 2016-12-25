import { Component } from '@angular/core';
import {flyInAnimation} from '../../animations/fly-in';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    animations: flyInAnimation
})
export class HomeComponent {
    title: string;

    constructor() {
        this.title = 'School administrative software';
    };
}
