import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Core component shell imports (scaffolded components)
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'projects', 
    component: ProjectsComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'resources', 
    component: ResourcesComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'inventory', 
    component: InventoryComponent, 
    canActivate: [AuthGuard] 
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }; // Expose routes for unit testing context
