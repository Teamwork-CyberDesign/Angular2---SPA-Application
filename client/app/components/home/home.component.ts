import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/class';
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    animations:  [animateFactory(1000, 200, 'ease-in')]
})
export class HomeComponent implements OnInit{
    title: string;
    classes: Class[]

    constructor(private classService: ClassService) {
        this.title = 'School administrative software';
    };

    ngOnInit(){
        this.loadClasses();
    }

    loadClasses() {
        this.classService.getClasses()
            .subscribe(
                cl => {
                    this.classes = cl as Class[];
                    console.log(this.classes);
                },
                err => {
                    console.log(err);
                });
    }
}
