import { Component, OnInit } from '@angular/core';
import { ReportingService, ReportItem, ReportFilter } from '../../services/reporting.service';

@Component({
  selector: 'app-reports',
  template: `
    <div class="reports-page">
      <!-- Page Header -->
      <div class="page-header">
        <div>
          <h1>Reporting <span class="gradient-text">Hub</span> & Audits 📊</h1>
          <p>Generate, filter, and export comprehensive construction project analytical reports.</p>
        </div>
        <div class="export-actions">
          <button class="btn btn-outline" (click)="exportCsv()" [disabled]="loading || items.length === 0">
            <mat-icon>file_download</mat-icon> Export CSV
          </button>
          <button class="btn btn-outline" (click)="exportJson()" [disabled]="loading || items.length === 0">
            <mat-icon>code</mat-icon> Export JSON
          </button>
          <button class="btn btn-primary" (click)="exportPdf()" [disabled]="loading || items.length === 0">
            <mat-icon>picture_as_pdf</mat-icon> Print PDF Report
          </button>
        </div>
      </div>

      <!-- Quick Template Presets -->
      <div class="template-presets">
        <button 
          class="preset-card" 
          [class.active]="selectedPreset === 'executive'" 
          (click)="applyPreset('executive')"
        >
          <div class="preset-icon"><mat-icon>dashboard</mat-icon></div>
          <div class="preset-info">
            <span class="preset-title">Executive Summary</span>
            <span class="preset-desc">Cross-module operational summary</span>
          </div>
        </button>

        <button 
          class="preset-card" 
          [class.active]="selectedPreset === 'procurement'" 
          (click)="applyPreset('procurement')"
        >
          <div class="preset-icon"><mat-icon>shopping_cart</mat-icon></div>
          <div class="preset-info">
            <span class="preset-title">Procurement & POs</span>
            <span class="preset-desc">Purchase order status & spend</span>
          </div>
        </button>

        <button 
          class="preset-card" 
          [class.active]="selectedPreset === 'projects'" 
          (click)="applyPreset('projects')"
        >
          <div class="preset-icon"><mat-icon>business</mat-icon></div>
          <div class="preset-info">
            <span class="preset-title">Projects & Budgets</span>
            <span class="preset-desc">Progress and capital allocations</span>
          </div>
        </button>

        <button 
          class="preset-card" 
          [class.active]="selectedPreset === 'inventory'" 
          (click)="applyPreset('inventory')"
        >
          <div class="preset-icon"><mat-icon>inventory_2</mat-icon></div>
          <div class="preset-info">
            <span class="preset-title">Inventory & Stock</span>
            <span class="preset-desc">Stock levels and material valuation</span>
          </div>
        </button>
      </div>

      <!-- Filters Panel -->
      <div class="filter-card">
        <div class="filter-row">
          <!-- Module selector -->
          <div class="filter-group">
            <label>Module</label>
            <select [(ngModel)]="filters.module" (change)="loadReportData()">
              <option value="all">All Modules</option>
              <option value="procurement">Procurement & POs</option>
              <option value="projects">Projects & Budgets</option>
              <option value="inventory">Inventory & Stock</option>
            </select>
          </div>

          <!-- Status Filter -->
          <div class="filter-group">
            <label>Status Filter</label>
            <select [(ngModel)]="filters.status" (change)="loadReportData()">
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
              <option value="low stock">Low Stock Alert</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <!-- Start Date -->
          <div class="filter-group">
            <label>Start Date</label>
            <input type="date" [(ngModel)]="filters.startDate" (change)="loadReportData()" />
          </div>

          <!-- End Date -->
          <div class="filter-group">
            <label>End Date</label>
            <input type="date" [(ngModel)]="filters.endDate" (change)="loadReportData()" />
          </div>

          <!-- Search Input -->
          <div class="filter-group search-group">
            <label>Search Query</label>
            <div class="search-input-wrap">
              <mat-icon>search</mat-icon>
              <input 
                type="text" 
                placeholder="Search by title, PO #, category..." 
                [(ngModel)]="filters.search" 
                (keyup.enter)="loadReportData()"
              />
            </div>
          </div>

          <!-- Reset Button -->
          <div class="filter-group reset-group">
            <button class="btn btn-outline" (click)="resetFilters()">
              <mat-icon>restart_alt</mat-icon> Reset
            </button>
          </div>
        </div>
      </div>

      <!-- Summary Metrics Bar -->
      <div class="summary-metrics">
        <div class="metric-card">
          <span class="m-label">Report Records</span>
          <span class="m-val">{{ items.length }}</span>
        </div>
        <div class="metric-card">
          <span class="m-label">Total Financial Valuation</span>
          <span class="m-val" style="color:#00BFA5;">₹{{ formatCurrency(totalValuation) }}</span>
        </div>
        <div class="metric-card">
          <span class="m-label">Active / Normal Items</span>
          <span class="m-val" style="color:#9c95ff;">{{ normalCount }}</span>
        </div>
        <div class="metric-card">
          <span class="m-label">Alerts / Pending Items</span>
          <span class="m-val" style="color:#FF6B6B;">{{ alertCount }}</span>
        </div>
      </div>

      <!-- Data Table -->
      <div class="table-container">
        <div class="loading-state" *ngIf="loading">
          <mat-icon class="spin">sync</mat-icon> Fetching analytical dataset...
        </div>

        <table *ngIf="!loading && items.length > 0">
          <thead>
            <tr>
              <th>#</th>
              <th>Module</th>
              <th>Record Title</th>
              <th>Category</th>
              <th>Reference #</th>
              <th>Valuation (INR)</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of items; let i = index">
              <td>{{ i + 1 }}</td>
              <td>
                <span class="module-badge" [ngClass]="item.module.toLowerCase()">
                  {{ item.module }}
                </span>
              </td>
              <td><strong style="color:#fff">{{ item.title }}</strong></td>
              <td>{{ item.category }}</td>
              <td><code>{{ item.reference }}</code></td>
              <td><strong>₹{{ formatCurrency(item.amount) }}</strong></td>
              <td>
                <span class="badge" [ngClass]="getStatusBadge(item.status)">
                  {{ item.status }}
                </span>
              </td>
              <td>{{ item.date ? (item.date | date:'mediumDate') : 'N/A' }}</td>
            </tr>
          </tbody>
        </table>

        <div class="empty-state" *ngIf="!loading && items.length === 0">
          <mat-icon style="font-size:48px; width:48px; height:48px; color:#4a4d64;">find_in_page</mat-icon>
          <p>No matching report entries found for the selected criteria.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .reports-page { display: flex; flex-direction: column; gap: 24px; }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .page-header h1 { font-size: 26px; font-weight: 800; margin: 0 0 6px 0; }
    .page-header p { margin: 0; color: #a0a3b1; font-size: 14px; }

    .export-actions { display: flex; gap: 12px; }
    .btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
      transition: all 0.2s ease;
    }
    .btn-outline {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #fff;
    }
    .btn-outline:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.12);
    }
    .btn-primary {
      background: linear-gradient(135deg, #6C63FF, #00BFA5);
      border: none;
      color: #fff;
      box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
    }
    .btn-primary:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(108, 99, 255, 0.45);
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Template Presets */
    .template-presets {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .preset-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;
      text-align: left;
      transition: all 0.2s ease;
    }
    .preset-card:hover, .preset-card.active {
      border-color: #6C63FF;
      background: rgba(108, 99, 255, 0.1);
      transform: translateY(-2px);
    }
    .preset-icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: rgba(108, 99, 255, 0.15);
      color: #9c95ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preset-info { display: flex; flex-direction: column; }
    .preset-title { font-size: 14px; font-weight: 700; color: #fff; }
    .preset-desc { font-size: 11px; color: #a0a3b1; margin-top: 2px; }

    /* Filters Card */
    .filter-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 20px;
    }
    .filter-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: flex-end;
    }
    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
      min-width: 140px;
    }
    .filter-group label {
      font-size: 11px;
      font-weight: 700;
      color: #a0a3b1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .filter-group select, .filter-group input[type="date"] {
      background: #0f1117;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 10px 12px;
      color: #fff;
      font-size: 13px;
      outline: none;
    }
    .search-group { flex: 2; min-width: 220px; }
    .search-input-wrap {
      display: flex;
      align-items: center;
      background: #0f1117;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 0 12px;
      gap: 8px;
    }
    .search-input-wrap mat-icon { color: #6b6f82; font-size: 20px; }
    .search-input-wrap input {
      background: none;
      border: none;
      color: #fff;
      padding: 10px 0;
      width: 100%;
      font-size: 13px;
      outline: none;
    }
    .reset-group { flex: 0 0 auto; min-width: auto; }

    /* Summary Metrics */
    .summary-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }
    .metric-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .m-label { font-size: 12px; color: #a0a3b1; }
    .m-val { font-size: 22px; font-weight: 800; color: #fff; }

    /* Table Container */
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
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      text-transform: uppercase;
    }
    td {
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      color: #c4c7d4;
      font-size: 13px;
    }
    tr:hover { background: rgba(255, 255, 255, 0.02); }

    code {
      background: rgba(255,255,255,0.06);
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 12px;
      color: #9c95ff;
    }
    .module-badge {
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 6px;
      text-transform: uppercase;
    }
    .module-badge.procurement { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }
    .module-badge.projects { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }
    .module-badge.inventory { background: rgba(255, 193, 7, 0.15); color: #ffc107; }

    .badge {
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 8px;
    }
    .badge-success { background: rgba(0, 191, 165, 0.15); color: #00BFA5; }
    .badge-danger { background: rgba(255, 107, 107, 0.15); color: #FF6B6B; }
    .badge-warning { background: rgba(255, 193, 7, 0.15); color: #ffc107; }
    .badge-info { background: rgba(108, 99, 255, 0.15); color: #9c95ff; }

    .loading-state, .empty-state {
      padding: 60px 20px;
      text-align: center;
      color: #6b6f82;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .spin { animation: spin 1.2s linear infinite; }
    @keyframes spin { 100% { transform: rotate(360deg); } }
  `]
})
export class ReportsComponent implements OnInit {
  loading = true;
  selectedPreset = 'executive';

