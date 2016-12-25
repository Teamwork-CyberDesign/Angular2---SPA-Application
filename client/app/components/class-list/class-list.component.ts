import { Component, OnInit } from '@angular/core';
import { Class } from '../../models/class';
import { ClassService } from '../../services/class.service';

// import { Router } from '@angular/router';

@Component({
    selector: 'class-list',
    templateUrl: 'class-list.component.html'
})

export class ClassListComponent implements OnInit {
    classes: Class[];
    error: any;

    constructor(private data: ClassService) {
    }

    ngOnInit() {
        this.getClasses();
    }

    private getClasses(): void {
        this.data.getClass()
            .subscribe(cl => {
                this.classes = cl;
            });
    }
}
