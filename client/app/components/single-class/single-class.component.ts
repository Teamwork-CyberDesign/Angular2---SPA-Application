import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../models/class';

@Component({
    selector: 'single-class',
    templateUrl: 'single-class.component.html'
})

export class SingleClassComponent implements OnInit {
    @Input() data: Class;

    constructor() {
    }

    ngOnInit() {
        this.getClasses();
    }

    private getClasses(): void {
        console.log(this.data);
    }
}