  filters: ReportFilter = {
    module: 'all',
    status: 'all',
    startDate: '',
    endDate: '',
    search: ''
  };

  items: ReportItem[] = [];

  constructor(private reportingService: ReportingService) {}

  ngOnInit() {
    this.loadReportData();
  }

  loadReportData() {
    this.loading = true;
    this.reportingService.getReportData(this.filters).subscribe({
      next: (res) => {
        this.items = res.success ? res.data : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  applyPreset(preset: string) {
    this.selectedPreset = preset;
    if (preset === 'executive') {
      this.filters.module = 'all';
    } else if (preset === 'procurement') {
      this.filters.module = 'procurement';
    } else if (preset === 'projects') {
      this.filters.module = 'projects';
    } else if (preset === 'inventory') {
      this.filters.module = 'inventory';
    }
    this.loadReportData();
  }

  resetFilters() {
    this.selectedPreset = 'executive';
    this.filters = {
      module: 'all',
      status: 'all',
      startDate: '',
      endDate: '',
      search: ''
    };
    this.loadReportData();
  }

  get totalValuation(): number {
    return this.items.reduce((acc, i) => acc + (i.amount || 0), 0);
  }

  get normalCount(): number {
    return this.items.filter(i => 
      !i.status.toLowerCase().includes('low') && 
      !i.status.toLowerCase().includes('pending')
    ).length;
  }

  get alertCount(): number {
    return this.items.filter(i => 
      i.status.toLowerCase().includes('low') || 
      i.status.toLowerCase().includes('pending')
    ).length;
  }

  getStatusBadge(status: string): string {
    const s = status?.toLowerCase() || '';
    if (s.includes('low') || s.includes('cancel')) return 'badge-danger';
    if (s.includes('pending') || s.includes('hold')) return 'badge-warning';
    if (s.includes('active') || s.includes('approved') || s.includes('completed')) return 'badge-success';
    return 'badge-info';
  }

  formatCurrency(val: number): string {
    if (!val) return '0';
    if (val >= 10000000) return (val / 10000000).toFixed(2) + ' Cr';
    if (val >= 100000) return (val / 100000).toFixed(2) + ' L';
    return val.toLocaleString();
  }

  exportCsv() {
    this.reportingService.exportToCsv('BuildTrack_Report', this.items);
  }

  exportJson() {
    this.reportingService.exportToJson('BuildTrack_Report', this.items);
  }

  exportPdf() {
    this.reportingService.printPdfReport('BuildTrack Executive Analytics & Operations Audit', this.items);
  }
}
