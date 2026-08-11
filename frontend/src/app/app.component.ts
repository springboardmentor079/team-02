import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { NotificationService, ToastMessage } from './services/notification.service';

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
              <mat-icon>{{ item.icon }}</mat-icon> 
              <span class="link-label">{{ item.label }}</span>
              <span class="nav-badge" *ngIf="item.link === '/notifications' && unreadCount > 0">
                {{ unreadCount > 99 ? '99+' : unreadCount }}
              </span>
            </a>
          </ng-container>
        </nav>
        <div class="sidenav-footer">
          <button class="btn btn-outline" style="width:100%" (click)="confirmLogout()">
            <mat-icon>logout</mat-icon> Logout
          </button>
        </div>
      </mat-sidenav>

      <!-- Main Content -->
      <mat-sidenav-content class="main-content">
        <!-- Top Header Navbar -->
        <header class="top-navbar">
          <div class="navbar-search">
            <mat-icon>search</mat-icon>
            <input type="text" placeholder="Search projects, materials, purchase orders..." />
          </div>
          <div class="navbar-right">
            <!-- Notification Bell Drawer -->
            <app-notification-drawer></app-notification-drawer>

            <!-- User Profile Pill -->
            <div class="user-pill">
              <div class="user-avatar">{{ getUserInitial() }}</div>
              <div class="user-info">
                <span class="user-name">{{ getUserName() }}</span>
                <span class="user-role">{{ getUserRole() }}</span>
              </div>
            </div>
          </div>
        </header>

        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <!-- Real-time Live Toasts Floating Container -->
    <div class="toast-container">
      <div 
        class="toast-card" 
        *ngFor="let toast of activeToasts"
        [ngClass]="toast.type"
        (click)="onToastClick(toast)"
      >
        <div class="toast-icon">
          <mat-icon>{{ getToastIcon(toast.type) }}</mat-icon>
        </div>
        <div class="toast-body">
          <div class="toast-header-row">
            <span class="toast-title">{{ toast.title }}</span>
            <span class="toast-badge" *ngIf="toast.priority">{{ toast.priority | uppercase }}</span>
          </div>
          <p class="toast-msg">{{ toast.message }}</p>
        </div>
        <button class="toast-close-btn" (click)="$event.stopPropagation(); dismissToast(toast.id)">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </div>

    <!-- Logout Confirmation Modal Overlay -->
    <div class="logout-modal-overlay" *ngIf="showLogoutModal" (click)="cancelLogout()">
      <div class="logout-modal-card" (click)="$event.stopPropagation()">
        <div class="logout-modal-header">
          <div class="logout-icon-circle">
            <mat-icon>power_settings_new</mat-icon>
          </div>
          <h3>Confirm Logout</h3>
          <p>Are you sure you want to log out of <strong>BuildTrack</strong>?</p>
        </div>
        <div class="logout-modal-actions">
          <button class="btn btn-cancel" (click)="cancelLogout()">Cancel</button>
          <button class="btn btn-confirm-logout" (click)="executeLogout()">
            <mat-icon>logout</mat-icon> Yes, Logout
          </button>
        </div>
      </div>
    </div>

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
      padding: 24px 24px;
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
      position: relative;
    }
    .link-label { flex: 1; }
    .nav-link:hover {
      background: rgba(108,99,255,0.1);
      color: #fff;
    }
    .nav-link.active {
      background: rgba(108,99,255,0.2);
      color: #9c95ff;
    }
    .nav-link mat-icon { font-size: 20px; }
    .nav-badge {
      background: #FF6B6B;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 10px;
    }

    .sidenav-footer {
      padding: 16px 20px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .main-content {
      background: #0f1117;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    /* Top Navbar Header */
    .top-navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 32px;
      background: #1a1d2e;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .navbar-search {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 8px 14px;
      width: 320px;
    }
    .navbar-search mat-icon { color: #6b6f82; font-size: 20px; }
    .navbar-search input {
      background: none;
      border: none;
      color: #fff;
      font-size: 13px;
      outline: none;
      width: 100%;
    }
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .user-pill {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255,255,255,0.04);
      padding: 4px 12px 4px 6px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6C63FF, #00BFA5);
      color: #fff;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .user-info { display: flex; flex-direction: column; }
    .user-name { font-size: 13px; font-weight: 600; color: #fff; }
    .user-role { font-size: 10px; color: #a0a3b1; text-transform: uppercase; }

    .content-wrapper {
      padding: 32px;
      flex: 1;
    }

    /* Live Toast Container */
    .toast-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 999999;
      max-width: 380px;
      pointer-events: none;
    }
    .toast-card {
      pointer-events: auto;
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 14px;
      padding: 14px 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(12px);
      cursor: pointer;
      animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      transition: transform 0.2s ease;
    }
    .toast-card:hover { transform: translateY(-2px); }
    .toast-card.danger { border-color: rgba(255, 107, 107, 0.5); background: linear-gradient(135deg, #24141d, #1a1d2e); }
    .toast-card.warning { border-color: rgba(255, 193, 7, 0.5); background: linear-gradient(135deg, #252219, #1a1d2e); }
    .toast-card.success { border-color: rgba(0, 191, 165, 0.5); background: linear-gradient(135deg, #122825, #1a1d2e); }
    .toast-card.info { border-color: rgba(108, 99, 255, 0.5); background: linear-gradient(135deg, #1c1a36, #1a1d2e); }

    .toast-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .toast-card.danger .toast-icon { background: rgba(255, 107, 107, 0.2); color: #FF6B6B; }
    .toast-card.warning .toast-icon { background: rgba(255, 193, 7, 0.2); color: #ffc107; }
    .toast-card.success .toast-icon { background: rgba(0, 191, 165, 0.2); color: #00BFA5; }
    .toast-card.info .toast-icon { background: rgba(108, 99, 255, 0.2); color: #9c95ff; }

    .toast-body { flex: 1; min-width: 0; }
    .toast-header-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 2px; }
    .toast-title { font-size: 13px; font-weight: 700; color: #fff; }
    .toast-badge { font-size: 8px; font-weight: 700; padding: 1px 4px; border-radius: 4px; background: rgba(255, 255, 255, 0.1); color: #a0a3b1; }
    .toast-msg { font-size: 12px; color: #a0a3b1; margin: 0; line-height: 1.4; }

    .toast-close-btn { background: none; border: none; color: #6b6f82; cursor: pointer; padding: 0; }
    .toast-close-btn:hover { color: #fff; }

    @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }

    /* Logout Modal Styles */
    .logout-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      animation: fadeIn 0.2s ease-out;
    }
    .logout-modal-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      padding: 32px 28px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      text-align: center;
      animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .logout-icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: rgba(255, 107, 107, 0.12);
      border: 1px solid rgba(255, 107, 107, 0.3);
      color: #FF6B6B;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 18px auto;
    }
    .logout-icon-circle mat-icon { font-size: 32px; width: 32px; height: 32px; }
    .logout-modal-header h3 { font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; }
    .logout-modal-header p { font-size: 14px; color: #a0a3b1; margin: 0 0 24px 0; line-height: 1.5; }
    .logout-modal-actions { display: flex; gap: 12px; justify-content: center; }
    .btn-cancel {
      flex: 1;
      background: rgba(255, 255, 255, 0.08);
      color: #a0a3b1;
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-cancel:hover { background: rgba(255, 255, 255, 0.15); color: #ffffff; }
    .btn-confirm-logout {
      flex: 1;
      background: linear-gradient(135deg, #FF6B6B, #d32f2f);
      color: #ffffff;
      border: none;
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.35);
      transition: all 0.2s ease;
    }
    .btn-confirm-logout:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5); }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popIn { from { opacity: 0; transform: scale(0.9) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'buildtrack-frontend';
  showLogoutModal = false;
  unreadCount = 0;

  activeToasts: ToastMessage[] = [];

  navItems = [
    { label: 'Overview', icon: 'dashboard', link: '/dashboard', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] },
    { label: 'Notifications', icon: 'notifications', link: '/notifications', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] },
    { label: 'Projects', icon: 'business', link: '/projects', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Client'] },
    { label: 'Resources', icon: 'people', link: '/resources', roles: ['Administrator', 'Project Manager', 'Site Engineer'] },
    { label: 'Inventory', icon: 'inventory_2', link: '/inventory', roles: ['Administrator', 'Project Manager', 'Contractor'] },
    { label: 'Attendance', icon: 'assignment_turned_in', link: '/attendance', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor'] },
    { label: 'Procurement', icon: 'shopping_cart', link: '/procurement', roles: ['Administrator', 'Project Manager', 'Contractor'] },
    { label: 'Documents', icon: 'folder', link: '/documents', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] },
    { label: 'Reports & Audits', icon: 'bar_chart', link: '/reports', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor', 'Client'] }
  ];

  private sub = new Subscription();

  constructor(
    private authService: AuthService, 
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub.add(
      this.notificationService.unreadCount$.subscribe(count => {
        this.unreadCount = count;
      })
    );

    this.sub.add(
      this.notificationService.toast$.subscribe(toast => {
        this.addToast(toast);
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isLoggedIn(): boolean {
    return !!this.authService.currentUserValue;
  }

  hasAccess(allowedRoles: string[]): boolean {
    const user = this.authService.currentUserValue;
    if (!user) return false;
    const userRole = user.role?.toLowerCase() || '';
    return allowedRoles.some(r => r.toLowerCase() === userRole);
  }

  getUserName(): string {
    return this.authService.currentUserValue?.name || 'User';
  }

  getUserRole(): string {
    return this.authService.currentUserValue?.role || 'Member';
  }

  getUserInitial(): string {
    const name = this.getUserName();
    return name ? name.charAt(0).toUpperCase() : 'U';
  }

  addToast(toast: ToastMessage) {
    this.activeToasts.unshift(toast);
    const duration = toast.duration || 5000;
    setTimeout(() => {
      this.dismissToast(toast.id);
    }, duration);
  }

  dismissToast(id: string) {
    this.activeToasts = this.activeToasts.filter(t => t.id !== id);
  }

  onToastClick(toast: ToastMessage) {
    if (toast.link) {
      this.router.navigate([toast.link]);
    } else {
      this.router.navigate(['/notifications']);
    }
    this.dismissToast(toast.id);
  }

  getToastIcon(type: string): string {
    if (type === 'danger') return 'error_outline';
    if (type === 'warning') return 'warning_amber';
    if (type === 'success') return 'check_circle_outline';
    return 'info';
  }

  confirmLogout() {
    this.showLogoutModal = true;
  }

  cancelLogout() {
    this.showLogoutModal = false;
  }

  executeLogout() {
    this.showLogoutModal = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
