import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // import home components
import { LoginComponent } from './components/login/login.component'; // import login component
import { RegisterComponent } from './components/register/register.component'; // import register component
import { AddMarkComponent } from './components/create-mark/addMark.component'; // import component for adding marks
import { AddClassComponent } from './components/create-class/addClass.component'; // import component for adding marks
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component'; // import about component
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from './services/user.service';
import { ClassService } from './services/class.service';
import { AuthenticationService } from './services/authentication.service';
import { SortByFirstNamePipe } from './pipes/sort-by-first-name.pipe';
import { SortByFirstThenByLastNamePipe } from './pipes/sort-by-first-then-last-name.pipe';
import { PageNotFoundComponent } from './components/page-not-found';

@NgModule({
    imports: [ // other modules the app depends on
        BrowserModule,
        routing,
        HttpModule,
        FormsModule],
    declarations: [ // declare all derectives and components
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AddMarkComponent,
        AddClassComponent,
        UsersComponent,
        PageNotFoundComponent,
        SortByFirstNamePipe,
        SortByFirstThenByLastNamePipe
    ],
    bootstrap: [AppComponent], // root component to bootstarp
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService,
        AuthenticationService,
        ClassService]
})
export class AppModule {
}
