import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService, NotificationItem, NotificationStats } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-notifications',
  template: `
    <div class="notifications-page">
      <!-- Top Banner Header -->
      <div class="header-card">
        <div class="header-main">
          <div class="header-title-box">
            <div class="bell-glow-icon">
              <mat-icon>notifications_active</mat-icon>
            </div>
            <div>
              <h2>BuildTrack Notification Center</h2>
              <p>Monitor real-time system alerts, inventory warnings, purchase approvals, and site announcements.</p>
            </div>
          </div>
          <div class="header-actions">
            <button class="btn btn-secondary" (click)="toggleSound()" [title]="soundEnabled ? 'Mute Audio Alerts' : 'Enable Audio Alerts'">
              <mat-icon>{{ soundEnabled ? 'volume_up' : 'volume_off' }}</mat-icon>
              <span>{{ soundEnabled ? 'Sound On' : 'Muted' }}</span>
            </button>
            <button class="btn btn-warning" (click)="runSystemCheck()" [disabled]="isAuditing">
              <mat-icon [class.spinning]="isAuditing">published_with_changes</mat-icon>
              <span>{{ isAuditing ? 'Scanning...' : 'Run System Audit' }}</span>
            </button>
            <button class="btn btn-primary" (click)="openBroadcastModal()" *ngIf="isManagerOrAdmin()">
              <mat-icon>campaign</mat-icon>
              <span>Send Broadcast</span>
            </button>
          </div>
        </div>

        <!-- KPI Metrics Grid -->
        <div class="kpi-grid">
          <div class="kpi-card" (click)="filterByStatus('all')" [class.active-kpi]="activeReadFilter === 'all' && activeCategory === 'all'">
            <div class="kpi-icon icon-total">
              <mat-icon>notifications</mat-icon>
            </div>
            <div class="kpi-data">
              <span class="kpi-value">{{ stats?.total || notifications.length }}</span>
              <span class="kpi-label">Total Logs</span>
            </div>
          </div>

          <div class="kpi-card" (click)="filterByStatus('unread')" [class.active-kpi]="activeReadFilter === 'false'">
            <div class="kpi-icon icon-unread">
              <mat-icon>mark_email_unread</mat-icon>
            </div>
            <div class="kpi-data">
              <span class="kpi-value">{{ stats?.unread || getUnreadCount() }}</span>
              <span class="kpi-label">Unread Items</span>
            </div>
          </div>

          <div class="kpi-card" (click)="filterByPriority('urgent')" [class.active-kpi]="activePriority === 'urgent'">
            <div class="kpi-icon icon-urgent">
              <mat-icon>error</mat-icon>
            </div>
            <div class="kpi-data">
              <span class="kpi-value">{{ stats?.urgent || getUrgentCount() }}</span>
              <span class="kpi-label">Urgent Severity</span>
            </div>
          </div>

          <div class="kpi-card" (click)="filterByCategory('inventory')" [class.active-kpi]="activeCategory === 'inventory'">
            <div class="kpi-icon icon-inventory">
              <mat-icon>inventory_2</mat-icon>
            </div>
            <div class="kpi-data">
              <span class="kpi-value">{{ stats?.inventory || getCategoryCount('inventory') }}</span>
              <span class="kpi-label">Inventory Alerts</span>
            </div>
          </div>

          <div class="kpi-card" (click)="filterByCategory('procurement')" [class.active-kpi]="activeCategory === 'procurement'">
            <div class="kpi-icon icon-procurement">
              <mat-icon>shopping_cart</mat-icon>
            </div>
            <div class="kpi-data">
              <span class="kpi-value">{{ stats?.procurement || getCategoryCount('procurement') }}</span>
              <span class="kpi-label">Procurement POs</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls & Filter Toolbar -->
      <div class="toolbar-card">
        <div class="search-box">
          <mat-icon>search</mat-icon>
          <input 
            type="text" 
            placeholder="Search notifications by title, message or keyword..." 
            [(ngModel)]="searchQuery"
            (ngModelChange)="applyFilters()"
          />
          <button class="clear-search-btn" *ngIf="searchQuery" (click)="searchQuery = ''; applyFilters()">
            <mat-icon>close</mat-icon>
          </button>
        </div>

        <div class="filter-controls">
          <!-- Category Selector -->
          <div class="select-wrapper">
            <span class="select-label">Category:</span>
            <select [(ngModel)]="activeCategory" (change)="applyFilters()">
              <option value="all">All Categories</option>
              <option value="inventory">Inventory</option>
              <option value="procurement">Procurement</option>
              <option value="milestone">Milestones</option>
              <option value="system">System</option>
              <option value="general">General</option>
            </select>
          </div>

          <!-- Priority Selector -->
          <div class="select-wrapper">
            <span class="select-label">Priority:</span>
            <select [(ngModel)]="activePriority" (change)="applyFilters()">
              <option value="all">All Priorities</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <!-- Status Selector -->
          <div class="select-wrapper">
            <span class="select-label">Status:</span>
            <select [(ngModel)]="activeReadFilter" (change)="applyFilters()">
              <option value="all">All Status</option>
              <option value="false">Unread Only</option>
              <option value="true">Read Only</option>
            </select>
          </div>

          <!-- Action Quick Buttons -->
          <button class="btn btn-outline" (click)="markAllRead()" title="Mark all items read">
            <mat-icon>done_all</mat-icon>
            <span>Mark All Read</span>
          </button>
          <button class="btn btn-danger-outline" (click)="clearReadLogs()" title="Remove read items">
            <mat-icon>cleaning_services</mat-icon>
            <span>Clear Read Logs</span>
          </button>
        </div>
      </div>

      <!-- Notifications List Container -->
      <div class="list-container">
        <div class="list-header">
          <h3>
            Showing {{ filteredNotifications.length }} Notification{{ filteredNotifications.length === 1 ? '' : 's' }}
          </h3>
          <span class="sub-text">Updates sort chronologically by timestamp.</span>
        </div>

        <!-- Empty State -->
        <div class="empty-card" *ngIf="filteredNotifications.length === 0">
          <div class="empty-icon-circle">
            <mat-icon>notifications_off</mat-icon>
          </div>
          <h4>No Notifications Found</h4>
          <p>No alerts match your current search criteria or category filter. Try clearing filters or running a system audit.</p>
          <button class="btn btn-primary" (click)="resetFilters()">Reset All Filters</button>
        </div>

        <!-- Notification Item Card -->
        <div 
          class="notification-card" 
          *ngFor="let item of filteredNotifications"
          [class.unread-card]="!item.read"
          [class.urgent-card]="item.priority === 'urgent'"
          (click)="onCardClick(item)"
        >
          <div class="card-left-badge" [ngClass]="item.priority || 'medium'"></div>
          
          <div class="card-icon" [ngClass]="item.type || 'info'">
            <mat-icon>{{ getCategoryIcon(item.category, item.type) }}</mat-icon>
          </div>

          <div class="card-content">
            <div class="card-top-row">
              <div class="title-wrap">
                <span class="card-title">{{ item.title }}</span>
                <span class="unread-dot" *ngIf="!item.read" title="Unread notification"></span>
              </div>
              <span class="card-time">{{ formatTime(item.createdAt) }}</span>
            </div>

            <p class="card-message">{{ item.message }}</p>

            <div class="card-footer">
              <div class="meta-tags">
                <span class="tag tag-category">{{ item.category | uppercase }}</span>
                <span class="tag" [ngClass]="'tag-priority-' + (item.priority || 'medium')">
                  {{ (item.priority || 'medium') | uppercase }}
                </span>
                <span class="tag tag-role" *ngIf="item.recipientRole && item.recipientRole !== 'all'">
                  <mat-icon style="font-size:12px; width:12px; height:12px;">person</mat-icon>
                  {{ item.recipientRole }}
                </span>
                <span class="tag tag-channel" *ngIf="item.channel && item.channel !== 'in_app'">
                  <mat-icon style="font-size:12px; width:12px; height:12px;">send</mat-icon>
                  {{ item.channel | uppercase }}
                </span>
              </div>

              <div class="card-actions" (click)="$event.stopPropagation()">
                <button class="action-btn link-btn" *ngIf="item.link" (click)="navigateTo(item.link)">
                  <mat-icon>open_in_new</mat-icon>
                  <span>View Details</span>
                </button>
                <button class="action-btn read-btn" *ngIf="!item.read" (click)="markRead(item._id)">
                  <mat-icon>check_circle</mat-icon>
                  <span>Mark Read</span>
                </button>
                <button class="action-btn delete-btn" (click)="deleteItem(item._id)">
                  <mat-icon>delete_outline</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Broadcast Modal Composer -->
      <div class="modal-overlay" *ngIf="showBroadcastModal" (click)="closeBroadcastModal()">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <div class="modal-title-row">
              <mat-icon style="color:#9c95ff;">campaign</mat-icon>
              <h3>Broadcast Site Announcement</h3>
            </div>
            <button class="close-icon-btn" (click)="closeBroadcastModal()">
              <mat-icon>close</mat-icon>
            </button>
          </div>

          <form (ngSubmit)="sendBroadcast()" class="modal-form">
            <div class="form-group">
              <label>Notification Title <span class="required">*</span></label>
              <input type="text" [(ngModel)]="broadcastForm.title" name="title" placeholder="e.g. Weather Alert: Heavy Rainfall Expected on Site B" required />
            </div>

            <div class="form-group">
              <label>Message Details <span class="required">*</span></label>
              <textarea rows="3" [(ngModel)]="broadcastForm.message" name="message" placeholder="Provide clear instructions for site teams..." required></textarea>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Category</label>
                <select [(ngModel)]="broadcastForm.category" name="category">
                  <option value="general">General Announcement</option>
                  <option value="inventory">Inventory & Materials</option>
                  <option value="procurement">Procurement & PO</option>
                  <option value="milestone">Milestones & Schedule</option>
                  <option value="system">System & Equipment</option>
                </select>
              </div>

              <div class="form-group">
                <label>Priority Level</label>
                <select [(ngModel)]="broadcastForm.priority" name="priority">
                  <option value="urgent">Urgent (Critical Red Alert)</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Target Audience Role</label>
                <select [(ngModel)]="broadcastForm.recipientRole" name="recipientRole">
                  <option value="all">All Roles & Staff</option>
                  <option value="administrator">Administrators</option>
                  <option value="project manager">Project Managers</option>
                  <option value="site engineer">Site Engineers</option>
                  <option value="contractor">Contractors</option>
                  <option value="client">Clients</option>
                </select>
              </div>

              <div class="form-group">
                <label>Dispatch Channels</label>
                <select [(ngModel)]="broadcastForm.channel" name="channel">
                  <option value="in_app">In-App Notification Drawer</option>
                  <option value="email">Email Notification</option>
                  <option value="sms">SMS Text Alert</option>
                  <option value="all">All Channels (In-App + Email + SMS)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>Target Page Link (Optional)</label>
              <input type="text" [(ngModel)]="broadcastForm.link" name="link" placeholder="e.g. /projects or /inventory" />
            </div>

            <div class="modal-actions">
              <button type="button" class="btn btn-outline" (click)="closeBroadcastModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="isSubmitting">
                <mat-icon>send</mat-icon>
                <span>{{ isSubmitting ? 'Dispatching...' : 'Dispatch Broadcast' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .notifications-page {
      display: flex;
      flex-direction: column;
      gap: 24px;
      color: #ffffff;
    }

    /* Top Header Card */
    .header-card {
      background: linear-gradient(135deg, rgba(26, 29, 46, 0.95), rgba(15, 17, 23, 0.95));
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 28px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
    .header-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      gap: 20px;
      flex-wrap: wrap;
    }
    .header-title-box {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .bell-glow-icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(108, 99, 255, 0.25), rgba(0, 191, 165, 0.25));
      border: 1px solid rgba(108, 99, 255, 0.4);
      color: #9c95ff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
    }
    .bell-glow-icon mat-icon { font-size: 30px; width: 30px; height: 30px; }
    .header-title-box h2 { font-size: 24px; font-weight: 700; margin: 0 0 4px 0; color: #fff; }
    .header-title-box p { font-size: 13px; color: #a0a3b1; margin: 0; }
    .header-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }

    /* KPI Grid */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }
    .kpi-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 14px;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .kpi-card:hover {
      background: rgba(255, 255, 255, 0.06);
      transform: translateY(-2px);
    }
    .kpi-card.active-kpi {
      border-color: #9c95ff;
      background: rgba(108, 99, 255, 0.15);
      box-shadow: 0 0 15px rgba(108, 99, 255, 0.2);
    }
    .kpi-icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .icon-total { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }
    .icon-unread { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }
    .icon-urgent { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }
    .icon-inventory { background: rgba(255, 193, 7, 0.15); color: #ffc107; }
    .icon-procurement { background: rgba(33, 150, 243, 0.15); color: #2196F3; }

    .kpi-data { display: flex; flex-direction: column; }
    .kpi-value { font-size: 20px; font-weight: 700; color: #fff; }
    .kpi-label { font-size: 11px; color: #a0a3b1; font-weight: 500; }

    /* Toolbar Card */
    .toolbar-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 18px 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .search-box {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 8px 14px;
      flex: 1;
      min-width: 260px;
    }
    .search-box mat-icon { color: #6b6f82; }
    .search-box input {
      background: none;
      border: none;
      color: #fff;
      font-size: 13px;
      outline: none;
      width: 100%;
    }
    .clear-search-btn {
      background: none;
      border: none;
      color: #a0a3b1;
      cursor: pointer;
      display: flex;
    }

    .filter-controls {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .select-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 6px 12px;
      border-radius: 10px;
    }
    .select-label { font-size: 12px; color: #a0a3b1; font-weight: 500; }
    .select-wrapper select {
      background: none;
      border: none;
      color: #fff;
      font-size: 12px;
      outline: none;
      cursor: pointer;
    }
    .select-wrapper select option { background: #1a1d2e; color: #fff; }

    /* Button Styles */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
    }
    .btn mat-icon { font-size: 18px; width: 18px; height: 18px; }
    .btn-primary {
      background: linear-gradient(135deg, #6C63FF, #5a52e0);
      color: #fff;
      box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
    }
    .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(108, 99, 255, 0.45); }
    .btn-secondary { background: rgba(255, 255, 255, 0.08); color: #fff; }
    .btn-secondary:hover { background: rgba(255, 255, 255, 0.14); }
    .btn-warning { background: rgba(255, 193, 7, 0.15); color: #ffc107; border: 1px solid rgba(255, 193, 7, 0.3); }
    .btn-warning:hover { background: rgba(255, 193, 7, 0.25); }
    .btn-outline { background: none; border: 1px solid rgba(255, 255, 255, 0.12); color: #a0a3b1; }
    .btn-outline:hover { background: rgba(255, 255, 255, 0.06); color: #fff; }
    .btn-danger-outline { background: none; border: 1px solid rgba(255, 107, 107, 0.3); color: #FF6B6B; }
    .btn-danger-outline:hover { background: rgba(255, 107, 107, 0.12); }

    .spinning { animation: spin 1s linear infinite; }
    @keyframes spin { 100% { transform: rotate(360deg); } }

    /* Notifications List Container */
    .list-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 0 4px;
    }
    .list-header h3 { font-size: 16px; font-weight: 700; margin: 0; color: #fff; }
    .sub-text { font-size: 12px; color: #6b6f82; }

    /* Empty Card */
    .empty-card {
      background: #1a1d2e;
      border: 1px dashed rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 48px 24px;
      text-align: center;
      color: #a0a3b1;
    }
    .empty-icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.04);
      color: #6b6f82;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px auto;
    }
    .empty-icon-circle mat-icon { font-size: 32px; width: 32px; height: 32px; }
    .empty-card h4 { font-size: 18px; color: #fff; margin: 0 0 8px 0; }
    .empty-card p { font-size: 13px; margin: 0 0 20px 0; max-width: 420px; margin-left: auto; margin-right: auto; }

    /* Notification Card */
    .notification-card {
      position: relative;
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 16px;
      padding: 18px 20px 18px 24px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
    }
    .notification-card:hover {
      background: rgba(255, 255, 255, 0.03);
      transform: translateX(4px);
      border-color: rgba(255, 255, 255, 0.15);
    }
    .notification-card.unread-card {
      background: linear-gradient(90deg, rgba(108, 99, 255, 0.08), rgba(26, 29, 46, 0.95));
      border-color: rgba(108, 99, 255, 0.25);
    }
    .notification-card.urgent-card {
      border-color: rgba(255, 107, 107, 0.4);
      box-shadow: 0 0 15px rgba(255, 107, 107, 0.08);
    }

    .card-left-badge {
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
    }
    .card-left-badge.urgent { background: #FF6B6B; box-shadow: 0 0 10px #FF6B6B; }
    .card-left-badge.high { background: #ffc107; }
    .card-left-badge.medium { background: #2196F3; }
    .card-left-badge.low { background: #00BFA5; }

    .card-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .card-icon.info { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }
    .card-icon.warning { background: rgba(255, 193, 7, 0.15); color: #ffc107; }
    .card-icon.danger { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }
    .card-icon.success { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }

    .card-content { flex: 1; min-width: 0; }
    .card-top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .title-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .card-title {
      font-size: 15px;
      font-weight: 700;
      color: #fff;
    }
    .unread-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #9c95ff;
      box-shadow: 0 0 8px #9c95ff;
    }
    .card-time { font-size: 11px; color: #6b6f82; font-weight: 500; }
    .card-message {
      font-size: 13px;
      color: #a0a3b1;
      margin: 0 0 12px 0;
      line-height: 1.5;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .meta-tags {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .tag {
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 6px;
      letter-spacing: 0.5px;
    }
    .tag-category { background: rgba(255, 255, 255, 0.06); color: #a0a3b1; }
    .tag-priority-urgent { background: rgba(255, 107, 107, 0.2); color: #FF6B6B; border: 1px solid rgba(255, 107, 107, 0.3); }
    .tag-priority-high { background: rgba(255, 193, 7, 0.2); color: #ffc107; }
    .tag-priority-medium { background: rgba(33, 150, 243, 0.2); color: #2196F3; }
    .tag-priority-low { background: rgba(0, 191, 165, 0.2); color: #00BFA5; }
    .tag-role { background: rgba(108, 99, 255, 0.15); color: #9c95ff; display: inline-flex; align-items: center; gap: 4px; }
    .tag-channel { background: rgba(255, 255, 255, 0.08); color: #fff; display: inline-flex; align-items: center; gap: 4px; }

    .card-actions { display: flex; align-items: center; gap: 8px; }
    .action-btn {
      background: none;
      border: none;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: 6px;
      transition: all 0.2s;
    }
    .action-btn mat-icon { font-size: 15px; width: 15px; height: 15px; }
    .link-btn { color: #9c95ff; background: rgba(108, 99, 255, 0.1); }
    .link-btn:hover { background: rgba(108, 99, 255, 0.2); }
    .read-btn { color: #00BFA5; background: rgba(0, 191, 165, 0.1); }
    .read-btn:hover { background: rgba(0, 191, 165, 0.2); }
    .delete-btn { color: #6b6f82; padding: 4px; }
    .delete-btn:hover { color: #FF6B6B; background: rgba(255, 107, 107, 0.1); }

    /* Broadcast Modal */
    .modal-overlay {
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
      animation: fadeIn 0.2s ease;
    }
    .modal-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      width: 90%;
      max-width: 580px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.02);
    }
    .modal-title-row { display: flex; align-items: center; gap: 10px; }
    .modal-title-row h3 { margin: 0; font-size: 18px; font-weight: 700; color: #fff; }
    .close-icon-btn { background: none; border: none; color: #a0a3b1; cursor: pointer; }
    .close-icon-btn:hover { color: #fff; }

    .modal-form { padding: 24px; display: flex; flex-direction: column; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 12px; font-weight: 600; color: #a0a3b1; }
    .required { color: #FF6B6B; }
    .form-group input, .form-group textarea, .form-group select {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 10px 14px;
      color: #fff;
      font-size: 13px;
      outline: none;
      font-family: inherit;
    }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
      border-color: #9c95ff;
      background: rgba(108, 99, 255, 0.05);
    }
    .form-group select option { background: #1a1d2e; color: #fff; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 8px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: NotificationItem[] = [];
  stats: NotificationStats | null = null;

  searchQuery = '';
  activeCategory = 'all';
  activePriority = 'all';
  activeReadFilter = 'all';

  isAuditing = false;
  soundEnabled = true;

  showBroadcastModal = false;
  isSubmitting = false;
  broadcastForm = {
    title: '',
    message: '',
    type: 'info' as 'info' | 'warning' | 'danger' | 'success',
    priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
    category: 'general' as 'inventory' | 'procurement' | 'milestone' | 'system' | 'general',
    recipientRole: 'all',
    channel: 'in_app',
    link: ''
  };

  private sub = new Subscription();

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
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
      this.notificationService.stats$.subscribe(s => {
        this.stats = s;
      })
    );

    this.loadData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadData() {
    this.applyFilters();
  }

  applyFilters() {
    const filters: any = {};
    if (this.searchQuery) filters.search = this.searchQuery;
    if (this.activeCategory !== 'all') filters.category = this.activeCategory;
    if (this.activePriority !== 'all') filters.priority = this.activePriority;
    if (this.activeReadFilter !== 'all') filters.read = this.activeReadFilter;

    this.notificationService.fetchNotifications(filters).subscribe();
  }

  resetFilters() {
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.activePriority = 'all';
    this.activeReadFilter = 'all';
    this.applyFilters();
  }

  filterByCategory(cat: string) {
    this.activeCategory = this.activeCategory === cat ? 'all' : cat;
    this.applyFilters();
  }

  filterByPriority(prio: string) {
    this.activePriority = this.activePriority === prio ? 'all' : prio;
    this.applyFilters();
  }

  filterByStatus(readStatus: string) {
    this.activeReadFilter = this.activeReadFilter === readStatus ? 'all' : readStatus;
    this.applyFilters();
  }

  get filteredNotifications(): NotificationItem[] {
    return this.notifications;
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  getUrgentCount(): number {
    return this.notifications.filter(n => n.priority === 'urgent').length;
  }

  getCategoryCount(cat: string): number {
    return this.notifications.filter(n => n.category === cat).length;
  }

  toggleSound() {
    this.soundEnabled = this.notificationService.toggleSound();
  }

  runSystemCheck() {
    this.isAuditing = true;
    this.notificationService.triggerSystemCheck().subscribe({
      next: () => {
        this.isAuditing = false;
      },
      error: () => {
        this.isAuditing = false;
      }
    });
  }

  markRead(id: string) {
    this.notificationService.markAsRead(id).subscribe();
  }

  markAllRead() {
    this.notificationService.markAllAsRead().subscribe();
  }

  clearReadLogs() {
    this.notificationService.clearAllRead().subscribe();
  }

  deleteItem(id: string) {
    this.notificationService.deleteNotification(id).subscribe();
  }

  onCardClick(item: NotificationItem) {
    if (!item.read) {
      this.markRead(item._id);
    }
    if (item.link) {
      this.navigateTo(item.link);
    }
  }

  navigateTo(link: string) {
    if (link) {
      this.router.navigate([link]);
    }
  }

  isManagerOrAdmin(): boolean {
    const role = (this.authService.currentUserValue?.role || '').toLowerCase();
    return role === 'administrator' || role === 'project manager' || role === 'admin';
  }

  openBroadcastModal() {
    this.showBroadcastModal = true;
  }

  closeBroadcastModal() {
    this.showBroadcastModal = false;
  }

  sendBroadcast() {
    if (!this.broadcastForm.title || !this.broadcastForm.message) return;

    this.isSubmitting = true;
    this.notificationService.broadcastNotification(this.broadcastForm).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.closeBroadcastModal();
        this.broadcastForm = {
          title: '',
          message: '',
          type: 'info',
          priority: 'medium',
          category: 'general',
          recipientRole: 'all',
          channel: 'in_app',
          link: ''
        };
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  getCategoryIcon(category: string, type: string): string {
    if (type === 'danger') return 'error_outline';
    if (category === 'inventory') return 'inventory_2';
    if (category === 'procurement') return 'shopping_cart';
    if (category === 'milestone') return 'flag';
    if (category === 'system') return 'settings_suggest';
    return 'campaign';
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
