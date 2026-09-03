import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService, DocumentItem, DocumentStats } from '../../services/document.service';
import { ProjectService, Project } from '../../services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-documents',
  template: `
    <div class="documents-page">
      <!-- Page Header -->
      <div class="page-header">
        <div>
          <h1>Document Vault <span class="gradient-text">& Repository</span> 📁</h1>
          <p>Centralized storage for architectural blueprints, municipal permits, site contracts, & compliance certificates.</p>
        </div>
        <div class="header-actions">
          <button class="btn btn-primary" (click)="openUploadModal()">
            <mat-icon>cloud_upload</mat-icon> + Upload Document
          </button>
        </div>
      </div>

      <!-- Quick KPI Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Total Documents</span>
            <div class="icon-circle" style="background:rgba(108,99,255,0.15);color:#9c95ff">
              <mat-icon>folder</mat-icon>
            </div>
          </div>
          <div class="stat-value" style="color:#9c95ff">{{ stats.total || documents.length }}</div>
          <div class="stat-sub">Centralized Construction Repository</div>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Blueprints & CAD</span>
            <div class="icon-circle" style="background:rgba(0,191,165,0.15);color:#00BFA5">
              <mat-icon>architecture</mat-icon>
            </div>
          </div>
          <div class="stat-value" style="color:#00BFA5">{{ stats.blueprints || 0 }}</div>
          <div class="stat-sub">Active Structural Drawings</div>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Contracts & Agreements</span>
            <div class="icon-circle" style="background:rgba(255,193,7,0.15);color:#ffc107">
              <mat-icon>gavel</mat-icon>
            </div>
          </div>
          <div class="stat-value" style="color:#ffc107">{{ stats.contracts || 0 }}</div>
          <div class="stat-sub">Vendor & Legal Contracts</div>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Permits & Safety</span>
            <div class="icon-circle" style="background:rgba(255,107,107,0.15);color:#FF6B6B">
              <mat-icon>verified_user</mat-icon>
            </div>
          </div>
          <div class="stat-value" style="color:#FF6B6B">{{ stats.permits || 0 }}</div>
          <div class="stat-sub">Municipal & OSHA Approvals</div>
        </div>
      </div>

      <!-- Filter Controls Toolbar -->
      <div class="toolbar-card">
        <div class="category-tabs">
          <button 
            class="cat-tab" 
            [class.active]="selectedCategory === 'all'" 
            (click)="selectCategory('all')"
          >
            📂 All Files ({{ documents.length }})
          </button>
          <button 
            class="cat-tab" 
            [class.active]="selectedCategory === 'Blueprints & Drawings'" 
            (click)="selectCategory('Blueprints & Drawings')"
          >
            📐 Blueprints
          </button>
          <button 
            class="cat-tab" 
            [class.active]="selectedCategory === 'Contracts & Legal'" 
            (click)="selectCategory('Contracts & Legal')"
          >
            📜 Contracts
          </button>
          <button 
            class="cat-tab" 
            [class.active]="selectedCategory === 'Permits & Approvals'" 
            (click)="selectCategory('Permits & Approvals')"
          >
            🏛 Permits
          </button>
          <button 
            class="cat-tab" 
            [class.active]="selectedCategory === 'Safety Compliance'" 
            (click)="selectCategory('Safety Compliance')"
          >
            🩵 Safety & Audit
          </button>
          <button 
            class="cat-tab" 
            [class.active]="selectedCategory === 'Site Photos'" 
            (click)="selectCategory('Site Photos')"
          >
            📷 Site Photos
          </button>
        </div>

        <div class="filter-actions-row">
          <div class="search-wrap">
            <mat-icon>search</mat-icon>
            <input 
              type="text" 
              placeholder="Search by title, tag, description..." 
              [(ngModel)]="searchQuery"
              (keyup.enter)="loadDocuments()"
            />
          </div>

          <div class="view-toggle">
            <button 
              class="icon-btn" 
              [class.active]="viewMode === 'grid'" 
              (click)="viewMode = 'grid'"
              title="Grid View"
            >
              <mat-icon>grid_view</mat-icon>
            </button>
            <button 
              class="icon-btn" 
              [class.active]="viewMode === 'list'" 
              (click)="viewMode = 'list'"
              title="Table View"
            >
              <mat-icon>format_list_bulleted</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div class="loading-state" *ngIf="loading">
        <mat-icon class="spin">sync</mat-icon> Loading Document Vault...
      </div>

      <!-- Empty State -->
      <div class="empty-state glass-card" *ngIf="!loading && documents.length === 0">
        <mat-icon style="font-size:48px;width:48px;height:48px;color:#6b6f82">folder_off</mat-icon>
        <h3>No Documents Found</h3>
        <p>No document files match your current category or search criteria.</p>
        <button class="btn btn-primary" (click)="openUploadModal()">+ Upload First Document</button>
      </div>

      <!-- GRID VIEW -->
      <div class="docs-grid" *ngIf="!loading && viewMode === 'grid' && documents.length > 0">
        <div class="doc-card glass-card" *ngFor="let doc of documents">
          <!-- Thumbnail / Badge Header -->
          <div class="card-thumb" [ngClass]="doc.fileType.toLowerCase()">
            <img *ngIf="doc.fileUrl && isImage(doc.fileUrl)" [src]="doc.fileUrl" alt="Thumbnail" />
            <div class="type-icon-wrapper" *ngIf="!doc.fileUrl || !isImage(doc.fileUrl)">
              <mat-icon>{{ getFileTypeIcon(doc.fileType) }}</mat-icon>
              <span class="file-type-tag">{{ doc.fileType }}</span>
            </div>
            <span class="version-badge">{{ doc.version || 'v1.0' }}</span>
          </div>

          <!-- Card Content -->
          <div class="card-body">
            <div class="doc-cat-tag">{{ doc.category }}</div>
            <h3 class="doc-title" [title]="doc.title">{{ doc.title }}</h3>
            <p class="doc-desc">{{ doc.description || 'No detailed description provided.' }}</p>

            <!-- Tags -->
            <div class="tags-container" *ngIf="doc.tags && doc.tags.length > 0">
              <span class="tag-chip" *ngFor="let tag of doc.tags.slice(0, 3)">#{{ tag }}</span>
            </div>

            <!-- Footer Details -->
            <div class="doc-meta">
              <span><mat-icon style="font-size:14px">person</mat-icon> {{ doc.uploadedBy || 'Engineer' }}</span>
              <span><mat-icon style="font-size:14px">sd_storage</mat-icon> {{ doc.fileSize || '2.5 MB' }}</span>
            </div>

            <!-- Action buttons -->
            <div class="card-actions">
              <button class="btn-action preview-btn" (click)="previewDoc(doc)">
                <mat-icon>visibility</mat-icon> Preview
              </button>
              <a [href]="doc.fileUrl" target="_blank" download class="btn-action download-btn">
                <mat-icon>download</mat-icon> Download
              </a>
              <button class="btn-action delete-btn" (click)="deleteDoc(doc)">
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- LIST / TABLE VIEW -->
      <div class="table-container glass-card" *ngIf="!loading && viewMode === 'list' && documents.length > 0">
        <table>
          <thead>
            <tr>
              <th>Document</th>
              <th>Category</th>
              <th>Type</th>
              <th>Size</th>
              <th>Version</th>
              <th>Uploaded By</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let doc of documents">
              <td>
                <div class="doc-title-cell">
                  <mat-icon [style.color]="getTypeColor(doc.fileType)">{{ getFileTypeIcon(doc.fileType) }}</mat-icon>
                  <div>
                    <div class="main-title">{{ doc.title }}</div>
                    <div class="sub-desc">{{ doc.description }}</div>
                  </div>
                </div>
              </td>
              <td><span class="badge-cat">{{ doc.category }}</span></td>
              <td><span class="type-pill" [ngClass]="doc.fileType.toLowerCase()">{{ doc.fileType }}</span></td>
              <td>{{ doc.fileSize || '2.5 MB' }}</td>
              <td><span class="version-tag">{{ doc.version || 'v1.0' }}</span></td>
              <td>{{ doc.uploadedBy || 'Admin' }}</td>
              <td>{{ doc.createdAt | date:'mediumDate' }}</td>
              <td>
                <div class="table-actions">
                  <button class="icon-action" (click)="previewDoc(doc)" title="Preview"><mat-icon>visibility</mat-icon></button>
                  <a [href]="doc.fileUrl" target="_blank" download class="icon-action" title="Download"><mat-icon>download</mat-icon></a>
                  <button class="icon-action danger" (click)="deleteDoc(doc)" title="Delete"><mat-icon>delete</mat-icon></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- UPLOAD DOCUMENT MODAL -->
      <div class="modal-overlay" *ngIf="showUploadModal" (click)="closeUploadModal()">
        <div class="modal-card glass-card" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>+ Upload Construction Document</h3>
            <button class="close-btn" (click)="closeUploadModal()"><mat-icon>close</mat-icon></button>
          </div>
          <form [formGroup]="uploadForm" (ngSubmit)="saveDocument()">
            <div class="form-grid">
              <div class="field-group full-width">
                <label>Document Title *</label>
                <input formControlName="title" placeholder="e.g. Structural Blueprint Level 4 Foundation" class="input-field" />
              </div>

              <div class="field-group">
                <label>Category *</label>
                <select formControlName="category" class="input-field">
                  <option value="Blueprints & Drawings">Blueprints & Drawings</option>
                  <option value="Contracts & Legal">Contracts & Legal</option>
                  <option value="Permits & Approvals">Permits & Approvals</option>
                  <option value="Safety Compliance">Safety Compliance</option>
                  <option value="Invoices & Receipts">Invoices & Receipts</option>
                  <option value="Site Photos">Site Photos</option>
                  <option value="Specifications">Specifications</option>
                </select>
              </div>

              <div class="field-group">
                <label>File Type *</label>
                <select formControlName="fileType" class="input-field">
                  <option value="PDF">PDF Document</option>
                  <option value="DWG">DWG AutoCAD Drawing</option>
                  <option value="PNG">PNG Image</option>
                  <option value="JPG">JPG Photograph</option>
                  <option value="DOCX">DOCX Word Contract</option>
                  <option value="XLSX">XLSX Excel Spreadsheet</option>
                </select>
              </div>

              <div class="field-group">
                <label>Version Tag</label>
                <input formControlName="version" placeholder="e.g. v1.0" class="input-field" />
              </div>

              <div class="field-group">
                <label>Associated Project</label>
                <select formControlName="projectId" class="input-field">
                  <option value="">-- Unlinked / General --</option>
                  <option *ngFor="let p of projects" [value]="p._id">{{ p.name }}</option>
                </select>
              </div>

              <div class="field-group full-width">
                <label>File URL / Base64 Document Link *</label>
                <input formControlName="fileUrl" placeholder="https://... or select sample file" class="input-field" />
              </div>

              <div class="field-group full-width">
                <label>Description & Notes</label>
                <textarea formControlName="description" rows="2" placeholder="Brief technical summary or compliance remarks..." class="input-field"></textarea>
              </div>

              <div class="field-group full-width">
                <label>Tags (Comma Separated)</label>
                <input formControlName="tags" placeholder="e.g. Blueprint, Sector 4, Foundation, Concrete" class="input-field" />
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-outline" (click)="closeUploadModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="uploadForm.invalid || saving">
                {{ saving ? 'Saving Document...' : 'Upload & Register Document' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- PREVIEW MODAL -->
      <div class="modal-overlay" *ngIf="activePreviewDoc" (click)="activePreviewDoc = null">
        <div class="modal-card preview-card glass-card" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <div>
              <span class="preview-cat">{{ activePreviewDoc.category }}</span>
              <h3>{{ activePreviewDoc.title }}</h3>
            </div>
            <button class="close-btn" (click)="activePreviewDoc = null"><mat-icon>close</mat-icon></button>
          </div>

          <div class="preview-body">
            <div class="preview-media" *ngIf="isImage(activePreviewDoc.fileUrl)">
              <img [src]="activePreviewDoc.fileUrl" alt="Document Preview" />
            </div>
            <div class="preview-placeholder" *ngIf="!isImage(activePreviewDoc.fileUrl)">
              <mat-icon style="font-size:64px;width:64px;height:64px;color:#9c95ff">
                {{ getFileTypeIcon(activePreviewDoc.fileType) }}
              </mat-icon>
              <h4>{{ activePreviewDoc.fileType }} Document Viewer</h4>
              <p>Document Vault Reference Code: {{ activePreviewDoc._id }}</p>
            </div>

            <div class="preview-details">
              <p><strong>Description:</strong> {{ activePreviewDoc.description || 'No extra remarks.' }}</p>
              <div class="meta-row">
                <span><strong>Uploaded By:</strong> {{ activePreviewDoc.uploadedBy }}</span>
                <span><strong>Version:</strong> {{ activePreviewDoc.version || 'v1.0' }}</span>
                <span><strong>File Size:</strong> {{ activePreviewDoc.fileSize || '2.4 MB' }}</span>
                <span><strong>Status:</strong> {{ activePreviewDoc.status }}</span>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <a [href]="activePreviewDoc.fileUrl" target="_blank" download class="btn btn-primary">
              <mat-icon>download</mat-icon> Download Original File
            </a>
            <button class="btn btn-outline" (click)="activePreviewDoc = null">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .documents-page {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }
    .page-header h1 { font-size: 26px; font-weight: 800; color: #fff; margin: 0; }
    .page-header p { color: #a0a3b1; margin: 4px 0 0 0; font-size: 14px; }
    .gradient-text {
      background: linear-gradient(135deg, #9c95ff, #00BFA5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .stat-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 20px;
    }
    .stat-header { display: flex; align-items: center; justify-content: space-between; }
    .stat-label { font-size: 13px; color: #a0a3b1; font-weight: 600; }
    .icon-circle {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
    }
    .stat-value { font-size: 28px; font-weight: 800; margin: 12px 0 4px 0; }
    .stat-sub { font-size: 12px; color: #6b6f82; }

    .toolbar-card {
      background: #1a1d2e;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .category-tabs {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
    }
    .cat-tab {
      background: none;
      border: 1px solid transparent;
      color: #a0a3b1;
      padding: 8px 14px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .cat-tab:hover { color: #fff; background: rgba(255,255,255,0.04); }
    .cat-tab.active {
      background: rgba(108,99,255,0.2);
      color: #9c95ff;
      border-color: rgba(108,99,255,0.4);
    }

    .filter-actions-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .search-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 8px 14px;
      flex: 1;
      min-width: 260px;
    }
    .search-wrap mat-icon { color: #6b6f82; }
    .search-wrap input {
      background: none; border: none; outline: none; color: #fff; font-size: 13px; width: 100%;
    }

    .view-toggle { display: flex; gap: 4px; background: rgba(255,255,255,0.04); padding: 4px; border-radius: 10px; }
    .icon-btn {
      background: none; border: none; color: #6b6f82; padding: 6px; border-radius: 6px; cursor: pointer; display: flex;
    }
    .icon-btn.active { background: rgba(108,99,255,0.3); color: #fff; }

    .loading-state, .empty-state {
      text-align: center; padding: 40px; color: #a0a3b1; border-radius: 16px;
    }

    /* Grid view */
    .docs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    .doc-card {
      background: #1a1d2e;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, border-color 0.2s;
    }
    .doc-card:hover {
      transform: translateY(-4px);
      border-color: rgba(108,99,255,0.4);
    }
    .card-thumb {
      height: 140px;
      background: rgba(0,0,0,0.3);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .card-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .type-icon-wrapper {
      display: flex; flex-direction: column; align-items: center; gap: 4px; color: #9c95ff;
    }
    .type-icon-wrapper mat-icon { font-size: 42px; width: 42px; height: 42px; }
    .file-type-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
    .version-badge {
      position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
      color: #00BFA5; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 8px;
    }

    .card-body { padding: 18px; flex: 1; display: flex; flex-direction: column; }
    .doc-cat-tag { font-size: 11px; color: #9c95ff; font-weight: 700; text-transform: uppercase; margin-bottom: 6px; }
    .doc-title { font-size: 15px; font-weight: 700; color: #fff; margin: 0 0 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .doc-desc { font-size: 12px; color: #a0a3b1; margin: 0 0 12px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

    .tags-container { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; }
    .tag-chip { font-size: 10px; background: rgba(255,255,255,0.06); color: #a0a3b1; padding: 2px 6px; border-radius: 6px; }

    .doc-meta {
      margin-top: auto; display: flex; justify-content: space-between; font-size: 11px; color: #6b6f82; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06);
    }
    .doc-meta span { display: flex; align-items: center; gap: 4px; }

    .card-actions { display: flex; gap: 8px; margin-top: 14px; }
    .btn-action {
      flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #fff;
      padding: 8px; border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; text-decoration: none;
    }
    .btn-action:hover { background: rgba(108,99,255,0.2); color: #9c95ff; border-color: rgba(108,99,255,0.4); }
    .delete-btn { flex: 0 0 36px; color: #FF6B6B; }
    .delete-btn:hover { background: rgba(255,107,107,0.2); color: #FF6B6B; border-color: rgba(255,107,107,0.4); }

    /* Table view */
    .table-container { background: #1a1d2e; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th { padding: 14px 20px; color: #6b6f82; font-weight: 700; font-size: 12px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.08); }
    td { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #a0a3b1; font-size: 13px; }
    .doc-title-cell { display: flex; align-items: center; gap: 12px; }
    .main-title { color: #fff; font-weight: 600; }
    .sub-desc { font-size: 11px; color: #6b6f82; }
    .badge-cat { font-size: 11px; font-weight: 700; color: #9c95ff; background: rgba(108,99,255,0.15); padding: 4px 8px; border-radius: 6px; }
    .type-pill { font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.1); color: #fff; }
    .version-tag { font-size: 11px; color: #00BFA5; font-weight: 700; }
    .table-actions { display: flex; gap: 6px; }
    .icon-action { background: none; border: none; color: #a0a3b1; cursor: pointer; padding: 4px; border-radius: 4px; }
    .icon-action:hover { color: #fff; background: rgba(255,255,255,0.1); }
    .icon-action.danger:hover { color: #FF6B6B; background: rgba(255,107,107,0.2); }

    /* Modals */
    .modal-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px;
    }
    .modal-card {
      background: #1a1d2e; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 28px; width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto;
    }
    .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .modal-header h3 { margin: 0; color: #fff; font-size: 18px; font-weight: 700; }
    .close-btn { background: none; border: none; color: #6b6f82; cursor: pointer; }

    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .full-width { grid-column: span 2; }
    .field-group { display: flex; flex-direction: column; gap: 6px; }
    .field-group label { font-size: 12px; font-weight: 600; color: #a0a3b1; }
    .input-field {
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px 14px; color: #fff; font-size: 13px; outline: none;
    }
    .input-field:focus { border-color: #6C63FF; }

    .modal-footer { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }

    /* Preview card */
    .preview-card { max-width: 700px; }
    .preview-cat { font-size: 11px; font-weight: 700; color: #9c95ff; text-transform: uppercase; }
    .preview-media img { width: 100%; max-height: 320px; object-fit: contain; border-radius: 12px; background: #000; margin-bottom: 16px; }
    .preview-placeholder {
      background: rgba(0,0,0,0.3); border: 1px dashed rgba(255,255,255,0.15); border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 16px;
    }
    .preview-details { color: #a0a3b1; font-size: 13px; line-height: 1.5; }
    .meta-row { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 12px; font-size: 12px; color: #6b6f82; }

    .spin { animation: spin 1s linear infinite; }
    @keyframes spin { 100% { transform: rotate(360deg); } }
  `]
})
export class DocumentsComponent implements OnInit {
  documents: DocumentItem[] = [];
  stats: DocumentStats = { total: 0, blueprints: 0, contracts: 0, permits: 0, invoices: 0, active: 0, underReview: 0 };
  projects: Project[] = [];
  
  loading = false;
  saving = false;
  viewMode: 'grid' | 'list' = 'grid';
  selectedCategory = 'all';
  searchQuery = '';

  showUploadModal = false;
  activePreviewDoc: DocumentItem | null = null;

  uploadForm: FormGroup;

  constructor(
    private documentService: DocumentService,
    private projectService: ProjectService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      category: ['Blueprints & Drawings', Validators.required],
      description: [''],
      fileType: ['PDF', Validators.required],
      version: ['v1.0'],
      projectId: [''],
      fileUrl: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80', Validators.required],
      tags: ['']
    });
  }

  ngOnInit(): void {
    this.loadDocuments();
    this.loadStats();
    this.loadProjects();
  }

  loadDocuments(): void {
    this.loading = true;
    this.documentService.getDocuments({
      category: this.selectedCategory,
      search: this.searchQuery
    }).subscribe({
      next: (res) => {
        this.documents = res.data || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading documents:', err);
        this.loading = false;
      }
    });
  }

  loadStats(): void {
    this.documentService.getStats().subscribe({
      next: (res) => {
        this.stats = res.data;
      }
    });
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (res) => {
        this.projects = res.data || [];
      }
    });
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
    this.loadDocuments();
  }

  openUploadModal(): void {
    this.showUploadModal = true;
  }

  closeUploadModal(): void {
    this.showUploadModal = false;
    this.uploadForm.reset({
      category: 'Blueprints & Drawings',
      fileType: 'PDF',
      version: 'v1.0',
      fileUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
    });
  }

  saveDocument(): void {
    if (this.uploadForm.invalid) return;
    this.saving = true;

    const val = this.uploadForm.value;
    const tagsArray = val.tags ? val.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0) : [];

    const docPayload: Partial<DocumentItem> = {
      title: val.title,
      category: val.category,
      description: val.description,
      fileType: val.fileType,
      version: val.version || 'v1.0',
      projectId: val.projectId || undefined,
      fileUrl: val.fileUrl,
      fileSize: val.fileType === 'DWG' ? '18.4 MB' : '3.6 MB',
      uploadedBy: 'Site Engineer',
      status: 'Active',
      tags: tagsArray
    };

    this.documentService.createDocument(docPayload).subscribe({
      next: () => {
        this.saving = false;
        this.snackBar.open('Document successfully uploaded & registered to vault!', 'Close', { duration: 3000 });
        this.closeUploadModal();
        this.loadDocuments();
        this.loadStats();
      },
      error: (err) => {
        this.saving = false;
        this.snackBar.open(`Error: ${err.message}`, 'Close', { duration: 4000 });
      }
    });
  }

  previewDoc(doc: DocumentItem): void {
    this.activePreviewDoc = doc;
  }

  deleteDoc(doc: DocumentItem): void {
    if (!doc._id) return;
    if (confirm(`Are you sure you want to delete "${doc.title}" from the document vault?`)) {
      this.documentService.deleteDocument(doc._id).subscribe({
        next: () => {
          this.snackBar.open('Document removed from vault.', 'Close', { duration: 3000 });
          this.loadDocuments();
          this.loadStats();
        }
      });
    }
  }

  isImage(url: string): boolean {
    if (!url) return false;
    return url.match(/\.(jpeg|jpg|gif|png|webp)/i) !== null || url.includes('unsplash');
  }

  getFileTypeIcon(type: string): string {
    switch (type?.toUpperCase()) {
      case 'PDF': return 'picture_as_pdf';
      case 'DWG': return 'architecture';
      case 'PNG':
      case 'JPG': return 'image';
      case 'DOCX': return 'description';
      case 'XLSX': return 'table_chart';
      default: return 'insert_drive_file';
    }
  }

  getTypeColor(type: string): string {
    switch (type?.toUpperCase()) {
      case 'PDF': return '#FF6B6B';
      case 'DWG': return '#00BFA5';
      case 'PNG':
      case 'JPG': return '#9c95ff';
      case 'DOCX': return '#2196f3';
      case 'XLSX': return '#4caf50';
      default: return '#a0a3b1';
    }
  }
}
