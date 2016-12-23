import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
    returnUrl: string;

    constructor(private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
