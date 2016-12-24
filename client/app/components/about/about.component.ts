import { Component, OnInit,trigger, state, style, animate, transition } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'about.component.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.6s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class AboutComponent implements OnInit {
    returnUrl: string;

    constructor(private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
