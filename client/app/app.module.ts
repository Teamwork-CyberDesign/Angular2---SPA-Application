import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // import home components
import { LoginComponent } from './components/login/login.component'; // import login component
import { RegisterComponent } from './components/register/register.component'; // import register component
import { AddMarkComponent } from './components/add-mark/add-mark.component'; // import component for adding marks
import { AddClassComponent } from './components/create-class/create-class.component'; // import component for adding marks
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/student-profile/profile.component';
import { AboutComponent } from './components/about/about.component'; // import about component
import { CeiboShare } from 'ng2-social-share';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from './services/user.service';
import { ClassService } from './services/class.service';
import { AuthenticationService } from './services/authentication.service';
import { PageNotFoundComponent } from './components/page-not-found';
import { AjaxRequesterService } from './services/requester.service';
import { ClassListComponent } from './components/class-list';
import { SingleClassComponent } from './components/single-class';
import { AuthGuard } from './services/auth-guard.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TeacherGuard } from './services/teacher-guard.service';
import { SingleStudentComponent } from './components/single-student';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';
import { CreateStudentComponent } from './components/create-student';
import { EqualValidator } from './directives/validate-equal.directive';
import { CreateStudentModalComponent } from './components/create-student-modal/create-student-modal.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { StudentMarksComponent } from './components/student-marks/student-marks.component';
import { PipesModule } from './pipes/pipes.module';
import { EventService } from './services/event.service';
import { EventListComponent } from './components/event-list/event-list.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { EventFormComponent } from './components/event-form/event-form.component';

@NgModule({
    imports: [ // other modules the app depends on
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
        Ng2AutoCompleteModule,
        PipesModule,
        SimpleNotificationsModule],
    declarations: [ // declare all derectives and components
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AddMarkComponent,
        SingleEventComponent,
        AddClassComponent,
        UsersComponent,
        PageNotFoundComponent,
        ClassListComponent,
        CreateTeacherComponent,
        SingleClassComponent,
        SingleStudentComponent,
        EventListComponent,
        CreateStudentComponent,
        ProfileComponent,
        StudentMarksComponent,
        AddClassesComponent,
        EventFormComponent,
        CeiboShare,
        CreateStudentModalComponent,
        EqualValidator,
        FileSelectDirective
    ],
    bootstrap: [AppComponent], // root component to bootstarp
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService,
        AuthenticationService,
        ClassService,
        AjaxRequesterService,
        AuthGuard,
        EventService,
        StudentService,
        TeacherService,
        TeacherGuard,
        CookieService]
})
export class AppModule {
}
