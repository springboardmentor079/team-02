import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardLayoutComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { 
        path: '', 
        component: DashboardLayoutComponent,
        children: [
            // Dashboard routes can be added here
        ]
    }
];