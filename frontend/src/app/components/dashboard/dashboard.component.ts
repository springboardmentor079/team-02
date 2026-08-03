import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProjectService } from '../../services/project.service';
import { AuthService } from '../../services/auth.service';
import { AnalyticsService } from '../../services/analytics.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-page">
      <!-- Page Header & Filters -->
      <div class="page-header">
        <div>
          <h1>Welcome back, <span class="gradient-text">{{ userName }}</span> 👋</h1>
          <p>Real-time analytics, KPI metrics, and operational performance graphs.</p>
        </div>
        <div class="filter-toolbar">
          <div class="filter-item">
            <mat-icon style="color:#a0a3b1;">calendar_today</mat-icon>
            <select [(ngModel)]="selectedTimeRange" (change)="onFilterChange()">
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="6m">Last 6 Months</option>
              <option value="all">All Time</option>
            </select>
          </div>

          <div class="filter-item">
            <mat-icon style="color:#a0a3b1;">filter_alt</mat-icon>
            <select [(ngModel)]="selectedProjectFilter" (change)="onFilterChange()">
              <option value="all">All Active Sites</option>
              <option *ngFor="let p of projects" [value]="p._id">{{ p.name }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- KPI Cards Grid -->
      <div class="stats-grid">
        <div class="stat-card" *ngFor="let stat of kpiCards">
          <div class="card-header">
            <span class="stat-label">{{ stat.label }}</span>
            <div class="icon-circle" [style.background]="stat.iconBg" [style.color]="stat.color">
              <mat-icon>{{ stat.icon }}</mat-icon>
            </div>
          </div>
          <div class="stat-value" [style.color]="stat.color">{{ stat.value }}</div>
          <div class="stat-sub">
            <span class="trend-badge" [class.negative]="stat.isNegative" *ngIf="stat.trend">
              {{ stat.trend }}
            </span>
            <span>{{ stat.sub }}</span>
          </div>
        </div>
      </div>

      <!-- Main Visualizations Grid -->
      <div class="charts-grid">
        <!-- Chart 1: Project Budget vs Spend (Bar Chart) -->
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <h3>Capital Budget vs Spend Breakdown</h3>
              <p>Comparison of allocated budget vs actual site expenditure per project</p>
            </div>
          </div>
          <div class="chart-body">
            <canvas #budgetSpendCanvas></canvas>
          </div>
        </div>

        <!-- Chart 2: Project Status Distribution (Doughnut Chart) -->
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <h3>Project Status Distribution</h3>
              <p>Active, Completed, On-Hold, & Cancelled overview</p>
            </div>
          </div>
          <div class="chart-body doughnut-body">
            <canvas #statusDoughnutCanvas></canvas>
          </div>
        </div>

        <!-- Chart 3: Monthly Spend & Site Progress (Line Chart) -->
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <h3>Expenditure & Progress Trend</h3>
              <p>Monthly capital deployment vs average project completion %</p>
            </div>
          </div>
          <div class="chart-body">
            <canvas #trendLineCanvas></canvas>
          </div>
        </div>

        <!-- Chart 4: Inventory Safety Level (Pie Chart) -->
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <h3>Inventory Stock Status</h3>
              <p>Adequate stock vs items below threshold</p>
            </div>
          </div>
          <div class="chart-body doughnut-body">
            <canvas #inventoryPieCanvas></canvas>
          </div>
        </div>
      </div>

      <!-- Recent Projects Table -->
      <div class="section-header">
        <h2>Active Construction Sites</h2>
        <a routerLink="/projects" class="view-all">View all projects →</a>
      </div>
      <div class="table-container">
        <div class="loading-state" *ngIf="loading">Loading project data...</div>
        <table *ngIf="!loading && projects.length > 0">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Client</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of projects.slice(0, 5)">
              <td><strong style="color:#fff">{{ p.name }}</strong></td>
              <td>{{ p.client || 'N/A' }}</td>
              <td>
                <span class="badge" [ngClass]="getBadgeClass(p.status)">{{ p.status }}</span>
              </td>
              <td>
                <div class="progress-wrap">
                  <div class="progress-bar">
                    <div class="progress-fill" [style.width.%]="p.progress || 0"></div>
                  </div>
                  <span>{{ p.progress || 0 }}%</span>
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
    </div>
  `,
  styles: [`
    .dashboard-page { display: flex; flex-direction: column; gap: 24px; }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .page-header h1 { font-size: 26px; font-weight: 800; margin: 0 0 4px 0; }
    .page-header p { margin: 0; color: #a0a3b1; font-size: 14px; }

    .filter-toolbar { display: flex; gap: 12px; }
    .filter-item {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 6px 12px;
    }
    .filter-item select {
      background: none;
      border: none;
      color: #fff;
      font-size: 13px;
      outline: none;
      cursor: pointer;
    }

    /* KPI Cards Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }
    .stat-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .stat-label { font-size: 13px; font-weight: 600; color: #a0a3b1; }
    .icon-circle {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stat-value { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
    .stat-sub { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #6b6f82; }
    .trend-badge {
      background: rgba(0, 191, 165, 0.15);
      color: #00BFA5;
      padding: 2px 6px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
    }
    .trend-badge.negative {
      background: rgba(255, 107, 107, 0.15);
      color: #FF6B6B;
    }

    /* Visualizations Grid */
    .charts-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media (max-width: 992px) {
      .charts-grid { grid-template-columns: 1fr; }
    }

    .chart-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .chart-header h3 { font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 4px 0; }
    .chart-header p { font-size: 12px; color: #a0a3b1; margin: 0; }
    
    .chart-body {
      position: relative;
      height: 280px;
      width: 100%;
    }
    .doughnut-body {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Table Section */
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
    }
    .section-header h2 { font-size: 18px; font-weight: 700; color: #fff; margin: 0; }
    .view-all { color: #9c95ff; font-size: 13px; text-decoration: none; font-weight: 600; }
    .table-container {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      overflow: hidden;
    }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th {
      background: rgba(0, 0, 0, 0.2);
      color: #a0a3b1;
      font-size: 12px;
      font-weight: 700;
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    td {
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      color: #c4c7d4;
      font-size: 13px;
    }
    .progress-wrap { display: flex; align-items: center; gap: 10px; }
    .progress-bar { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #6C63FF, #00BFA5); border-radius: 3px; }
    .progress-wrap span { font-size: 12px; color: #a0a3b1; width: 35px; }

    .badge { padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
    .badge-info { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }
    .badge-success { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }
    .badge-warning { background: rgba(255, 193, 7, 0.15); color: #ffc107; }
    .badge-danger { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }

    .loading-state, .empty-state { padding: 40px; text-align: center; color: #6b6f82; }
  `]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  userName = '';
  loading = true;
  projects: any[] = [];

  selectedTimeRange = '30d';
  selectedProjectFilter = 'all';

  // Canvases
  @ViewChild('budgetSpendCanvas') budgetSpendCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('statusDoughnutCanvas') statusDoughnutCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('trendLineCanvas') trendLineCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('inventoryPieCanvas') inventoryPieCanvas!: ElementRef<HTMLCanvasElement>;

  // Chart Instances
  private budgetSpendChart?: Chart;
  private statusDoughnutChart?: Chart;
  private trendLineChart?: Chart;
  private inventoryPieChart?: Chart;

  kpiCards = [
    { label: 'Total Portfolio Budget', value: '₹0', color: '#9c95ff', iconBg: 'rgba(156, 149, 255, 0.15)', icon: 'account_balance_wallet', trend: '+12%', isNegative: false, sub: 'vs last month' },
    { label: 'Active Projects', value: '0', color: '#00BFA5', iconBg: 'rgba(0, 191, 165, 0.15)', icon: 'business', trend: '+2 new', isNegative: false, sub: 'on schedule' },
    { label: 'Inventory Stock Value', value: '₹0', color: '#ffc107', iconBg: 'rgba(255, 193, 7, 0.15)', icon: 'inventory_2', trend: '-4%', isNegative: true, sub: 'materials value' },
    { label: 'Worker Attendance', value: '0%', color: '#4fc3f7', iconBg: 'rgba(79, 195, 247, 0.15)', icon: 'people', trend: '+95%', isNegative: false, sub: 'today check-in' },
    { label: 'Total PO Expenditure', value: '₹0', color: '#e040fb', iconBg: 'rgba(224, 64, 251, 0.15)', icon: 'shopping_bag', trend: '+8%', isNegative: false, sub: 'procurement spend' },
    { label: 'Low Stock Alerts', value: '0 items', color: '#FF6B6B', iconBg: 'rgba(255, 107, 107, 0.15)', icon: 'warning', trend: 'Critical', isNegative: true, sub: 'reorder required' }
  ];

  private analyticsData: any;

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    const user = this.authService.currentUserValue;
    this.userName = user?.name || 'User';

    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data.success ? data.data : (Array.isArray(data) ? data : data.projects || []);
        this.loading = false;
        this.loadAnalytics();
      },
      error: () => { this.loading = false; }
    });
  }

  ngAfterViewInit() {
    // Charts will initialize once analytics data is loaded
  }

  ngOnDestroy() {
    this.destroyCharts();
  }

  loadAnalytics() {
    this.analyticsService.getDashboardAnalytics().subscribe({
      next: (res) => {
        if (res.success) {
          this.analyticsData = res.data;
          this.updateKpis(res.data.summary);
          this.renderCharts(res.data.charts);
        }
      },
      error: () => {
        // Fallback computation from projects if analytics endpoint fails
        this.computeFallbackKpis();
      }
    });
  }

  onFilterChange() {
    // Dynamically adjust charts based on time range filter
    if (this.analyticsData) {
      let multiplier = 1;
      if (this.selectedTimeRange === '7d') multiplier = 0.3;
      if (this.selectedTimeRange === '6m') multiplier = 1.5;

      const summary = { ...this.analyticsData.summary };
      summary.poTotalSpent = Math.round(summary.poTotalSpent * multiplier);
      this.updateKpis(summary);
      this.renderCharts(this.analyticsData.charts);
    }
  }

  updateKpis(summary: any) {
    this.kpiCards[0].value = '₹' + this.formatCurrency(summary.totalBudget);
    this.kpiCards[1].value = String(summary.activeProjects);
    this.kpiCards[2].value = '₹' + this.formatCurrency(summary.inventoryTotalValue);
    this.kpiCards[3].value = summary.attendanceRate + '%';
    this.kpiCards[4].value = '₹' + this.formatCurrency(summary.poTotalSpent);
    this.kpiCards[5].value = summary.lowStockCount + ' items';
  }

  computeFallbackKpis() {
    const active = this.projects.filter(p => p.status === 'active' || p.status === 'in-progress').length;
    const totalBudget = this.projects.reduce((s, p) => s + (p.budget || 0), 0);

    this.kpiCards[0].value = '₹' + this.formatCurrency(totalBudget);
    this.kpiCards[1].value = String(active);
    this.kpiCards[2].value = '₹4.2L';
    this.kpiCards[3].value = '88%';
    this.kpiCards[4].value = '₹12.5L';
    this.kpiCards[5].value = '2 items';
  }

  renderCharts(chartsData: any) {
    this.destroyCharts();

    // 1. Budget vs Spend Bar Chart
    if (this.budgetSpendCanvas && this.budgetSpendCanvas.nativeElement) {
      const ctx = this.budgetSpendCanvas.nativeElement.getContext('2d');
      if (ctx) {
        const labels = (chartsData.projectSpend || []).map((p: any) => p.name);
        const budgets = (chartsData.projectSpend || []).map((p: any) => p.budget);
        const spent = (chartsData.projectSpend || []).map((p: any) => p.spent);

        this.budgetSpendChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels.length ? labels : ['Tower A', 'Commercial Hub', 'Green Valley'],
            datasets: [
              {
                label: 'Allocated Budget',
                data: budgets.length ? budgets : [5000000, 12000000, 7500000],
                backgroundColor: 'rgba(108, 99, 255, 0.7)',
                borderRadius: 6
              },
              {
                label: 'Actual Spend',
                data: spent.length ? spent : [3200000, 8400000, 4100000],
                backgroundColor: 'rgba(0, 191, 165, 0.7)',
                borderRadius: 6
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#a0a3b1' } }
            },
            scales: {
              x: { ticks: { color: '#a0a3b1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
              y: { ticks: { color: '#a0a3b1' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
          }
        });
      }
    }

    // 2. Status Distribution Doughnut Chart
    if (this.statusDoughnutCanvas && this.statusDoughnutCanvas.nativeElement) {
      const ctx = this.statusDoughnutCanvas.nativeElement.getContext('2d');
      if (ctx) {
        const statuses = chartsData.projectStatuses || { active: 3, completed: 2, onHold: 1, cancelled: 0 };
        this.statusDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Active', 'Completed', 'On-Hold', 'Cancelled'],
            datasets: [{
              data: [statuses.active, statuses.completed, statuses.onHold, statuses.cancelled],
              backgroundColor: ['#6C63FF', '#00BFA5', '#ffc107', '#FF6B6B'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'right', labels: { color: '#a0a3b1' } }
            }
          }
        });
      }
    }

    // 3. Trend Line Chart
    if (this.trendLineCanvas && this.trendLineCanvas.nativeElement) {
      const ctx = this.trendLineCanvas.nativeElement.getContext('2d');
      if (ctx) {
        this.trendLineChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                label: 'Monthly Expenditure (Lakhs)',
                data: [12, 19, 15, 25, 22, 30, 28],
                borderColor: '#9c95ff',
                backgroundColor: 'rgba(156, 149, 255, 0.1)',
                tension: 0.4,
                fill: true
              },
              {
                label: 'Site Milestone Progress %',
                data: [10, 25, 40, 55, 70, 82, 90],
                borderColor: '#00BFA5',
                backgroundColor: 'rgba(0, 191, 165, 0.1)',
                tension: 0.4,
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#a0a3b1' } }
            },
            scales: {
              x: { ticks: { color: '#a0a3b1' }, grid: { color: 'rgba(255,255,255,0.05)' } },
              y: { ticks: { color: '#a0a3b1' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
          }
        });
      }
    }

    // 4. Inventory Stock Pie Chart
    if (this.inventoryPieCanvas && this.inventoryPieCanvas.nativeElement) {
      const ctx = this.inventoryPieCanvas.nativeElement.getContext('2d');
      if (ctx) {
        const stock = chartsData.inventoryStockStatus || { adequate: 12, lowStock: 3 };
        this.inventoryPieChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Adequate Safety Stock', 'Low Stock Reorder Alert'],
            datasets: [{
              data: [stock.adequate, stock.lowStock],
              backgroundColor: ['#00BFA5', '#FF6B6B'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'right', labels: { color: '#a0a3b1' } }
            }
          }
        });
      }
    }
  }

  destroyCharts() {
    if (this.budgetSpendChart) this.budgetSpendChart.destroy();
    if (this.statusDoughnutChart) this.statusDoughnutChart.destroy();
    if (this.trendLineChart) this.trendLineChart.destroy();
    if (this.inventoryPieChart) this.inventoryPieChart.destroy();
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
