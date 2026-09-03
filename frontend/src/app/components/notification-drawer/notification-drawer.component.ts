import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService, NotificationItem } from '../../services/notification.service';

@Component({
  selector: 'app-notification-drawer',
  template: `
    <div class="notification-wrapper">
      <!-- Bell Button Trigger -->
      <button class="bell-btn" (click)="toggleDrawer()" [class.active]="isOpen">
        <mat-icon>notifications</mat-icon>
        <span class="badge" *ngIf="unreadCount > 0">{{ unreadCount > 99 ? '99+' : unreadCount }}</span>
      </button>

      <!-- Drawer Overlay Dropdown -->
      <div class="drawer-panel" *ngIf="isOpen">
        <div class="drawer-header">
          <div class="header-title">
            <mat-icon style="color:#9c95ff;">notifications_active</mat-icon>
            <h3>Notifications</h3>
            <span class="unread-pill" *ngIf="unreadCount > 0">{{ unreadCount }} new</span>
          </div>
          <div class="header-actions">
            <button class="icon-small-btn" (click)="toggleSound()" [title]="soundEnabled ? 'Mute sound' : 'Enable sound'">
              <mat-icon style="font-size:16px; width:16px; height:16px;">
                {{ soundEnabled ? 'volume_up' : 'volume_off' }}
              </mat-icon>
            </button>
            <button class="text-btn" (click)="markAllRead()" *ngIf="unreadCount > 0" title="Mark all as read">
              Mark read
            </button>
            <button class="icon-close-btn" (click)="toggleDrawer()">
              <mat-icon>close</mat-icon>
            </button>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="drawer-tabs">
          <button [class.active]="activeTab === 'all'" (click)="activeTab = 'all'">
            All ({{ notifications.length }})
          </button>
          <button [class.active]="activeTab === 'unread'" (click)="activeTab = 'unread'">
            Unread ({{ unreadCount }})
          </button>
          <button [class.active]="activeTab === 'urgent'" (click)="activeTab = 'urgent'">
            Urgent ({{ getUrgentCount() }})
          </button>
        </div>

        <!-- Notification List -->
        <div class="drawer-body">
          <div class="empty-state" *ngIf="filteredNotifications.length === 0">
            <mat-icon style="font-size:40px; width:40px; height:40px; color:#4a4d64;">notifications_off</mat-icon>
            <p>No notifications found in this view.</p>
          </div>

          <div 
            class="notification-item" 
            *ngFor="let item of filteredNotifications"
            [class.unread]="!item.read"
            [class.urgent]="item.priority === 'urgent'"
            (click)="onNotificationClick(item)"
          >
            <div class="item-icon" [ngClass]="item.type">
              <mat-icon>{{ getIcon(item.category, item.type) }}</mat-icon>
            </div>
            <div class="item-content">
              <div class="item-title-row">
                <span class="item-title">{{ item.title }}</span>
                <span class="item-time">{{ formatTime(item.createdAt) }}</span>
              </div>
              <p class="item-msg">{{ item.message }}</p>
              <div class="item-footer">
                <div class="tags-row">
                  <span class="category-tag">{{ item.category | uppercase }}</span>
                  <span class="prio-tag" [ngClass]="item.priority || 'medium'">
                    {{ item.priority || 'medium' }}
                  </span>
                </div>
                <button class="mark-btn" *ngIf="!item.read" (click)="$event.stopPropagation(); markAsRead(item._id)">
                  Mark read
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Drawer Footer -->
        <div class="drawer-footer" (click)="openNotificationCenter()">
          <span>View All in Notification Center</span>
          <mat-icon style="font-size:16px; width:16px; height:16px;">arrow_forward</mat-icon>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .notification-wrapper {
      position: relative;
      display: inline-block;
    }
    .bell-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #a0a3b1;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
    }
    .bell-btn:hover, .bell-btn.active {
      background: rgba(108, 99, 255, 0.15);
      color: #9c95ff;
      border-color: rgba(108, 99, 255, 0.4);
    }
    .badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #FF6B6B;
      color: white;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 10px;
      border: 2px solid #1a1d2e;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    .drawer-panel {
      position: absolute;
      top: 52px;
      right: 0;
      width: 390px;
      max-height: 540px;
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255,255,255,0.02);
    }
    .header-title {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-title h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
    .unread-pill {
      background: rgba(108, 99, 255, 0.2);
      color: #9c95ff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 12px;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .icon-small-btn {
      background: rgba(255, 255, 255, 0.05);
      border: none;
      color: #a0a3b1;
      border-radius: 6px;
      padding: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .icon-small-btn:hover { color: #fff; background: rgba(255, 255, 255, 0.1); }

    .text-btn {
      background: none;
      border: none;
      color: #9c95ff;
      font-size: 12px;
      cursor: pointer;
      font-weight: 500;
    }
    .text-btn:hover { text-decoration: underline; }
    .icon-close-btn {
      background: none;
      border: none;
      color: #a0a3b1;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 2px;
    }
    .icon-close-btn:hover { color: #fff; }

    .drawer-tabs {
      display: flex;
      padding: 8px 16px;
      gap: 8px;
      background: rgba(0,0,0,0.15);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .drawer-tabs button {
      flex: 1;
      background: none;
      border: none;
      color: #a0a3b1;
      padding: 6px 10px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .drawer-tabs button.active {
      background: rgba(108, 99, 255, 0.2);
      color: #fff;
    }

    .drawer-body {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }
    .empty-state {
      padding: 40px 20px;
      text-align: center;
      color: #6b6f82;
    }
    .empty-state p { margin-top: 8px; font-size: 13px; }

    .notification-item {
      display: flex;
      gap: 12px;
      padding: 12px;
      border-radius: 12px;
      margin-bottom: 8px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.04);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .notification-item:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateX(2px);
    }
    .notification-item.unread {
      background: rgba(108, 99, 255, 0.08);
      border-color: rgba(108, 99, 255, 0.2);
    }
    .notification-item.urgent {
      border-color: rgba(255, 107, 107, 0.4);
    }

    .item-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .item-icon.info { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }
    .item-icon.warning { background: rgba(255, 193, 7, 0.15); color: #ffc107; }
    .item-icon.danger { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }
    .item-icon.success { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }

    .item-content { flex: 1; min-width: 0; }
    .item-title-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .item-title {
      font-size: 13px;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-time {
      font-size: 10px;
      color: #6b6f82;
    }
    .item-msg {
      font-size: 12px;
      color: #a0a3b1;
      margin: 0 0 8px 0;
      line-height: 1.4;
    }
    .item-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tags-row { display: flex; align-items: center; gap: 6px; }
    .category-tag {
      font-size: 9px;
      font-weight: 700;
      color: #6b6f82;
      letter-spacing: 0.5px;
    }
    .prio-tag {
      font-size: 8px;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    .prio-tag.urgent { background: rgba(255, 107, 107, 0.2); color: #FF6B6B; }
    .prio-tag.high { background: rgba(255, 193, 7, 0.2); color: #ffc107; }
    .prio-tag.medium { background: rgba(33, 150, 243, 0.2); color: #2196F3; }
    .prio-tag.low { background: rgba(0, 191, 165, 0.2); color: #00BFA5; }

    .mark-btn {
      background: none;
      border: none;
      color: #9c95ff;
      font-size: 11px;
      cursor: pointer;
      padding: 0;
    }
    .mark-btn:hover { text-decoration: underline; }

    .drawer-footer {
      padding: 12px;
      background: rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      text-align: center;
      color: #9c95ff;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .drawer-footer:hover { background: rgba(108, 99, 255, 0.15); color: #fff; }
  `]
})
export class NotificationDrawerComponent implements OnInit, OnDestroy {
  isOpen = false;
  activeTab: 'all' | 'unread' | 'urgent' = 'all';

