// // Angular bootstrap is disabled to serve the monolithic React index.html.
// console.log("React standalone app running via Angular dev server");
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));