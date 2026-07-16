import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container style="height: 100vh;" *ngIf="isLoggedIn(); else authView">
      <!-- Sidebar -->
      <mat-sidenav #sidenav mode="side" opened class="app-sidenav">
        <div class="sidenav-logo">
          <span class="logo-icon">🏗</span>
          <span class="logo-text">BuildTrack</span>
        </div>
        <nav class="sidenav-nav">
          <ng-container *ngFor="let item of navItems">
            <a *ngIf="hasAccess(item.roles)" class="nav-link" [routerLink]="item.link" routerLinkActive="active">
              <mat-icon>{{ item.icon }}</mat-icon> {{ item.label }}
            </a>
          </ng-container>
        </nav>
        <div class="sidenav-footer">
          <button class="btn btn-outline" style="width:100%" (click)="logout()">
            <mat-icon>logout</mat-icon> Logout
          </button>
        </div>
      </mat-sidenav>

      <!-- Main Content -->
      <mat-sidenav-content class="main-content">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <!-- Auth layout -->
    <ng-template #authView>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styles: [`
    .app-sidenav {
      width: 240px;
      background: #1a1d2e;
      border-right: 1px solid rgba(255,255,255,0.08);
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    .sidenav-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 28px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .logo-icon { font-size: 28px; }
    .logo-text {
      font-size: 20px;
      font-weight: 700;
      background: linear-gradient(135deg, #9c95ff, #00BFA5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .sidenav-nav {
      flex: 1;
      padding: 16px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 10px;
      color: #a0a3b1;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s;
    }
    .nav-link:hover {
      background: rgba(108,99,255,0.1);
      color: #fff;
    }
    .nav-link.active {
      background: rgba(108,99,255,0.2);
      color: #9c95ff;
    }
    .nav-link mat-icon { font-size: 20px; }
    .sidenav-footer {
      padding: 16px 20px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .main-content {
      background: #0f1117;
      padding: 32px;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {
  title = 'buildtrack-frontend';

  navItems = [
    { label: 'Overview', icon: 'dashboard', link: '/dashboard', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] },
    { label: 'Projects', icon: 'business', link: '/projects', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Client'] },
    { label: 'Resources', icon: 'people', link: '/resources', roles: ['Administrator', 'Project Manager', 'Site Engineer'] },
    { label: 'Inventory', icon: 'inventory_2', link: '/inventory', roles: ['Administrator', 'Project Manager', 'Contractor'] }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return !!this.authService.currentUserValue;
  }

  hasAccess(allowedRoles: string[]): boolean {
    const user = this.authService.currentUserValue;
    if (!user) return false;
    const userRole = user.role?.toLowerCase() || '';
    return allowedRoles.some(r => r.toLowerCase() === userRole);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
