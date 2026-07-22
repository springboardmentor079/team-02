import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { Router, NavigationEnd, RouterModule } from "@angular/router";
import { DOCUMENT, CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";
import { AuthService } from "./services/auth.service";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-dashboard-layout",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-sidenav-container style="height: 100vh;">
      <!-- Sidebar -->
      <mat-sidenav #sidenav mode="side" opened class="app-sidenav">
        <div class="sidenav-logo">
          <span class="logo-icon">🏗</span>
          <span class="logo-text">BuildTrack</span>
        </div>
        <nav class="sidenav-nav">
          <ng-container *ngFor="let item of navItems">
            <a
              *ngIf="hasAccess(item.roles)"
              class="nav-link"
              [routerLink]="item.link"
              routerLinkActive="active"
            >
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
  `,
  styles: [
    `
      .app-sidenav {
        width: 240px;
        background: #1a1d2e;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      .sidenav-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 28px 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
      .logo-icon {
        font-size: 28px;
      }
      .logo-text {
        font-size: 20px;
        font-weight: 700;
        background: linear-gradient(135deg, #9c95ff, #00bfa5);
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
        background: rgba(108, 99, 255, 0.1);
        color: #fff;
      }
      .nav-link.active {
        background: rgba(108, 99, 255, 0.2);
        color: #9c95ff;
      }
      .nav-link mat-icon {
        font-size: 20px;
      }
      .sidenav-footer {
        padding: 16px 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
      }
      .main-content {
        background: #0f1117;
        padding: 32px;
        overflow-y: auto;
      }
    `,
  ],
})
export class DashboardLayoutComponent {
  navItems = [
    {
      label: "Overview",
      icon: "dashboard",
      link: "/dashboard",
      roles: [
        "Administrator",
        "Project Manager",
        "Site Engineer",
        "Contractor",
        "Client",
      ],
    },
    {
      label: "Projects",
      icon: "business",
      link: "/projects",
      roles: ["Administrator", "Project Manager", "Site Engineer", "Client"],
    },
    {
      label: "Resources",
      icon: "people",
      link: "/resources",
      roles: ["Administrator", "Project Manager", "Site Engineer"],
    },
    {
      label: "Inventory",
      icon: "inventory_2",
      link: "/inventory",
      roles: ["Administrator", "Project Manager", "Contractor"],
    },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  hasAccess(allowedRoles: string[]): boolean {
    const user = this.authService.currentUserValue;
    if (!user) return false;
    const userRole = user.role?.toLowerCase() || "";
    return allowedRoles.some((r) => r.toLowerCase() === userRole);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = "buildtrack-frontend";

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const publicRoutes = ['/', '/login', '/register'];
      const currentUrl = this.router.url.split('?')[0];
      const isDashboard = !publicRoutes.includes(currentUrl);

      if (isDashboard) {
        this.renderer.addClass(this.document.body, 'dashboard-theme');
      } else {
        this.renderer.removeClass(this.document.body, 'dashboard-theme');
      }
    });
  }
}
