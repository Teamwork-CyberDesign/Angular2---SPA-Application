import {Component} from '@angular/core';

@Component({
    selector: 'app-about',
    template: `<h1>{{welcome}}</h1>`
})
export class AboutComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to about page"
    };
};