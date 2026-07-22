import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectService, Project, Milestone } from '../../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  template: `
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <h1>Projects</h1>
          <p>Manage and track all your construction projects.</p>
        </div>
        <button class="btn btn-primary" (click)="toggleNewProjectForm()">
          {{ showForm && !isEditing ? 'Close' : '+ New Project' }}
        </button>
      </div>
    </div>

    <!-- Create/Edit form -->
    <div class="glass-card" style="padding:28px;margin-bottom:28px" *ngIf="showForm">
      <h3 style="margin-bottom:20px;font-size:16px">{{ isEditing ? 'Edit Project' : 'New Project' }}</h3>
      <form [formGroup]="projectForm" (ngSubmit)="saveProject()">
        <div class="form-grid">
          <div class="field-group">
            <label>Project Name *</label>
            <input formControlName="name" placeholder="e.g. Metro Bridge Phase 2" class="input-field">
          </div>
          <div class="field-group">
            <label>Category *</label>
            <select formControlName="category" class="input-field">
              <option value="">Select Category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Industrial">Industrial</option>
              <option value="Government Projects">Government Projects</option>
            </select>
          </div>
          <div class="field-group">
            <label>Client *</label>
            <input formControlName="client" placeholder="Client name" class="input-field">
          </div>
          <div class="field-group">
            <label>Location *</label>
            <input formControlName="location" placeholder="City, State" class="input-field">
          </div>
          <div class="field-group">
            <label>Budget (₹) *</label>
            <input type="number" formControlName="budget" placeholder="5000000" class="input-field">
          </div>
          <div class="field-group">
            <label>Status *</label>
            <select formControlName="status" class="input-field">
              <option value="Planning">Planning</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Delayed">Delayed</option>
              <option value="Completed">Completed</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div class="field-group">
            <label>Start Date *</label>
            <input type="date" formControlName="startDate" class="input-field">
          </div>
          <div class="field-group">
            <label>End Date *</label>
            <input type="date" formControlName="endDate" class="input-field">
          </div>
          
          <!-- Edit mode specific fields -->
          <div class="field-group" *ngIf="isEditing">
            <label>Progress (%)</label>
            <div style="display:flex;align-items:center;gap:10px">
              <input type="range" formControlName="progress" min="0" max="100" class="progress-slider" style="flex:1">
              <span style="font-size:14px;color:#fff;width:35px">{{ projectForm.value.progress }}%</span>
            </div>
          </div>
          <div class="field-group" *ngIf="isEditing">
            <label>Actual Expense (₹)</label>
            <input type="number" formControlName="actualExpense" placeholder="0" class="input-field">
          </div>
        </div>

        <div class="error-msg" *ngIf="errorMsg">{{ errorMsg }}</div>

        <div style="margin-top:20px;display:flex;gap:12px">
          <button type="submit" class="btn btn-primary" [disabled]="projectForm.invalid || saving">
            {{ saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Create Project' }}
          </button>
          <button type="button" class="btn btn-outline" (click)="cancelForm()">Cancel</button>
        </div>
      </form>
    </div>

    <!-- Table -->
    <div class="table-container">
      <div class="loading-state" *ngIf="loading">Loading projects...</div>
      <table *ngIf="!loading">
        <thead>
          <tr>
            <th>Project</th>
            <th>Category</th>
            <th>Client</th>
            <th>Location</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Budget</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of projects">
            <td><strong style="color:#fff">{{ p.name }}</strong></td>
            <td>{{ p.category }}</td>
            <td>{{ p.client }}</td>
            <td>{{ p.location }}</td>
            <td><span class="badge" [ngClass]="getBadgeClass(p.status)">{{ p.status }}</span></td>
            <td>
              <div class="progress-wrap">
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="p.progress || 0"></div>
                </div>
                <span>{{ p.progress || 0 }}%</span>
              </div>
            </td>
            <td>₹{{ formatCurrency(p.budget) }}</td>
            <td>
              <div style="display:flex;gap:8px">
                <button class="action-btn detail-btn" title="View Workspace" (click)="viewDetails(p._id!)">👁️ Details</button>
                <button class="action-btn edit-btn" title="Edit" (click)="startEdit(p)">✏️</button>
                <button class="action-btn delete-btn" title="Delete" (click)="confirmDelete(p._id!)">🗑️</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="empty-state" *ngIf="!loading && projects.length === 0">
        No projects yet. Click "+ New Project" to get started.
      </div>
    </div>

    <!-- Project Workspace Details Modal -->
    <div class="modal-overlay" *ngIf="showDetails && selectedProject">
      <div class="modal-card" style="max-width:850px; width:95%">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:12px">
          <div>
            <h3 style="font-size:20px;color:#fff;margin:0">{{ selectedProject.name }}</h3>
            <span class="badge" [ngClass]="getBadgeClass(selectedProject.status)" style="margin-top: 4px;">{{ selectedProject.status }}</span>
          </div>
          <button (click)="showDetails=false" style="background:none;border:none;color:#a0a3b1;cursor:pointer;font-size:24px;padding:0;line-height:1">&times;</button>
        </div>

        <!-- Tab Headers -->
        <div class="modal-tabs">
          <button class="tab-btn" [class.active]="activeTab === 'overview'" (click)="activeTab = 'overview'">Overview</button>
          <button class="tab-btn" [class.active]="activeTab === 'milestones'" (click)="activeTab = 'milestones'">Milestones Timeline</button>
          <button class="tab-btn" [class.active]="activeTab === 'logs'" (click)="activeTab = 'logs'">Daily Site Logs</button>
          <button class="tab-btn" [class.active]="activeTab === 'budget'" (click)="activeTab = 'budget'">Budgets & Costs</button>
        </div>

        <!-- Tab contents: Overview -->
        <div *ngIf="activeTab === 'overview'" class="tab-content" style="padding:10px 0">
          <div class="overview-grid">
            <div class="overview-info">
              <div class="detail-row"><span class="detail-label">Category</span><span class="detail-value">{{ selectedProject.category }}</span></div>
              <div class="detail-row"><span class="detail-label">Client</span><span class="detail-value">{{ selectedProject.client }}</span></div>
              <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">{{ selectedProject.location }}</span></div>
              <div class="detail-row"><span class="detail-label">Start Date</span><span class="detail-value">{{ selectedProject.startDate | date:'longDate' }}</span></div>
              <div class="detail-row"><span class="detail-label">End Date</span><span class="detail-value">{{ selectedProject.endDate | date:'longDate' }}</span></div>
              <div class="detail-row" *ngIf="selectedProject.projectManager"><span class="detail-label">Manager</span><span class="detail-value">{{ selectedProject.projectManager.name }}</span></div>
            </div>
            <div class="overview-stats">
              <div class="overview-stat-box">
                <span class="stat-lbl">Overall Progress</span>
                <div style="display:flex;align-items:center;gap:10px;margin-top:8px">
                  <div class="progress-bar" style="height:12px; flex:1">
                    <div class="progress-fill" [style.width.%]="selectedProject.progress || 0"></div>
                  </div>
                  <span style="font-weight:700; color:#fff">{{ selectedProject.progress || 0 }}%</span>
                </div>
              </div>
              <div class="overview-stat-box" style="margin-top:16px">
                <span class="stat-lbl">Budget Spent Breakdown</span>
                <div style="display:flex;justify-content:space-between;font-size:12px;color:#a0a3b1;margin-bottom:4px;margin-top:8px">
                  <span>Expended: ₹{{ formatRealCurrency(selectedProject.actualExpense || 0) }}</span>
                  <span>Total Budget: ₹{{ formatRealCurrency(selectedProject.budget) }}</span>
                </div>
                <div class="progress-bar" style="height:12px">
                  <div class="progress-fill" [style.width.%]="getBudgetPercentage(selectedProject)" [style.background]="getBudgetBarColor(selectedProject)"></div>
                </div>
                <div style="text-align:right;font-size:12px;margin-top:4px" [style.color]="getBudgetBarColor(selectedProject)">
                  {{ getBudgetPercentage(selectedProject).toFixed(1) }}% Consumed
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab contents: Milestones -->
        <div *ngIf="activeTab === 'milestones'" class="tab-content" style="padding:10px 0">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
            <h4 style="color:#fff;margin:0;font-size:15px">Timeline Checklist</h4>
            <button class="btn btn-outline" style="padding:6px 12px;font-size:12px" (click)="toggleMilestoneForm()">
              {{ showMilestoneForm ? 'Cancel' : '+ Add Milestone' }}
            </button>
          </div>

          <!-- Inline Milestone Form -->
          <div class="glass-card" *ngIf="showMilestoneForm" style="padding:16px;margin-bottom:16px">
            <form [formGroup]="milestoneForm" (ngSubmit)="addMilestone()">
              <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
                <div class="field-group">
                  <label>Title *</label>
                  <input formControlName="title" placeholder="e.g. Pour foundation walls" class="input-field" style="padding:8px 12px">
                </div>
                <div class="field-group">
                  <label>Phase *</label>
                  <select formControlName="phase" class="input-field" style="padding:8px 12px">
                    <option value="Foundation">Foundation</option>
                    <option value="Structural Work">Structural Work</option>
                    <option value="Electrical Work">Electrical Work</option>
                    <option value="Plumbing Work">Plumbing Work</option>
                    <option value="Finishing Work">Finishing Work</option>
                    <option value="Inspection Work">Inspection Work</option>
                  </select>
                </div>
                <div class="field-group">
                  <label>Due Date *</label>
                  <input type="date" formControlName="dueDate" class="input-field" style="padding:8px 12px">
                </div>
                <div class="field-group">
                  <label>Status *</label>
                  <select formControlName="status" class="input-field" style="padding:8px 12px">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div style="text-align:right">
                <button type="submit" class="btn btn-primary" style="padding:6px 16px;font-size:12px" [disabled]="milestoneForm.invalid || milestoneSaving">
                  {{ milestoneSaving ? 'Adding...' : 'Add Milestone' }}
                </button>
              </div>
            </form>
          </div>

          <!-- Milestones List -->
          <div class="mini-table-container" style="max-height:280px;overflow-y:auto">
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Milestone Title</th>
                  <th>Phase</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let m of milestones">
                  <td style="width:150px">
                    <select [value]="m.status" (change)="updateMilestoneStatus(m._id!, $event)" class="select-status-badge" [ngClass]="getMilestoneStatusClass(m.status)">
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td>
                    <span [style.text-decoration]="m.status === 'Completed' ? 'line-through' : 'none'" [style.color]="m.status === 'Completed' ? '#6b6f82' : '#fff'">
                      {{ m.title }}
                    </span>
                  </td>
                  <td><span class="badge badge-info" style="font-size:10px">{{ m.phase }}</span></td>
                  <td>{{ m.dueDate | date:'mediumDate' }}</td>
                  <td style="width:60px;text-align:center">
                    <button (click)="deleteMilestone(m._id!)" style="background:none;border:none;color:#FF6B6B;cursor:pointer;font-size:15px" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr *ngIf="milestones.length === 0">
                  <td colspan="5" style="text-align:center;color:#6b6f82;padding:24px">No milestones logged for this project.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab contents: Daily Activity Logs -->
        <div *ngIf="activeTab === 'logs'" class="tab-content" style="padding:10px 0">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
            <h4 style="color:#fff;margin:0;font-size:15px">Site Activity Logs</h4>
            <button class="btn btn-outline" style="padding:6px 12px;font-size:12px" (click)="toggleLogForm()">
              {{ showLogForm ? 'Cancel' : '+ New Entry' }}
            </button>
          </div>

          <!-- Inline Daily Log Form -->
          <div class="glass-card" *ngIf="showLogForm" style="padding:16px;margin-bottom:16px">
            <form [formGroup]="logForm" (ngSubmit)="addDailyLog()">
              <div class="field-group" style="margin-bottom:12px">
                <label>Work Description *</label>
                <textarea formControlName="workCompleted" placeholder="Brief detail about construction work performed today..." class="input-field" style="padding:8px 12px;height:55px;resize:none"></textarea>
              </div>
              <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
                <div class="field-group">
                  <label>Delay Time (Hours)</label>
                  <input type="number" formControlName="delayTime" class="input-field" style="padding:8px 12px">
                </div>
                <div class="field-group">
                  <label>Delay Reason (If applicable)</label>
                  <input formControlName="delayReason" placeholder="Weather, concrete truck late, etc." class="input-field" style="padding:8px 12px">
                </div>
              </div>
              <div style="text-align:right">
                <button type="submit" class="btn btn-primary" style="padding:6px 16px;font-size:12px" [disabled]="logForm.invalid || logSaving">
                  {{ logSaving ? 'Saving...' : 'Submit Log' }}
                </button>
              </div>
            </form>
          </div>

          <!-- Logs List -->
          <div class="mini-table-container" style="max-height:280px;overflow-y:auto">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Work Completed</th>
                  <th>Delay (Hrs)</th>
                  <th>Delay Reason</th>
                  <th>Supervisor</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let l of progressLogs">
                  <td style="white-space:nowrap">{{ l.date | date:'shortDate' }}</td>
                  <td><span style="color:#fff;font-size:13px">{{ l.workCompleted }}</span></td>
                  <td>{{ l.delayTime }} hrs</td>
                  <td>
                    <span class="badge" [ngClass]="l.delayTime > 0 ? 'badge-danger' : 'badge-success'">
                      {{ l.delayReason || 'None' }}
                    </span>
                  </td>
                  <td>{{ l.supervisorId?.name || 'Site Engineer' }}</td>
                </tr>
                <tr *ngIf="progressLogs.length === 0">
                  <td colspan="5" style="text-align:center;color:#6b6f82;padding:24px">No activity logs recorded.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab contents: Budgets & Expenditures -->
        <div *ngIf="activeTab === 'budget'" class="tab-content" style="padding:10px 0">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
            <h4 style="color:#fff;margin:0;font-size:15px">Budget Categories</h4>
            <button class="btn btn-outline" style="padding:6px 12px;font-size:12px" (click)="toggleBudgetForm()">
              {{ showBudgetForm ? 'Cancel' : '+ Allocate Category' }}
            </button>
          </div>

          <!-- Inline Budget Category Form -->
          <div class="glass-card" *ngIf="showBudgetForm" style="padding:16px;margin-bottom:16px">
            <form [formGroup]="budgetForm" (ngSubmit)="addBudgetCategory()">
              <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px">
                <div class="field-group">
                  <label>Category *</label>
                  <select formControlName="category" class="input-field" style="padding:8px 12px">
                    <option value="Labor Cost">Labor Cost</option>
                    <option value="Material Cost">Material Cost</option>
                    <option value="Equipment Cost">Equipment Cost</option>
                    <option value="Transportation Cost">Transportation Cost</option>
                    <option value="Maintenance Cost">Maintenance Cost</option>
                    <option value="Administrative Cost">Administrative Cost</option>
                  </select>
                </div>
                <div class="field-group">
                  <label>Allocated (₹) *</label>
                  <input type="number" formControlName="allocated" class="input-field" style="padding:8px 12px">
                </div>
                <div class="field-group">
                  <label>Actual (₹)</label>
                  <input type="number" formControlName="actual" class="input-field" style="padding:8px 12px">
                </div>
              </div>
              <div style="text-align:right">
                <button type="submit" class="btn btn-primary" style="padding:6px 16px;font-size:12px" [disabled]="budgetForm.invalid || budgetSaving">
                  {{ budgetSaving ? 'Saving...' : 'Add Category' }}
                </button>
              </div>
            </form>
          </div>

          <!-- Budgets List -->
          <div class="mini-table-container" style="max-height:280px;overflow-y:auto">
            <table>
              <thead>
                <tr>
                  <th>Cost Category</th>
                  <th>Allocated</th>
                  <th>Actual Expended</th>
                  <th>Utilization</th>
                  <th style="text-align:center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let b of budgets">
                  <td><strong style="color:#fff">{{ b.category }}</strong></td>
                  <td>₹{{ formatRealCurrency(b.allocated) }}</td>
                  <td [style.color]="b.actual > b.allocated ? '#FF6B6B' : '#00BFA5'">
                    ₹{{ formatRealCurrency(b.actual) }}
                  </td>
                  <td>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div class="progress-bar" style="height:6px;width:75px;background:rgba(255,255,255,0.05)">
                        <div class="progress-fill" [style.width.%]="getBudgetCategoryRatio(b)" [style.background]="b.actual > b.allocated ? '#FF6B6B' : '#00BFA5'"></div>
                      </div>
                      <span style="font-size:12px;font-weight:600" [style.color]="b.actual > b.allocated ? '#FF6B6B' : '#a0a3b1'">
                        {{ getBudgetCategoryRatio(b).toFixed(0) }}%
                      </span>
                    </div>
                  </td>
                  <td style="text-align:center">
                    <div style="display:flex;gap:12px;justify-content:center">
                      <button (click)="incrementExpense(b)" style="background:none;border:none;color:#00BFA5;cursor:pointer;font-size:14px" title="Log Expense">💸 Log Exp</button>
                      <button (click)="deleteBudgetCategory(b._id!)" style="background:none;border:none;color:#FF6B6B;cursor:pointer;font-size:15px" title="Delete">🗑️</button>
                    </div>
                  </td>
                </tr>
                <tr *ngIf="budgets.length === 0">
                  <td colspan="5" style="text-align:center;color:#6b6f82;padding:24px">No budget limits allocated yet.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style="margin-top:24px;text-align:right">
          <button class="btn btn-primary" (click)="showDetails=false">Close Workspace</button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div class="modal-overlay" *ngIf="showDeleteConfirm">
      <div class="modal-card" style="max-width:400px">
        <h3 style="margin-bottom:12px;font-size:16px;color:#fff">Delete Project</h3>
        <p style="color:#a0a3b1;font-size:14px;line-height:1.5;margin-bottom:24px">
          Are you sure you want to delete this project? This action is permanent and cannot be undone.
        </p>
        <div style="display:flex;justify-content:end;gap:12px">
          <button class="btn btn-outline" (click)="showDeleteConfirm=false">Cancel</button>
          <button class="btn btn-primary" style="background:#FF6B6B" (click)="deleteProject()">
            Delete Project
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px; }
    .field-group { display: flex; flex-direction: column; }
    .field-group label { font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 6px; }
    .input-field {
      padding: 11px 14px; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
      color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;
    }
    .input-field:focus { border-color: #6C63FF; }
    .input-field option { background: #1a1d2e; color: #fff; }
    .loading-state, .empty-state { padding: 40px; text-align: center; color: #6b6f82; }
    .progress-wrap { display: flex; align-items: center; gap: 10px; }
    .progress-bar { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #6C63FF, #00BFA5); border-radius: 3px; }
    .progress-wrap span { font-size: 12px; color: #a0a3b1; width: 35px; }
    .error-msg { color: #FF6B6B; font-size: 13px; margin-top: 12px; padding: 10px 14px; background: rgba(255,107,107,0.1); border-radius: 8px; }
    
    .action-btn {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      color: #fff;
      padding: 6px 10px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .action-btn:hover {
      background: rgba(255,255,255,0.15);
      transform: translateY(-1px);
    }
    .edit-btn:hover {
      border-color: #6C63FF;
      color: #6C63FF;
    }
    .delete-btn:hover {
      border-color: #FF6B6B;
      color: #FF6B6B;
    }
    .detail-btn:hover {
      border-color: #00BFA5;
      color: #00BFA5;
    }
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal-card {
      width: 100%;
      background: #111422;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      padding: 10px 0;
      font-size: 14px;
    }
    .detail-label {
      color: #a0a3b1;
      font-weight: 500;
    }
    .detail-value {
      color: #fff;
      font-weight: 600;
    }
    .progress-slider {
      -webkit-appearance: none;
      height: 6px;
      border-radius: 3px;
      background: rgba(255,255,255,0.1);
      outline: none;
    }
    .progress-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #6C63FF;
      cursor: pointer;
    }

    /* Modal Workspace Tabs Styling */
    .modal-tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding-bottom: 8px;
    }
    .tab-btn {
      background: none;
      border: none;
      color: #a0a3b1;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
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
    .overview-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .overview-info {
      display: flex;
      flex-direction: column;
    }
    .overview-stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .overview-stat-box {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 8px;
      padding: 18px;
    }
    .stat-lbl {
      font-size: 11px;
      font-weight: 600;
      color: #a0a3b1;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .mini-table-container {
      background: rgba(255,255,255,0.01);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 8px;
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
    .status-pending { color: #ffc107; border-color: rgba(255,193,7,0.3); }
    .status-inprogress { color: #6C63FF; border-color: rgba(108,99,255,0.3); }
    .status-completed { color: #00BFA5; border-color: rgba(0,191,165,0.3); }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading = true;
  showForm = false;
  saving = false;
  projectForm: FormGroup;
  errorMsg = '';

  selectedProject: any = null;
  showDetails = false;
  showDeleteConfirm = false;
  deletingProjectId = '';
  isEditing = false;
  editingProjectId = '';

  // Workspace subcomponents state
  activeTab = 'overview';
  milestones: Milestone[] = [];
  progressLogs: any[] = [];
  budgets: any[] = [];

  // Sub-forms
  milestoneForm: FormGroup;
  showMilestoneForm = false;
  milestoneSaving = false;

  logForm: FormGroup;
  showLogForm = false;
  logSaving = false;

  budgetForm: FormGroup;
  showBudgetForm = false;
  budgetSaving = false;

  Math = Math;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      client: ['', Validators.required],
      location: ['', Validators.required],
      budget: [0, [Validators.required, Validators.min(1)]],
      status: ['Planning', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      progress: [0],
      actualExpense: [0]
    });

    this.milestoneForm = this.fb.group({
      title: ['', Validators.required],
      phase: ['Foundation', Validators.required],
      dueDate: ['', Validators.required],
      status: ['Pending', Validators.required]
    });

    this.logForm = this.fb.group({
      workCompleted: ['', Validators.required],
      delayTime: [0, [Validators.required, Validators.min(0)]],
      delayReason: ['None']
    });

    this.budgetForm = this.fb.group({
      category: ['Labor Cost', Validators.required],
      allocated: [0, [Validators.required, Validators.min(1)]],
      actual: [0]
    });
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (res) => {
        this.projects = res.success ? res.data : (Array.isArray(res) ? res : res.projects || []);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  toggleNewProjectForm() {
    if (this.showForm && !this.isEditing) {
      this.showForm = false;
    } else {
      this.isEditing = false;
      this.editingProjectId = '';
      this.projectForm.reset({ status: 'Planning', progress: 0, actualExpense: 0 });
      this.showForm = true;
    }
  }

  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingProjectId = '';
    this.projectForm.reset({ status: 'Planning', progress: 0, actualExpense: 0 });
  }

  startEdit(project: Project) {
    this.isEditing = true;
    this.editingProjectId = project._id || '';
    this.showForm = true;
    
    const formatForInput = (dateVal: any) => {
      if (!dateVal) return '';
      const d = new Date(dateVal);
      const month = '' + (d.getMonth() + 1);
      const day = '' + d.getDate();
      const year = d.getFullYear();
      return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
    };

    this.projectForm.patchValue({
      name: project.name,
      category: project.category,
      client: project.client,
      location: project.location,
      budget: project.budget,
      status: project.status,
      startDate: formatForInput(project.startDate),
      endDate: formatForInput(project.endDate),
      progress: project.progress || 0,
      actualExpense: project.actualExpense || 0
    });
  }

  saveProject() {
    if (this.projectForm.invalid) return;
    this.saving = true;
    this.errorMsg = '';

    if (this.isEditing) {
      this.projectService.updateProject(this.editingProjectId, this.projectForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.isEditing = false;
          this.editingProjectId = '';
          this.projectForm.reset({ status: 'Planning', progress: 0, actualExpense: 0 });
          this.loadProjects();
        },
        error: (err) => {
          this.saving = false;
          this.errorMsg = err?.error?.msg || err?.error?.message || 'Failed to update project.';
        }
      });
    } else {
      this.projectService.createProject(this.projectForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.projectForm.reset({ status: 'Planning', progress: 0, actualExpense: 0 });
          this.loadProjects();
        },
        error: (err) => {
          this.saving = false;
          this.errorMsg = err?.error?.msg || err?.error?.message || 'Failed to save project. Ensure all database fields are correct.';
        }
      });
    }
  }

  viewDetails(id: string) {
    this.projectService.getProjectById(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.selectedProject = res.data;
          this.showDetails = true;
          this.activeTab = 'overview';
          
          this.showMilestoneForm = false;
          this.showLogForm = false;
          this.showBudgetForm = false;
          
          this.loadProjectDetails(id);
        }
      },
      error: (err) => {
        console.error('Failed to load project details:', err);
      }
    });
  }

  loadProjectDetails(projectId: string) {
    // Milestones
    this.projectService.getMilestones(projectId).subscribe({
      next: (res) => {
        this.milestones = res.success ? res.data : [];
      }
    });

    // Daily activity logs
    this.projectService.getProjectProgressLogs(projectId).subscribe({
      next: (res) => {
        this.progressLogs = res.success ? res.data : [];
      }
    });

    // Budgets breakdown
    this.projectService.getProjectBudgets(projectId).subscribe({
      next: (res) => {
        this.budgets = res.success ? res.data : [];
      }
    });
  }

  confirmDelete(id: string) {
    this.deletingProjectId = id;
    this.showDeleteConfirm = true;
  }

  deleteProject() {
    if (!this.deletingProjectId) return;
    this.projectService.deleteProject(this.deletingProjectId).subscribe({
      next: () => {
        this.showDeleteConfirm = false;
        this.deletingProjectId = '';
        this.loadProjects();
      },
      error: (err) => {
        console.error('Failed to delete project:', err);
        this.showDeleteConfirm = false;
      }
    });
  }

  getBadgeClass(status: string): string {
    const map: Record<string, string> = {
      'ongoing': 'badge-info',
      'planning': 'badge-warning',
      'delayed': 'badge-danger',
      'completed': 'badge-success',
      'closed': 'badge-danger',
    };
    return map[status?.toLowerCase()] || 'badge-info';
  }

  formatCurrency(val: number): string {
    if (!val) return '0';
    if (val >= 10000000) return (val / 10000000).toFixed(1) + 'Cr';
    if (val >= 100000) return (val / 100000).toFixed(1) + 'L';
    return val.toLocaleString('en-IN');
  }

  formatRealCurrency(val: number): string {
    return (val || 0).toLocaleString('en-IN');
  }

  // --- Budget calculation helpers ---
  getBudgetPercentage(project: any): number {
    if (!project || !project.budget) return 0;
    return ((project.actualExpense || 0) / project.budget) * 100;
  }

  getBudgetBarColor(project: any): string {
    const percentage = this.getBudgetPercentage(project);
    if (percentage > 100) return '#FF6B6B'; // Red overflow
    if (percentage > 85) return '#ffc107'; // Warning yellow
    return '#00BFA5'; // Healthy green
  }

  getBudgetCategoryRatio(budget: any): number {
    if (!budget || !budget.allocated) return 0;
    return (budget.actual / budget.allocated) * 100;
  }

  // --- Subcomponent form toggles ---
  toggleMilestoneForm() {
    this.showMilestoneForm = !this.showMilestoneForm;
    if (this.showMilestoneForm) {
      this.milestoneForm.reset({ status: 'Pending', phase: 'Foundation' });
    }
  }

  toggleLogForm() {
    this.showLogForm = !this.showLogForm;
    if (this.showLogForm) {
      this.logForm.reset({ delayTime: 0, delayReason: 'None' });
    }
  }

  toggleBudgetForm() {
    this.showBudgetForm = !this.showBudgetForm;
    if (this.showBudgetForm) {
      this.budgetForm.reset({ category: 'Labor Cost', allocated: 0, actual: 0 });
    }
  }

  // --- Subcomponent API actions ---
  
  // Milestones CRUD
  getMilestoneStatusClass(status: string): string {
    const map: Record<string, string> = {
      'pending': 'status-pending',
      'in progress': 'status-inprogress',
      'completed': 'status-completed'
    };
    return map[status?.toLowerCase()] || 'status-pending';
  }

  addMilestone() {
    if (this.milestoneForm.invalid) return;
    this.milestoneSaving = true;
    
    this.projectService.createMilestone(this.selectedProject._id, this.milestoneForm.value).subscribe({
      next: () => {
        this.milestoneSaving = false;
        this.showMilestoneForm = false;
        this.milestoneForm.reset({ status: 'Pending', phase: 'Foundation' });
        
        // Reload details & project card to reflect progress changes
        this.loadProjectDetails(this.selectedProject._id);
        this.syncProjectOverallInfo();
      },
      error: (err) => {
        this.milestoneSaving = false;
        alert(err?.error?.message || 'Failed to add milestone.');
      }
    });
  }

  updateMilestoneStatus(milestoneId: string, event: any) {
    const newStatus = event.target.value;
    this.projectService.updateMilestone(milestoneId, { status: newStatus }).subscribe({
      next: () => {
        this.loadProjectDetails(this.selectedProject._id);
        this.syncProjectOverallInfo();
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to update milestone status.');
      }
    });
  }

  deleteMilestone(milestoneId: string) {
    if (!confirm('Are you sure you want to delete this milestone?')) return;
    this.projectService.deleteMilestone(milestoneId).subscribe({
      next: () => {
        this.loadProjectDetails(this.selectedProject._id);
        this.syncProjectOverallInfo();
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to delete milestone.');
      }
    });
  }

  // Daily Site Logs Actions
  addDailyLog() {
    if (this.logForm.invalid) return;
    this.logSaving = true;

    // Supervisor mock fallback - in real deployment, it will be the logged in user
    const localUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const supervisorId = localUser.id || '6659c9b68e0d5d21a8a25c11'; // seeded Admin/PM id fallback
    
    const payload = {
      ...this.logForm.value,
      projectId: this.selectedProject._id,
      supervisorId
    };

    this.projectService.logDailyProgress(payload).subscribe({
      next: () => {
        this.logSaving = false;
        this.showLogForm = false;
        this.logForm.reset({ delayTime: 0, delayReason: 'None' });
        this.loadProjectDetails(this.selectedProject._id);
      },
      error: (err) => {
        this.logSaving = false;
        alert(err?.error?.message || 'Failed to add daily log.');
      }
    });
  }

  // Budget Breakdown Actions
  addBudgetCategory() {
    if (this.budgetForm.invalid) return;
    this.budgetSaving = true;

    this.projectService.createProjectBudget(this.selectedProject._id, this.budgetForm.value).subscribe({
      next: () => {
        this.budgetSaving = false;
        this.showBudgetForm = false;
        this.budgetForm.reset({ category: 'Labor Cost', allocated: 0, actual: 0 });
        this.loadProjectDetails(this.selectedProject._id);
      },
      error: (err) => {
        this.budgetSaving = false;
        alert(err?.error?.message || 'Failed to add budget category.');
      }
    });
  }

  deleteBudgetCategory(budgetId: string) {
    if (!confirm('Are you sure you want to delete this budget category?')) return;
    this.projectService.deleteBudget(budgetId).subscribe({
      next: () => {
        this.loadProjectDetails(this.selectedProject._id);
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to delete budget category.');
      }
    });
  }

  incrementExpense(budget: any) {
    const amtStr = window.prompt(`Enter amount to add under ${budget.category} (₹):`);
    if (!amtStr) return;
    const amount = parseFloat(amtStr);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive number.');
      return;
    }

    const updatedActual = (budget.actual || 0) + amount;
    this.projectService.updateBudget(budget._id, { actual: updatedActual }).subscribe({
      next: () => {
        // Also update project's overall actualExpense
        const newProjectExpense = (this.selectedProject.actualExpense || 0) + amount;
        this.projectService.updateProject(this.selectedProject._id, { actualExpense: newProjectExpense }).subscribe({
          next: (projRes) => {
            this.selectedProject = projRes.data;
            this.loadProjectDetails(this.selectedProject._id);
            this.loadProjects(); // Reload primary grid
          }
        });
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to record expense.');
      }
    });
  }

  // Reload project metadata internally to sync progress & budgets on the card
  syncProjectOverallInfo() {
    this.projectService.getProjectById(this.selectedProject._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.selectedProject = res.data;
          this.loadProjects();
        }
      }
    });
  }
}
