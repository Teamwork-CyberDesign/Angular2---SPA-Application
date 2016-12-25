import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
    private returnUrl: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
