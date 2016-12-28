import { Component, OnInit } from '@angular/core';
import { Class } from '../../models';
import { ClassService } from '../../services/class.service';
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    animations:  [animateFactory(1000, 200, 'ease-in')]
})
export class HomeComponent implements OnInit{
    private title: string;
    private classes: Class[];
    private classService: ClassService;

    constructor(classService: ClassService) {
        this.title = 'School administrative software';
         this.classService = classService;
    };

    ngOnInit() {
        this.getClasses();
    }

    private getClasses(): void {
        this.classService.getClasses()
            .subscribe(cl => {
                    this.classes = cl;

                },
                (err) => {
                    console.log(err);
                });
    }
}
