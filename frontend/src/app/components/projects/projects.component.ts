import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService, Project } from '../../services/project.service';
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
                <button class="action-btn detail-btn" title="View Details" (click)="viewDetails(p._id!)">👁️</button>
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

    <!-- Project Details Modal -->
    <div class="modal-overlay" *ngIf="showDetails && selectedProject">
      <div class="modal-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:12px">
          <h3 style="font-size:18px;color:#fff;margin:0">Project Details</h3>
          <button (click)="showDetails=false" style="background:none;border:none;color:#a0a3b1;cursor:pointer;font-size:24px;padding:0;line-height:1">&times;</button>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Name</span>
          <span class="detail-value">{{ selectedProject.name }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Category</span>
          <span class="detail-value">{{ selectedProject.category }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Client</span>
          <span class="detail-value">{{ selectedProject.client }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location</span>
          <span class="detail-value">{{ selectedProject.location }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Status</span>
          <span class="detail-value">
            <span class="badge" [ngClass]="getBadgeClass(selectedProject.status)">{{ selectedProject.status }}</span>
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Progress</span>
          <span class="detail-value">{{ selectedProject.progress || 0 }}%</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Budget</span>
          <span class="detail-value">₹{{ formatCurrency(selectedProject.budget) }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Actual Expense</span>
          <span class="detail-value">₹{{ formatCurrency(selectedProject.actualExpense) }}</span>
        </div>
        <div class="detail-row" *ngIf="selectedProject.projectManager">
          <span class="detail-label">Project Manager</span>
          <span class="detail-value">{{ selectedProject.projectManager.name }} ({{ selectedProject.projectManager.email }})</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Start Date</span>
          <span class="detail-value">{{ selectedProject.startDate | date:'longDate' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">End Date</span>
          <span class="detail-value">{{ selectedProject.endDate | date:'longDate' }}</span>
        </div>

        <div style="margin-top:24px;text-align:right">
          <button class="btn btn-primary" (click)="showDetails=false">Close Details</button>
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
    .input-field option { background: #1a1d2e; }
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
      font-size: 14px;
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
      max-width: 550px;
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
    
    // Format dates correctly for <input type="date"> (YYYY-MM-DD)
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
        }
      },
      error: (err) => {
        console.error('Failed to load project details:', err);
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
      'planning': 'badge-info',
      'delayed': 'badge-warning',
      'completed': 'badge-success',
      'closed': 'badge-danger',
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
