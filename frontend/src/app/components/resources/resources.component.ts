import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResourceService, Resource, Worker } from '../../services/resource.service';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-resources',
  template: `
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <h1>Resource & Workforce Management</h1>
          <p>Deploy machinery, equipment, engineers, and laborers across active construction projects.</p>
        </div>
        <div style="display:flex;gap:12px">
          <button class="btn btn-outline" (click)="toggleAddEquipmentForm()">
            {{ showEquipmentForm ? 'Close Machinery Form' : '+ Add Machinery' }}
          </button>
          <button class="btn btn-primary" (click)="toggleAddWorkerForm()">
            {{ showWorkerForm ? 'Close Labor Form' : '+ Add Labor/Staff' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Stats Summary -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total Machinery</div>
        <div class="stat-value" style="color: #9c95ff;">{{ machineryList.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">
          {{ getAllocatedMachineryCount() }} Deployed | {{ getMaintenanceMachineryCount() }} In Maintenance
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Laborers / Staff</div>
        <div class="stat-value" style="color: #00BFA5;">{{ workersList.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">
          {{ getActiveWorkersCount() }} Active Staff | {{ getAllocatedWorkersCount() }} Allocated
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Est. Daily Wages Pool</div>
        <div class="stat-value" style="color: #ffc107;">₹{{ getDailyWagesSum().toLocaleString('en-IN') }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Cumulative daily staff expense</div>
      </div>
    </div>

    <!-- Add Machinery Form -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px" *ngIf="showEquipmentForm">
      <h3 style="margin-bottom:18px;font-size:15px;color:#fff">Add Machinery / Equipment</h3>
      <form [formGroup]="equipmentForm" (ngSubmit)="saveEquipment()">
        <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:16px">
          <div class="field-group">
            <label>Equipment/Item Name *</label>
            <input formControlName="name" placeholder="e.g. Caterpillar Excavator 320" class="input-field">
          </div>
          <div class="field-group">
            <label>Category *</label>
            <select formControlName="category" class="input-field">
              <option value="Excavators">Excavators</option>
              <option value="Concrete Mixers">Concrete Mixers</option>
              <option value="Cranes">Cranes</option>
              <option value="Dump Trucks">Dump Trucks</option>
              <option value="Generators">Generators</option>
              <option value="Safety Equipment">Safety Equipment</option>
            </select>
          </div>
          <div class="field-group">
            <label>Next Service Date *</label>
            <input type="date" formControlName="nextServiceDate" class="input-field">
          </div>
        </div>
        <div style="margin-top:16px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" style="padding:8px 16px;font-size:13px" (click)="showEquipmentForm=false">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px" [disabled]="equipmentForm.invalid || resourceSaving">
            {{ resourceSaving ? 'Saving...' : 'Add Equipment' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Add Worker Form -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px" *ngIf="showWorkerForm">
      <h3 style="margin-bottom:18px;font-size:15px;color:#fff">Register Laborer / Staff Member</h3>
      <form [formGroup]="workerForm" (ngSubmit)="saveWorker()">
        <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:16px">
          <div class="field-group">
            <label>Full Name *</label>
            <input formControlName="name" placeholder="e.g. John Doe" class="input-field">
          </div>
          <div class="field-group">
            <label>Role Category *</label>
            <select formControlName="category" class="input-field">
              <option value="Engineers">Engineers</option>
              <option value="Supervisors">Supervisors</option>
              <option value="Contractors">Contractors</option>
              <option value="Skilled Workers">Skilled Workers</option>
              <option value="Unskilled Workers">Unskilled Workers</option>
              <option value="Consultants">Consultants</option>
            </select>
          </div>
          <div class="field-group">
            <label>Contact Number *</label>
            <input formControlName="phone" placeholder="e.g. +91-9988776655" class="input-field">
          </div>
          <div class="field-group">
            <label>Daily Wage (₹) *</label>
            <input type="number" formControlName="dailyWage" placeholder="e.g. 500" class="input-field">
          </div>
          <div class="field-group">
            <label>Status *</label>
            <select formControlName="status" class="input-field">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div style="margin-top:16px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" style="padding:8px 16px;font-size:13px" (click)="showWorkerForm=false">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px" [disabled]="workerForm.invalid || workerSaving">
            {{ workerSaving ? 'Saving...' : 'Register Worker' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Navigation Tabs -->
    <div class="resource-tabs">
      <button class="tab-btn" [class.active]="activeMainTab === 'machinery'" (click)="activeMainTab = 'machinery'">🏗 Heavy Machinery & Equipment</button>
      <button class="tab-btn" [class.active]="activeMainTab === 'workforce'" (click)="activeMainTab = 'workforce'">👥 Workforce & Labor</button>
      <button class="tab-btn" [class.active]="activeMainTab === 'attendance'" (click)="activeMainTab = 'attendance'">📅 Daily Attendance Sheet</button>
    </div>

    <!-- Table content: Machinery -->
    <div *ngIf="activeMainTab === 'machinery'">
      <div class="table-container">
        <div class="loading-state" *ngIf="loadingResources">Loading machinery...</div>
        <table *ngIf="!loadingResources">
          <thead>
            <tr>
              <th>Equipment Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Next Service Date</th>
              <th>Current Deployment</th>
              <th style="text-align:center">Deploy actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let r of machineryList">
              <td><strong style="color:#fff">{{ r.name }}</strong></td>
              <td><span class="badge badge-info" style="font-size:10px">{{ r.category }}</span></td>
              <td>
                <select [value]="r.status" (change)="updateEquipmentStatus(r, $event)" class="select-status-badge" [ngClass]="getEquipmentStatusClass(r.status)">
                  <option value="Available">Available</option>
                  <option value="Allocated" disabled>Allocated</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </td>
              <td>{{ r.nextServiceDate | date:'mediumDate' }}</td>
              <td>
                <span *ngIf="r.status === 'Allocated' && r.currentProjectId" style="color:#00BFA5;font-weight:600">
                  📍 {{ r.currentProjectId?.name || 'Project' }}
                </span>
                <span *ngIf="r.status !== 'Allocated'" style="color:#6b6f82">Idle / Available</span>
              </td>
              <td>
                <div style="display:flex;gap:8px;justify-content:center">
                  <!-- Allocation dropdown -->
                  <div *ngIf="r.status !== 'Allocated' && r.status !== 'Maintenance'" style="display:flex;gap:4px">
                    <select #projSelect class="input-field" style="padding:4px 8px;font-size:12px;max-width:180px">
                      <option value="">Select Project</option>
                      <option *ngFor="let p of projectsList" [value]="p._id">{{ p.name }}</option>
                    </select>
                    <button class="action-btn edit-btn" style="padding:4px 8px" (click)="allocateMachinery(r._id!, projSelect.value)">Deploy</button>
                  </div>
                  <!-- Release button -->
                  <button *ngIf="r.status === 'Allocated'" class="action-btn delete-btn" style="padding:4px 12px" (click)="releaseMachinery(r._id!)">Decommission / Release</button>
                  <!-- Delete button -->
                  <button class="action-btn" style="border-color:#FF6B6B;color:#FF6B6B" title="Delete" (click)="deleteMachinery(r._id!)">🗑️</button>
                </div>
              </td>
            </tr>
            <tr *ngIf="machineryList.length === 0">
              <td colspan="6" style="text-align:center;color:#6b6f82;padding:32px">No machinery resources registered in the system.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Table content: Workforce -->
    <div *ngIf="activeMainTab === 'workforce'">
      <div class="table-container">
        <div class="loading-state" *ngIf="loadingWorkers">Loading workforce...</div>
        <table *ngIf="!loadingWorkers">
          <thead>
            <tr>
              <th>Staff / Laborer</th>
              <th>Category</th>
              <th>Contact Phone</th>
              <th>Daily Wage</th>
              <th>Status</th>
              <th>Project Deployment</th>
              <th style="text-align:center">Deploy actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let w of workersList">
              <td><strong style="color:#fff">{{ w.name }}</strong></td>
              <td><span class="badge badge-info" style="font-size:10px">{{ w.category }}</span></td>
              <td>{{ w.phone }}</td>
              <td>₹{{ w.dailyWage }}</td>
              <td>
                <span class="badge" [ngClass]="w.status === 'Active' ? 'badge-success' : 'badge-danger'">
                  {{ w.status }}
                </span>
              </td>
              <td>
                <span *ngIf="w.currentProjectId" style="color:#00BFA5;font-weight:600">
                  📍 {{ w.currentProjectId?.name || 'Project' }}
                </span>
                <span *ngIf="!w.currentProjectId" style="color:#6b6f82">Global / Unassigned</span>
              </td>
              <td>
                <div style="display:flex;gap:8px;justify-content:center">
                  <!-- Allocation dropdown -->
                  <div *ngIf="!w.currentProjectId" style="display:flex;gap:4px">
                    <select #wpSelect class="input-field" style="padding:4px 8px;font-size:12px;max-width:180px">
                      <option value="">Select Project</option>
                      <option *ngFor="let p of projectsList" [value]="p._id">{{ p.name }}</option>
                    </select>
                    <button class="action-btn edit-btn" style="padding:4px 8px;" (click)="allocateWorker(w._id!, wpSelect.value)">Assign</button>
                  </div>
                  <!-- Release button -->
                  <button *ngIf="w.currentProjectId" class="action-btn delete-btn" style="padding:4px 12px" (click)="releaseWorker(w._id!)">Release</button>
                  <!-- Edit Status -->
                  <button class="action-btn" style="color:#ffc107;border-color:#ffc107" (click)="toggleWorkerStatus(w)" title="Toggle Active Status">🔄 Status</button>
                  <!-- Delete button -->
                  <button class="action-btn" style="border-color:#FF6B6B;color:#FF6B6B" title="Delete" (click)="deleteWorker(w._id!)">🗑️</button>
                </div>
              </td>
            </tr>
            <tr *ngIf="workersList.length === 0">
              <td colspan="7" style="text-align:center;color:#6b6f82;padding:32px">No workforce logged in the database.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Table content: Attendance -->
    <div *ngIf="activeMainTab === 'attendance'">
      <div class="glass-card" style="padding:20px;margin-bottom:24px">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-weight:600;color:#a0a3b1">Attendance Date:</span>
            <input type="date" [(ngModel)]="attendanceDate" (change)="loadAttendanceForDate()" class="input-field" style="padding:6px 12px;width:180px">
          </div>
          <div>
            <button class="btn btn-primary" (click)="saveAttendance()" [disabled]="loadingAttendance || submittingAttendance || workersList.length === 0" style="padding:8px 16px">
              {{ submittingAttendance ? 'Saving Sheet...' : '💾 Save Attendance Sheet' }}
            </button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <div class="loading-state" *ngIf="loadingAttendance || loadingWorkers">Loading attendance sheet...</div>
        <table *ngIf="!loadingAttendance && !loadingWorkers">
          <thead>
            <tr>
              <th style="width:100px;text-align:center">Present</th>
              <th>Worker Name</th>
              <th>Role Category</th>
              <th>Contact Phone</th>
              <th>Current Deployment</th>
              <th>Daily Wage</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let w of workersList" [style.opacity]="w.status !== 'Active' ? '0.5' : '1'">
              <td style="text-align:center">
                <input type="checkbox" 
                       [checked]="isWorkerPresent(w._id!)" 
                       [disabled]="w.status !== 'Active'"
                       (change)="toggleWorkerPresence(w._id!)"
                       style="width:18px;height:18px;cursor:pointer">
              </td>
              <td>
                <strong style="color:#fff">{{ w.name }}</strong>
                <span *ngIf="w.status !== 'Active'" style="font-size:11px;color:#FF6B6B;margin-left:8px">(Inactive)</span>
              </td>
              <td><span class="badge badge-info" style="font-size:10px">{{ w.category }}</span></td>
              <td>{{ w.phone }}</td>
              <td>
                <span *ngIf="w.currentProjectId" style="color:#00BFA5;font-weight:600">
                  📍 {{ w.currentProjectId?.name || 'Project' }}
                </span>
                <span *ngIf="!w.currentProjectId" style="color:#6b6f82">Global / Unassigned</span>
              </td>
              <td>₹{{ w.dailyWage }} / Day</td>
            </tr>
            <tr *ngIf="workersList.length === 0">
              <td colspan="6" style="text-align:center;color:#6b6f82;padding:32px">No workers found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .form-grid { display: grid; gap: 16px; margin-bottom: 12px; }
    .field-group { display: flex; flex-direction: column; }
    .field-group label { font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 6px; }
    .input-field {
      padding: 10px 12px; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
      color: #fff; font-size: 13px; font-family: 'Inter', sans-serif; outline: none;
    }
    .input-field:focus { border-color: #6C63FF; }
    .input-field option { background: #1a1d2e; color:#fff; }
    .loading-state { padding: 40px; text-align: center; color: #6b6f82; }

    .action-btn {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 6px;
      color: #fff;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .action-btn:hover {
      background: rgba(255,255,255,0.12);
      transform: translateY(-1px);
    }
    .edit-btn:hover { border-color: #6C63FF; color: #6C63FF; }
    .delete-btn:hover { border-color: #FF6B6B; color: #FF6B6B; }

    .resource-tabs {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding-bottom: 8px;
    }
    .tab-btn {
      background: none;
      border: none;
      color: #a0a3b1;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.2s;
      border-bottom: 2px solid transparent;
      outline: none;
    }
    .tab-btn:hover {
      color: #fff;
    }
    .tab-btn.active {
      color: #6C63FF;
      border-bottom-color: #6C63FF;
      font-weight: 600;
    }

    .select-status-badge {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 6px;
      color: #fff;
      font-size: 12px;
      padding: 4px 8px;
      outline: none;
      cursor: pointer;
    }
    .status-available { color: #00BFA5; border-color: rgba(0,191,165,0.3); }
    .status-allocated { color: #6C63FF; border-color: rgba(108,99,255,0.3); }
    .status-maintenance { color: #FF6B6B; border-color: rgba(255,107,107,0.3); }
  `]
})
export class ResourcesComponent implements OnInit {
  activeMainTab = 'machinery'; // 'machinery' | 'workforce' | 'attendance'

  machineryList: Resource[] = [];
  workersList: Worker[] = [];
  projectsList: Project[] = [];

  loadingResources = true;
  loadingWorkers = true;

  // Add forms visibility
  showEquipmentForm = false;
  showWorkerForm = false;

  // forms
  equipmentForm: FormGroup;
  workerForm: FormGroup;

  resourceSaving = false;
  workerSaving = false;

  // Attendance state
  attendanceDate = '';
  presentWorkersSet: Set<string> = new Set();
  loadingAttendance = false;
  submittingAttendance = false;

  constructor(
    private resourceService: ResourceService,
    private projectService: ProjectService,
    private fb: FormBuilder
  ) {
    this.equipmentForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Excavators', Validators.required],
      nextServiceDate: ['', Validators.required]
    });

    this.workerForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Skilled Workers', Validators.required],
      phone: ['', Validators.required],
      dailyWage: [400, [Validators.required, Validators.min(1)]],
      status: ['Active', Validators.required]
    });
  }

  ngOnInit() {
    this.loadData();
    
    // Set today's date in YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.attendanceDate = `${year}-${month}-${day}`;
  }

  loadData() {
    // 1. Fetch machinery
    this.loadingResources = true;
    this.resourceService.getResources().subscribe({
      next: (res) => {
        this.machineryList = res.success ? res.data : (Array.isArray(res) ? res : []);
        this.loadingResources = false;
      },
      error: () => this.loadingResources = false
    });

    // 2. Fetch workforce
    this.loadingWorkers = true;
    this.resourceService.getWorkers().subscribe({
      next: (res) => {
        this.workersList = res.success ? res.data : (Array.isArray(res) ? res : []);
        this.loadingWorkers = false;
        // Pre-fetch attendance once workforce is loaded
        this.loadAttendanceForDate();
      },
      error: () => this.loadingWorkers = false
    });

    // 3. Fetch active projects list
    this.projectService.getProjects().subscribe({
      next: (res) => {
        this.projectsList = res.success ? res.data : (Array.isArray(res) ? res : []);
      }
    });
  }

  // Form toggles
  toggleAddEquipmentForm() {
    this.showEquipmentForm = !this.showEquipmentForm;
    if (this.showEquipmentForm) {
      this.equipmentForm.reset({ category: 'Excavators' });
    }
  }

  toggleAddWorkerForm() {
    this.showWorkerForm = !this.showWorkerForm;
    if (this.showWorkerForm) {
      this.workerForm.reset({ category: 'Skilled Workers', dailyWage: 400, status: 'Active' });
    }
  }

  // --- Machinery Logic ---
  getEquipmentStatusClass(status: string): string {
    const map: Record<string, string> = {
      'available': 'status-available',
      'allocated': 'status-allocated',
      'maintenance': 'status-maintenance'
    };
    return map[status?.toLowerCase()] || 'status-available';
  }

  saveEquipment() {
    if (this.equipmentForm.invalid) return;
    this.resourceSaving = true;

    const payload = {
      ...this.equipmentForm.value,
      status: 'Available'
    };

    this.resourceService.createResource(payload).subscribe({
      next: () => {
        this.resourceSaving = false;
        this.showEquipmentForm = false;
        this.equipmentForm.reset();
        this.loadData();
      },
      error: (err) => {
        this.resourceSaving = false;
        alert(err?.error?.message || 'Failed to add machinery.');
      }
    });
  }

  updateEquipmentStatus(resource: Resource, event: any) {
    const newStatus = event.target.value;
    this.resourceService.updateResource(resource._id!, { status: newStatus }).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to update equipment status.')
    });
  }

  allocateMachinery(resourceId: string, projectId: string) {
    if (!projectId) {
      alert('Please select a project to deploy to.');
      return;
    }
    this.resourceService.allocateResource(resourceId, projectId).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to deploy machinery.')
    });
  }

  releaseMachinery(resourceId: string) {
    if (!confirm('Are you sure you want to release this machinery from project deployment?')) return;
    this.resourceService.releaseResource(resourceId).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to release machinery.')
    });
  }

  deleteMachinery(resourceId: string) {
    if (!confirm('Are you sure you want to delete this machinery from database?')) return;
    this.resourceService.deleteResource(resourceId).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to delete machinery.')
    });
  }

  // --- Workforce Logic ---
  saveWorker() {
    if (this.workerForm.invalid) return;
    this.workerSaving = true;

    this.resourceService.createWorker(this.workerForm.value).subscribe({
      next: () => {
        this.workerSaving = false;
        this.showWorkerForm = false;
        this.workerForm.reset();
        this.loadData();
      },
      error: (err) => {
        this.workerSaving = false;
        alert(err?.error?.message || 'Failed to register laborer.');
      }
    });
  }

  allocateWorker(workerId: string, projectId: string) {
    if (!projectId) {
      alert('Please select a project to assign this worker to.');
      return;
    }
    this.resourceService.allocateWorker(workerId, projectId).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to assign worker.')
    });
  }

  releaseWorker(workerId: string) {
    if (!confirm('Are you sure you want to release this staff member from project assignment?')) return;
    this.resourceService.releaseWorker(workerId).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to release worker.')
    });
  }

  toggleWorkerStatus(worker: Worker) {
    const nextStatus = worker.status === 'Active' ? 'Inactive' : 'Active';
    this.resourceService.updateWorker(worker._id!, { status: nextStatus }).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to update worker status.')
    });
  }

  deleteWorker(workerId: string) {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    this.resourceService.deleteWorker(workerId).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err?.error?.message || 'Failed to delete worker.')
    });
  }

  // --- Summary/Stats Helpers ---
  getAllocatedMachineryCount(): number {
    return this.machineryList.filter(r => r.status === 'Allocated').length;
  }

  getMaintenanceMachineryCount(): number {
    return this.machineryList.filter(r => r.status === 'Maintenance').length;
  }

  getActiveWorkersCount(): number {
    return this.workersList.filter(w => w.status === 'Active').length;
  }

  getAllocatedWorkersCount(): number {
    return this.workersList.filter(w => !!w.currentProjectId).length;
  }

  getDailyWagesSum(): number {
    return this.workersList
      .filter(w => w.status === 'Active')
      .reduce((sum, w) => sum + (w.dailyWage || 0), 0);
  }

  // --- Attendance Business Logic ---
  loadAttendanceForDate() {
    if (!this.attendanceDate || this.workersList.length === 0) return;
    
    this.loadingAttendance = true;
    this.resourceService.getAttendance(this.attendanceDate).subscribe({
      next: (res) => {
        this.presentWorkersSet.clear();
        if (res.success && res.data && res.data.length > 0) {
          const record = res.data[0];
          if (record.presentWorkers) {
            record.presentWorkers.forEach((w: any) => {
              const id = typeof w === 'object' ? w._id : w;
              this.presentWorkersSet.add(id);
            });
          }
        } else {
          // Default: mark all Active workers as present if no records exist for this day yet
          this.workersList.forEach(w => {
            if (w.status === 'Active') {
              this.presentWorkersSet.add(w._id!);
            }
          });
        }
        this.loadingAttendance = false;
      },
      error: (err) => {
        console.error('Failed to load attendance sheet', err);
        this.loadingAttendance = false;
      }
    });
  }

  toggleWorkerPresence(workerId: string) {
    if (this.presentWorkersSet.has(workerId)) {
      this.presentWorkersSet.delete(workerId);
    } else {
      this.presentWorkersSet.add(workerId);
    }
  }

  isWorkerPresent(workerId: string): boolean {
    return this.presentWorkersSet.has(workerId);
  }

  saveAttendance() {
    if (!this.attendanceDate) {
      alert('Please specify a date.');
      return;
    }
    this.submittingAttendance = true;
    const presentList = Array.from(this.presentWorkersSet);
    
    this.resourceService.submitAttendance(this.attendanceDate, presentList).subscribe({
      next: () => {
        this.submittingAttendance = false;
        alert('Attendance sheet updated successfully!');
        this.loadAttendanceForDate();
      },
      error: (err) => {
        this.submittingAttendance = false;
        alert(err?.error?.message || 'Failed to submit attendance sheet.');
      }
    });
  }
}
