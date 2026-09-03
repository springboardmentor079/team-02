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
      width: 250px;
      background: linear-gradient(180deg, #121420 0%, #1a1d2e 100%);
      border-right: 1px solid rgba(255,255,255,0.05);
      display: flex;
      flex-direction: column;
      padding: 0;
      box-shadow: 4px 0 24px rgba(0,0,0,0.2);
      opacity: 0;
      animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeSlideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .sidenav-logo {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 28px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      transition: opacity 0.5s ease;
      opacity: 0;
      animation: fadeInLogo 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    }

    @keyframes fadeInLogo {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .logo-icon { 
      font-size: 30px; 
      filter: drop-shadow(0 2px 8px rgba(0, 191, 165, 0.4));
    }
    .logo-text {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, #a6a1ff, #00d4b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.95;
    }
    .sidenav-nav {
      flex: 1;
      padding: 20px 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    @keyframes navItemStagger {
      from {
        opacity: 0;
        transform: translateX(-15px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 18px;
      border-radius: 12px;
      color: #8a8d9e;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      /* Ultra-smooth transition for all properties */
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid transparent;
      opacity: 0;
      animation: navItemStagger 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* Stagger delays for navigation links to create a cascading effect */
    .nav-link:nth-child(1) { animation-delay: 0.20s; }
    .nav-link:nth-child(2) { animation-delay: 0.25s; }
    .nav-link:nth-child(3) { animation-delay: 0.30s; }
    .nav-link:nth-child(4) { animation-delay: 0.35s; }
    .nav-link:nth-child(5) { animation-delay: 0.40s; }
    .nav-link:nth-child(6) { animation-delay: 0.45s; }
    .nav-link:nth-child(7) { animation-delay: 0.50s; }
    .nav-link:nth-child(8) { animation-delay: 0.55s; }
    .nav-link:nth-child(9) { animation-delay: 0.60s; }
    .nav-link:nth-child(10) { animation-delay: 0.65s; }
    .link-label { 
      flex: 1; 
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease;
    }
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.03);
      color: #e2e4ec;
      border-color: rgba(255, 255, 255, 0.05);
      transform: translateX(4px);
    }
    .nav-link:hover .link-label {
      transform: translateX(2px);
    }
    .nav-link.active {
      background: linear-gradient(90deg, rgba(108,99,255,0.15) 0%, rgba(108,99,255,0.05) 100%);
      color: #fff;
      border-color: rgba(108,99,255,0.2);
      box-shadow: inset 3px 0 0 #9c95ff, 0 4px 12px rgba(0,0,0,0.1);
    }
    .nav-link mat-icon { 
      font-size: 22px; 
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0.8;
    }
    .nav-link:hover mat-icon {
      opacity: 1;
      transform: scale(1.05);
      color: #a6a1ff;
    }
    .nav-link.active mat-icon {
      opacity: 1;
      color: #9c95ff;
      filter: drop-shadow(0 0 6px rgba(156,149,255,0.4));
    }
    .nav-badge {
      background: linear-gradient(135deg, #FF6B6B, #ff4949);
      color: #fff;
      font-size: 11px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(255, 107, 107, 0.4);
      transition: transform 0.3s ease;
    }
    .nav-link:hover .nav-badge {
      transform: scale(1.1);
    }

    .sidenav-footer {
      padding: 20px 24px;
      border-top: 1px solid rgba(255,255,255,0.04);
    }
    .btn-outline {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #a0a3b1;
    }
    .btn-outline:hover {
      background: rgba(255, 107, 107, 0.1);
      border-color: rgba(255, 107, 107, 0.3);
      color: #FF6B6B;
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
      opacity: 0;
      animation: topBarSlideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    }
    
    @keyframes topBarSlideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
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
      opacity: 0;
      animation: contentFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    }

    @keyframes contentFadeUp {
      from { opacity: 0; transform: translateY(30px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
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
    { label: 'Inventory', icon: 'inventory_2', link: '/inventory', roles: ['Administrator', 'Project Manager', 'Contractor', 'Site Engineer'] },
    { label: 'Attendance', icon: 'assignment_turned_in', link: '/attendance', roles: ['Administrator', 'Project Manager', 'Site Engineer', 'Contractor'] },
    { label: 'Procurement', icon: 'shopping_cart', link: '/procurement', roles: ['Administrator', 'Project Manager', 'Contractor', 'Site Engineer'] },
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
