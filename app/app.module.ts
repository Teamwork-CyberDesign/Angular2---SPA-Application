import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { LoginComponent } from './login/login.component'; // import login component
import { RegisterComponent } from './register/register.component'; // import register component
import { AboutComponent } from './about/about.component'; //import about component
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, routing], //other modules the app depends on
    declarations: [AppComponent, AboutComponent, HomeComponent, LoginComponent, RegisterComponent], // declare all derectives and components
    bootstrap: [AppComponent], // root component to bootstarp
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {
}