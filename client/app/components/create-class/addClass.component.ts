import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../services/class.service';

@Component({
    templateUrl: 'add-class.component.html'
})
export class AddClassComponent {
    returnUrl: string;
    model: any = {};

    constructor(private router: Router,
                private classService: ClassService) {
    }

    loadNewClass() {
        this.classService.createClass(this.model)
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                }
            );
    }
}