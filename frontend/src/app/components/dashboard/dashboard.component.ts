import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="page-header">
      <h1>Welcome back, <span class="gradient-text">{{ userName }}</span> 👋</h1>
      <p>Here's what's happening on your construction sites today.</p>
    </div>

    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card" *ngFor="let stat of stats">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value" [style.color]="stat.color">{{ stat.value }}</div>
        <div class="stat-sub" *ngIf="stat.sub">{{ stat.sub }}</div>
      </div>
    </div>

    <!-- Recent Projects -->
    <div class="section-header">
      <h2>Recent Projects</h2>
      <a routerLink="/projects" class="view-all">View all →</a>
    </div>
    <div class="table-container">
      <div class="loading-state" *ngIf="loading">Loading projects...</div>
      <table *ngIf="!loading && projects.length > 0">
        <thead>
          <tr>
            <th>Project</th>
            <th>Client</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of projects.slice(0, 5)">
            <td><strong style="color:#fff">{{ p.name }}</strong></td>
            <td>{{ p.client }}</td>
            <td>
              <span class="badge" [ngClass]="getBadgeClass(p.status)">{{ p.status }}</span>
            </td>
            <td>
              <div class="progress-wrap">
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="p.progress"></div>
                </div>
                <span>{{ p.progress }}%</span>
              </div>
            </td>
            <td>₹{{ formatCurrency(p.budget) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="empty-state" *ngIf="!loading && projects.length === 0">
        No projects found. <a routerLink="/projects">Create your first project →</a>
      </div>
    </div>
  `,
  styles: [`
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .section-header h2 { font-size: 18px; font-weight: 700; }
    .view-all { color: #9c95ff; font-size: 13px; }
    .stat-sub { color: #6b6f82; font-size: 12px; margin-top: 4px; }
    .loading-state, .empty-state { padding: 40px; text-align: center; color: #6b6f82; }
    .progress-wrap { display: flex; align-items: center; gap: 10px; }
    .progress-bar { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #6C63FF, #00BFA5); border-radius: 3px; transition: width 0.5s ease; }
    .progress-wrap span { font-size: 12px; color: #a0a3b1; width: 35px; }
  `]
})
export class DashboardComponent implements OnInit {
  projects: any[] = [];
  loading = true;
  userName = '';

  stats = [
    { label: 'Active Projects', value: '0', color: '#9c95ff', sub: '' },
    { label: 'Completed', value: '0', color: '#00BFA5', sub: '' },
    { label: 'Total Budget', value: '₹0', color: '#ffc107', sub: '' },
    { label: 'On Schedule', value: '0%', color: '#FF6B6B', sub: '' },
  ];

  constructor(private projectService: ProjectService, private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.currentUserValue;
    this.userName = user?.name || 'User';

    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data.success ? data.data : (Array.isArray(data) ? data : data.projects || []);
        this.loading = false;
        this.computeStats();
      },
      error: () => { this.loading = false; }
    });
  }

  computeStats() {
    const active = this.projects.filter(p => p.status === 'active' || p.status === 'in-progress').length;
    const completed = this.projects.filter(p => p.status === 'completed').length;
    const totalBudget = this.projects.reduce((s, p) => s + (p.budget || 0), 0);
    const onSchedule = this.projects.length ? Math.round((completed / this.projects.length) * 100) : 0;

    this.stats[0].value = String(active);
    this.stats[1].value = String(completed);
    this.stats[2].value = '₹' + this.formatCurrency(totalBudget);
    this.stats[3].value = onSchedule + '%';
  }

  getBadgeClass(status: string): string {
    const map: Record<string, string> = {
      'active': 'badge-info',
      'in-progress': 'badge-info',
      'completed': 'badge-success',
      'on-hold': 'badge-warning',
      'cancelled': 'badge-danger',
    };
    return map[status?.toLowerCase()] || 'badge-info';
  }

  formatCurrency(val: number): string {
    if (!val) return '0';
    if (val >= 10000000) return (val / 10000000).toFixed(1) + 'Cr';
    if (val >= 100000) return (val / 100000).toFixed(1) + 'L';
    return val.toLocaleString();
  }
}
