import { Component, Directive,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flyInAnimation } from '../../animations/fly-in';
import { CeiboShare } from 'ng2-social-share';

@Component({
    templateUrl: 'about.component.html',
    animations: flyInAnimation
})

export class AboutComponent implements OnInit {
public repoUrl: string;
    returnUrl: string;

    constructor(private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.repoUrl = 'https://github.com/Teamwork-CyberDesign/Angular2---SPA-Application';
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
