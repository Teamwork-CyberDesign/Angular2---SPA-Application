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
    }

    ngOnInit() {
        this.getClasses();
    }

    private getClasses(): void {
        this.data.getClassesForCurrentUser()
            .subscribe(cl => {
                if (!Array.isArray(cl) || cl.length === 0) {
                    let blankClass = new Class();
                    this.classes = [];
                    this._currentSelection = blankClass;
                } else {
                    this.classes = cl;
                    this._currentSelection = cl[0];
                }

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
        this.currentSelection = this.classes.filter(cl => cl.grade === classNumber)[0];
    }
}
