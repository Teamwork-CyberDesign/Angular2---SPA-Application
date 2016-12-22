import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { LoginComponent } from './login/login.component'; // import login component
import { RegisterComponent } from './register/register.component'; // import register component
import { AddMarkComponent } from './create-mark/addMark.component'; // import component for adding marks
import { UsersComponent} from './users/users.component';
import { AboutComponent } from './about/about.component'; //import about component
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';


import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule], //other modules the app depends on
    declarations: [AppComponent, AboutComponent, HomeComponent, LoginComponent, RegisterComponent, AddMarkComponent, UsersComponent], // declare all derectives and components
    bootstrap: [AppComponent], // root component to bootstarp
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService, AuthenticationService]
})
export class AppModule {
}