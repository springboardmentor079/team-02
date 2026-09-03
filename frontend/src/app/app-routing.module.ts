import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Core component shell imports (scaffolded components)
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ProcurementComponent } from './components/procurement/procurement.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] }
  },
  { 
    path: 'notifications', 
    component: NotificationsComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] }
  },
  { 
    path: 'projects', 
    component: ProjectsComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Client'] }
  },
  { 
    path: 'resources', 
    component: ResourcesComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer'] }
  },
  { 
    path: 'inventory', 
    component: InventoryComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Contractor', 'Site Engineer'] }
  },
  { 
    path: 'attendance', 
    component: AttendanceComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor'] }
  },
  { 
    path: 'procurement', 
    component: ProcurementComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Contractor', 'Site Engineer'] }
  },
  { 
    path: 'reports', 
    component: ReportsComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] }
  },
  { 
    path: 'documents', 
    component: DocumentsComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] }
  },
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }; // Expose routes for unit testing context
