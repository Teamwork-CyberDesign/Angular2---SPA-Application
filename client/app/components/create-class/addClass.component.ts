import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'add-class.component.html'
})
export class AddClassComponent implements OnInit {
    returnUrl: string;

    constructor(private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}