import { Component, OnInit } from '@angular/core';
import { ResourceService, Worker } from '../../services/resource.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-attendance',
  template: `
    <div class="page-header">
      <div>
        <h1>Daily Workforce Attendance</h1>
        <p>Record, review, and clear worker attendance logs for construction projects.</p>
      </div>
    </div>

    <!-- Controls Panel -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <label style="font-weight:600;color:#a0a3b1;font-size:14px">Select Date *</label>
          <input type="date" [(ngModel)]="selectedDate" (change)="onDateChange()" class="input-field" style="width:160px;padding:8px 12px">
        </div>
        <div style="display:flex;gap:12px">
          <button class="btn btn-outline" (click)="selectAll()">Select All</button>
          <button class="btn btn-outline" (click)="deselectAll()">Deselect All</button>
          <button class="btn btn-primary" (click)="saveAttendance()" [disabled]="saving">
            {{ saving ? 'Saving...' : 'Save Attendance' }}
          </button>
          <button class="btn btn-outline" style="border-color:#FF6B6B;color:#FF6B6B" (click)="clearAttendance()" [disabled]="clearing || !attendanceExists">
            {{ clearing ? 'Clearing...' : 'Clear Attendance' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Attendance Stats -->
    <div class="stats-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:28px">
      <div class="stat-card">
        <div class="stat-label">Total Labor Strength</div>
        <div class="stat-value" style="color:#9c95ff">{{ workers.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Total registered workforce</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Present Count</div>
        <div class="stat-value" style="color:#00BFA5">{{ getPresentCount() }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Workers marked present today</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Daily Wage Commitment</div>
        <div class="stat-value" style="color:#ffc107">₹{{ getWageCommitment() | number:'1.0-0':'en-IN' }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Total wage payout for today's strength</div>
      </div>
    </div>

    <!-- Roster Grid -->
    <div class="table-container">
      <div class="loading-state" *ngIf="loading">Loading workforce roster...</div>
      
      <table *ngIf="!loading">
        <thead>
          <tr>
            <th style="width:80px;text-align:center">Present</th>
            <th>Name</th>
            <th>Category</th>
            <th>Phone</th>
            <th>Daily Wage (₹)</th>
            <th>Deployment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let w of workers" [class.row-selected]="isPresent(w._id!)">
            <td style="text-align:center">
              <input type="checkbox" [checked]="isPresent(w._id!)" (change)="toggleWorker(w._id!)" class="attendance-checkbox">
            </td>
            <td><strong style="color:#fff">{{ w.name }}</strong></td>
            <td><span class="badge badge-info" style="font-size:11px">{{ w.category }}</span></td>
            <td>{{ w.phone }}</td>
            <td>₹{{ w.dailyWage }}</td>
            <td>{{ w.currentProjectId?.name || 'Unallocated' }}</td>
            <td>
              <span class="badge" [class.badge-success]="isPresent(w._id!)" [class.badge-danger]="!isPresent(w._id!)">
                {{ isPresent(w._id!) ? 'Present' : 'Absent' }}
              </span>
            </td>
          </tr>
          <tr *ngIf="!loading && workers.length === 0">
            <td colspan="7" style="text-align:center;color:#6b6f82;padding:40px">
              No workers registered in database. Go to Resources to add labor.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .input-field {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
      color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;
    }
    .input-field:focus { border-color: #6C63FF; }
    .loading-state { padding: 40px; text-align: center; color: #6b6f82; }
    .attendance-checkbox {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #00BFA5;
    }
    .row-selected {
      background: rgba(0, 191, 165, 0.03);
    }
    .badge-danger {
      background: rgba(255, 107, 107, 0.1);
      color: #FF6B6B;
      border: 1px solid rgba(255, 107, 107, 0.2);
    }
  `]
})
export class AttendanceComponent implements OnInit {
  workers: Worker[] = [];
  presentIds: string[] = [];
  selectedDate: string = '';
  loading = true;
  saving = false;
  clearing = false;
  attendanceExists = false;

  constructor(private resourceService: ResourceService, private snackBar: MatSnackBar) {
    // Default to local ISO date YYYY-MM-DD
    const today = new Date();
    const offset = today.getTimezoneOffset();
    const localToday = new Date(today.getTime() - (offset * 60 * 1000));
    this.selectedDate = localToday.toISOString().split('T')[0];
  }

  ngOnInit() {
    this.loadWorkforce();
  }

  loadWorkforce() {
    this.loading = true;
    this.resourceService.getWorkers().subscribe({
      next: (res) => {
        this.workers = res.success ? res.data : (Array.isArray(res) ? res : res.workers || []);
        this.loadAttendance();
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Failed to load workers roster', 'Close', { duration: 3000 });
      }
    });
  }

  loadAttendance() {
    this.resourceService.getAttendance(this.selectedDate).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.count > 0 && res.data[0]) {
          const record = res.data[0];
          this.attendanceExists = true;
          this.presentIds = record.presentWorkers.map((w: any) => typeof w === 'object' ? w._id : w);
        } else {
          this.attendanceExists = false;
          this.presentIds = [];
        }
      },
      error: () => {
        this.loading = false;
        this.attendanceExists = false;
        this.presentIds = [];
      }
    });
  }

  onDateChange() {
    this.loading = true;
    this.loadAttendance();
  }

  isPresent(id: string): boolean {
    return this.presentIds.includes(id);
  }

  toggleWorker(id: string) {
    const index = this.presentIds.indexOf(id);
    if (index === -1) {
      this.presentIds.push(id);
    } else {
      this.presentIds.splice(index, 1);
    }
  }

  selectAll() {
    this.presentIds = this.workers.map(w => w._id!).filter(id => !!id);
  }

  deselectAll() {
    this.presentIds = [];
  }

  getPresentCount(): number {
    return this.presentIds.length;
  }

  getWageCommitment(): number {
    return this.workers
      .filter(w => this.isPresent(w._id!))
      .reduce((sum, w) => sum + (w.dailyWage || 0), 0);
  }

  saveAttendance() {
    if (!this.selectedDate) {
      this.snackBar.open('Please select a date first', 'Close', { duration: 3000 });
      return;
    }
    this.saving = true;
    this.resourceService.submitAttendance(this.selectedDate, this.presentIds).subscribe({
      next: () => {
        this.saving = false;
        this.attendanceExists = true;
        this.snackBar.open('Attendance saved successfully', 'Close', { duration: 3000 });
      },
      error: () => {
        this.saving = false;
        this.snackBar.open('Failed to save attendance', 'Close', { duration: 3000 });
      }
    });
  }

  clearAttendance() {
    if (!confirm('Are you sure you want to delete the attendance log for ' + this.selectedDate + '?')) return;
    this.clearing = true;
    this.resourceService.deleteAttendance(this.selectedDate).subscribe({
      next: () => {
        this.clearing = false;
        this.attendanceExists = false;
        this.presentIds = [];
        this.snackBar.open('Attendance record cleared', 'Close', { duration: 3000 });
      },
      error: () => {
        this.clearing = false;
        this.snackBar.open('Failed to clear attendance record', 'Close', { duration: 3000 });
      }
    });
  }
}
