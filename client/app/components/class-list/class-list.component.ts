import { Component, OnInit } from '@angular/core';
import { Class } from '../../models/class';
import { ClassService } from '../../services/class.service';

@Component({
    selector: 'class-list',
    templateUrl: 'class-list.component.html'
})

export class ClassListComponent implements OnInit {
    private classes: Class[];
    private _currentSelection: Class;

    constructor(private data: ClassService) {
        this.currentSelection = new Class();
        this.currentSelection.grade = '' ;
        this.currentSelection.students = [];
    }

    ngOnInit() {
        this.getClasses();
    }

    private getClasses(): void {
        this.data.getClassesForCurrentUser()
            .subscribe(cl => {
                this.classes = cl;
                this._currentSelection = cl[0];
            });
    }

    public get currentSelection(): Class {
        return this._currentSelection;
    }

    public set currentSelection(cl: Class) {
        if (cl == null) {
            throw new Error('Current selection cannot be null!');
        }

        this._currentSelection = cl;
    }

    private showClassInfo(classNumber) {
        this.currentSelection = this.classes.find(cl => cl.grade === classNumber)[0];
    }
}
