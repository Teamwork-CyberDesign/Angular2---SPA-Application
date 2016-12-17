import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ], //other modules the app depends on
  declarations: [ AppComponent, AboutComponent, HomeComponent ], // declare all derectives and components
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }