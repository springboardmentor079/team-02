import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentService, ProjectDocument } from '../../services/document.service';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-documents',
  template: `
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <h1>Document Management</h1>
          <p>Store, organize, and retrieve drawings, contracts, permits, and other project files.</p>
        </div>
        <button class="btn btn-primary" (click)="toggleForm()">
          {{ showForm ? 'Close' : '+ Upload Document' }}
        </button>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total Documents</div>
        <div class="stat-value" style="color: #9c95ff;">{{ documents.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Across all projects and categories</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Storage Used</div>
        <div class="stat-value" style="color: #00BFA5;">{{ formatFileSize(getTotalStorage()) }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Combined size of all stored files</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Categories in Use</div>
        <div class="stat-value" style="color: #ffc107;">{{ getCategoryCount() }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Drawings, contracts, permits & more</div>
      </div>
    </div>

    <!-- Upload Form -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px" *ngIf="showForm">
      <h3 style="margin-bottom:18px;font-size:16px;color:#fff">Upload New Document</h3>
      <form [formGroup]="uploadForm" (ngSubmit)="submitUpload()">
        <div class="form-grid" style="grid-template-columns:1fr 1fr 1fr;gap:16px">
          <div class="field-group">
            <label>Document Title *</label>
            <input formControlName="title" placeholder="e.g. Foundation Layout Plan Rev 3" class="input-field">
          </div>
          <div class="field-group">
            <label>Category *</label>
            <select formControlName="category" class="input-field">
              <option value="Drawings">Drawings</option>
              <option value="Contracts">Contracts</option>
              <option value="Permits">Permits</option>
              <option value="Reports">Reports</option>
              <option value="Invoices">Invoices</option>
              <option value="Safety">Safety</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="field-group">
            <label>Linked Project (optional)</label>
            <select formControlName="projectId" class="input-field">
              <option value="">No specific project</option>
              <option *ngFor="let p of projects" [value]="p._id">{{ p.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-grid" style="grid-template-columns:2fr 1fr;gap:16px;margin-top:16px">
          <div class="field-group">
            <label>Description (optional)</label>
            <input formControlName="description" placeholder="Brief note about this document" class="input-field">
          </div>
          <div class="field-group">
            <label>File * (max 25MB)</label>
            <input type="file" (change)="onFileSelected($event)" class="input-field" style="padding:8px 14px">
          </div>
        </div>
        <div *ngIf="selectedFile" style="margin-top:10px;font-size:13px;color:#a0a3b1">
          Selected: {{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})
        </div>
        <div style="margin-top:20px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" (click)="cancelForm()">Cancel</button>
          <button type="submit" class="btn btn-primary" [disabled]="uploadForm.invalid || !selectedFile || uploading">
            {{ uploading ? 'Uploading...' : 'Upload Document' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Filters -->
    <div class="glass-card" style="padding:16px 24px;margin-bottom:20px;display:flex;gap:16px;align-items:end;flex-wrap:wrap">
      <div class="field-group" style="min-width:200px">
        <label>Filter by Category</label>
        <select class="input-field" [(ngModel)]="filterCategory" (ngModelChange)="applyFilters()">
          <option value="all">All Categories</option>
          <option value="Drawings">Drawings</option>
          <option value="Contracts">Contracts</option>
          <option value="Permits">Permits</option>
          <option value="Reports">Reports</option>
          <option value="Invoices">Invoices</option>
          <option value="Safety">Safety</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="field-group" style="min-width:220px">
        <label>Filter by Project</label>
        <select class="input-field" [(ngModel)]="filterProjectId" (ngModelChange)="applyFilters()">
          <option value="all">All Projects</option>
          <option value="none">No specific project</option>
          <option *ngFor="let p of projects" [value]="p._id">{{ p.name }}</option>
        </select>
      </div>
    </div>

    <!-- Document List Table -->
    <div class="table-container">
      <div class="loading-state" *ngIf="loading">Loading document library...</div>

      <table *ngIf="!loading">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Project</th>
            <th>File</th>
            <th>Uploaded By</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let d of filteredDocuments">
            <td>
              <strong style="color:#fff">{{ d.title }}</strong>
              <div *ngIf="d.description" style="font-size:12px;color:#a0a3b1;margin-top:2px">{{ d.description }}</div>
            </td>
            <td>
              <span class="badge" [ngClass]="getBadgeClass(d.category)">{{ d.category }}</span>
            </td>
            <td>{{ d.projectId?.name || '—' }}</td>
            <td>
              <div style="font-size:13px">{{ d.originalName }}</div>
              <div style="font-size:12px;color:#a0a3b1">{{ formatFileSize(d.fileSize) }}</div>
            </td>
            <td>{{ d.uploadedBy?.name || '—' }}</td>
            <td>{{ d.createdAt | date:'shortDate' }}</td>
            <td>
              <div style="display:flex;gap:8px">
                <button class="action-btn" title="Download" (click)="download(d)">⬇️</button>
                <button class="action-btn delete-btn" title="Delete Document" (click)="deleteDocument(d._id!)">🗑️</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="!loading && filteredDocuments.length === 0">
            <td colspan="7" style="text-align:center;color:#6b6f82;padding:40px">
              No documents found. Click "+ Upload Document" to add one.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .form-grid { display: grid; gap: 16px; }
    .field-group { display: flex; flex-direction: column; }
    .field-group label { font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 6px; }
    .input-field {
      padding: 10px 14px; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
      color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;
    }
    .input-field:focus { border-color: #6C63FF; }
    .input-field option { background: #1a1d2e; color: #fff; }
    .loading-state { padding: 40px; text-align: center; color: #6b6f82; }

    .action-btn {
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; color: #fff; padding: 6px 10px; font-size: 13px; cursor: pointer;
      transition: all 0.2s; display: flex; align-items: center; justify-content: center;
    }
    .action-btn:hover { background: rgba(255,255,255,0.15); transform: translateY(-1px); border-color: #6C63FF; color: #6C63FF; }
    .delete-btn:hover { border-color: #FF6B6B; color: #FF6B6B; }

    .badge-info { background: rgba(108,99,255,0.1); color: #9c95ff; border: 1px solid rgba(108,99,255,0.2); }
    .badge-warning { background: rgba(255,193,7,0.1); color: #ffc107; border: 1px solid rgba(255,193,7,0.2); }
    .badge-success { background: rgba(0,191,165,0.1); color: #00BFA5; border: 1px solid rgba(0,191,165,0.2); }
    .badge-danger { background: rgba(255,107,107,0.1); color: #FF6B6B; border: 1px solid rgba(255,107,107,0.2); }
  `]
})
export class DocumentsComponent implements OnInit {
  documents: ProjectDocument[] = [];
  filteredDocuments: ProjectDocument[] = [];
  projects: Project[] = [];

  loading = false;
  showForm = false;
  uploading = false;
  selectedFile: File | null = null;

  filterCategory = 'all';
  filterProjectId = 'all';

  uploadForm: FormGroup;

  constructor(
    private documentService: DocumentService,
    private projectService: ProjectService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      category: ['Drawings', Validators.required],
      projectId: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadProjects();
    this.loadDocuments();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (res) => { this.projects = res.data || []; },
      error: () => { /* project dropdown is optional, fail silently */ }
    });
  }

  loadDocuments() {
    this.loading = true;
    this.documentService.getDocuments().subscribe({
      next: (res) => {
        this.documents = res.data || [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load documents', 'Close', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  applyFilters() {
    this.filteredDocuments = this.documents.filter(d => {
      const categoryMatch = this.filterCategory === 'all' || d.category === this.filterCategory;
      let projectMatch = true;
      if (this.filterProjectId === 'none') {
        projectMatch = !d.projectId;
      } else if (this.filterProjectId !== 'all') {
        projectMatch = d.projectId?._id === this.filterProjectId;
      }
      return categoryMatch && projectMatch;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.resetForm();
  }

  cancelForm() {
    this.showForm = false;
    this.resetForm();
  }

  resetForm() {
    this.uploadForm.reset({ title: '', category: 'Drawings', projectId: '', description: '' });
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length ? input.files[0] : null;
  }

  submitUpload() {
    if (this.uploadForm.invalid || !this.selectedFile) return;

    this.uploading = true;
    const formValue = this.uploadForm.value;
    const formData = new FormData();
    formData.append('title', formValue.title);
    formData.append('category', formValue.category);
    formData.append('description', formValue.description || '');
    if (formValue.projectId) formData.append('projectId', formValue.projectId);
    formData.append('file', this.selectedFile);

    this.documentService.uploadDocument(formData).subscribe({
      next: () => {
        this.snackBar.open('Document uploaded successfully', 'Close', { duration: 3000 });
        this.uploading = false;
        this.showForm = false;
        this.resetForm();
        this.loadDocuments();
      },
      error: (err) => {
        this.snackBar.open(err?.error?.error || 'Failed to upload document', 'Close', { duration: 3000 });
        this.uploading = false;
      }
    });
  }

  download(doc: ProjectDocument) {
    this.documentService.downloadDocument(doc._id!).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = doc.originalName;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => {
        this.snackBar.open('Failed to download document', 'Close', { duration: 3000 });
      }
    });
  }

  deleteDocument(id: string) {
    if (!confirm('Are you sure you want to delete this document? This cannot be undone.')) return;
    this.documentService.deleteDocument(id).subscribe({
      next: () => {
        this.snackBar.open('Document deleted', 'Close', { duration: 3000 });
        this.loadDocuments();
      },
      error: () => {
        this.snackBar.open('Failed to delete document', 'Close', { duration: 3000 });
      }
    });
  }

  formatFileSize(bytes: number): string {
    if (!bytes) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
  }

  getTotalStorage(): number {
    return this.documents.reduce((sum, d) => sum + (d.fileSize || 0), 0);
  }

  getCategoryCount(): number {
    return new Set(this.documents.map(d => d.category)).size;
  }

  getBadgeClass(category: string): string {
    const map: { [key: string]: string } = {
      'Drawings': 'badge-info',
      'Contracts': 'badge-warning',
      'Permits': 'badge-warning',
      'Reports': 'badge-info',
      'Invoices': 'badge-success',
      'Safety': 'badge-danger',
      'Other': 'badge-info'
    };
    return map[category] || 'badge-info';
  }
}