  notifications: NotificationItem[] = [];
  unreadCount = 0;
  soundEnabled = true;

  private sub: Subscription = new Subscription();

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.soundEnabled = this.notificationService.soundEnabled;

    this.sub.add(
      this.notificationService.notifications$.subscribe(data => {
        this.notifications = data;
      })
    );

    this.sub.add(
      this.notificationService.unreadCount$.subscribe(count => {
        this.unreadCount = count;
      })
    );

    this.notificationService.fetchNotifications().subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.notificationService.fetchNotifications().subscribe();
    }
  }

  toggleSound() {
    this.soundEnabled = this.notificationService.toggleSound();
  }

  get filteredNotifications(): NotificationItem[] {
    if (this.activeTab === 'unread') {
      return this.notifications.filter(n => !n.read);
    }
    if (this.activeTab === 'urgent') {
      return this.notifications.filter(n => n.priority === 'urgent' || n.priority === 'high' || n.type === 'danger');
    }
    return this.notifications;
  }

  getUrgentCount(): number {
    return this.notifications.filter(n => n.priority === 'urgent' || n.priority === 'high' || n.type === 'danger').length;
  }

  markAsRead(id: string) {
    this.notificationService.markAsRead(id).subscribe();
  }

  markAllRead() {
    this.notificationService.markAllAsRead().subscribe();
  }

  onNotificationClick(item: NotificationItem) {
    if (!item.read) {
      this.markAsRead(item._id);
    }
    this.isOpen = false;
    if (item.link) {
      this.router.navigate([item.link]);
    }
  }

  openNotificationCenter() {
    this.isOpen = false;
    this.router.navigate(['/notifications']);
  }

  getIcon(category: string, type: string): string {
    if (type === 'danger') return 'error_outline';
    if (category === 'inventory') return 'inventory_2';
    if (category === 'procurement') return 'shopping_cart';
    if (category === 'milestone') return 'flag';
    if (category === 'system') return 'settings_suggest';
    return 'info';
  }

  formatTime(dateStr: string | Date): string {
    if (!dateStr) return 'Just now';
    const date = new Date(dateStr);
    const diffMins = Math.floor((Date.now() - date.getTime()) / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  }
}
