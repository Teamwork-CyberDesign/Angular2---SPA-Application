import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {flyInAnimation} from '../../animations/fly-in';

@Component({
    templateUrl: 'about.component.html',
    animations: flyInAnimation
})
export class AboutComponent implements OnInit {
    returnUrl: string;

    constructor(private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
