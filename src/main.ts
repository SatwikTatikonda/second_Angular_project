// ****** way-1 ******
// this is used to start application if the root Component is a standalone component


// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';
// import { Component } from '@angular/core';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));



// ****** way-2 ******
// this is used to start application if the root Component is not a standalone component

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

