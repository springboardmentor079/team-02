import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProcurementService, ProcurementOrder } from '../../services/procurement.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-procurement',
  template: `
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <h1>Procurement & Purchase Orders</h1>
          <p>Create and track material supplies, machinery leasing, and vendor invoices.</p>
        </div>
        <button class="btn btn-primary" (click)="toggleForm()">
          {{ showForm && !isEditing ? 'Close' : '+ New Purchase Order' }}
        </button>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total Purchase Orders</div>
        <div class="stat-value" style="color: #9c95ff;">{{ procurements.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">
          {{ getPendingCount() }} Pending | {{ getPaidCount() }} Fully Settled
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Outflow Value</div>
        <div class="stat-value" style="color: #00BFA5;">₹{{ getTotalAmount() | number:'1.0-0':'en-IN' }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Sum of all PO amount structures</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Pending Payments</div>
        <div class="stat-value" style="color: #ffc107;">₹{{ getPendingAmount() | number:'1.0-0':'en-IN' }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Unpaid or pending approvals</div>
      </div>
    </div>

    <!-- Add/Edit PO Form -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px" *ngIf="showForm">
      <h3 style="margin-bottom:18px;font-size:16px;color:#fff">{{ isEditing ? 'Update Purchase Order' : 'Create Purchase Order' }}</h3>
      <form [formGroup]="poForm" (ngSubmit)="savePO()">
        <div class="form-grid">
          <div class="field-group">
            <label>Vendor/Supplier Name *</label>
            <input formControlName="vendorName" placeholder="e.g. Apex Steel Distributors" class="input-field">
          </div>
          <div class="field-group">
            <label>Category *</label>
            <select formControlName="category" class="input-field">
              <option value="Raw Materials">Raw Materials</option>
              <option value="Equipment">Equipment</option>
              <option value="Machinery">Machinery</option>
              <option value="Safety Equipment">Safety Equipment</option>
              <option value="Office Supplies">Office Supplies</option>
            </select>
          </div>
          <div class="field-group">
            <label>Invoice Number *</label>
            <input formControlName="invoiceNo" placeholder="e.g. INV-2026-9042" class="input-field">
          </div>
          <div class="field-group">
            <label>Total Amount (₹) *</label>
            <input type="number" formControlName="totalAmount" placeholder="10000" class="input-field">
          </div>
          <div class="field-group">
            <label>Invoice Date *</label>
            <input type="date" formControlName="date" class="input-field">
          </div>
          <div class="field-group">
            <label>Status *</label>
            <select formControlName="status" class="input-field">
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Shipped">Shipped</option>
              <option value="Received">Received</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
        </div>
        <div class="field-group" style="margin-top:16px">
          <label>Items List & Description *</label>
          <textarea formControlName="items" placeholder="List details: e.g. Reinforcement TMT bars (10 Tons), 500 bags of cement..." class="input-field" style="height:60px;resize:none"></textarea>
        </div>

        <div style="margin-top:20px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" (click)="cancelForm()">Cancel</button>
          <button type="submit" class="btn btn-primary" [disabled]="poForm.invalid || saving">
            {{ saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Create Order' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Status Filter Tabs -->
    <div style="display:flex;gap:12px;margin-bottom:20px">
      <button 
        class="tab-btn" 
        [style.background]="activeFilterTab === 'all' ? 'rgba(108,99,255,0.2)' : 'none'"
        [style.color]="activeFilterTab === 'all' ? '#9c95ff' : '#a0a3b1'"
        [style.border]="activeFilterTab === 'all' ? '1px solid rgba(108,99,255,0.4)' : '1px solid transparent'"
        style="padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-size:13px;transition:all 0.2s"
        (click)="activeFilterTab = 'all'"
      >
        📑 All Orders ({{ procurements.length }})
      </button>
      <button 
        class="tab-btn" 
        [style.background]="activeFilterTab === 'pending' ? 'rgba(255,193,7,0.2)' : 'none'"
        [style.color]="activeFilterTab === 'pending' ? '#ffc107' : '#a0a3b1'"
        [style.border]="activeFilterTab === 'pending' ? '1px solid rgba(255,193,7,0.4)' : '1px solid transparent'"
        style="padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-size:13px;transition:all 0.2s;display:flex;align-items:center;gap:6px"
        (click)="activeFilterTab = 'pending'"
      >
        ⏳ Pending Site Approvals
        <span style="background:#ffc107;color:#000;font-size:10px;font-weight:800;padding:2px 6px;border-radius:10px" *ngIf="getPendingCount() > 0">
          {{ getPendingCount() }}
        </span>
      </button>
      <button 
        class="tab-btn" 
        [style.background]="activeFilterTab === 'settled' ? 'rgba(0,191,165,0.2)' : 'none'"
        [style.color]="activeFilterTab === 'settled' ? '#00BFA5' : '#a0a3b1'"
        [style.border]="activeFilterTab === 'settled' ? '1px solid rgba(0,191,165,0.4)' : '1px solid transparent'"
        style="padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-size:13px;transition:all 0.2s"
        (click)="activeFilterTab = 'settled'"
      >
        ✅ Settled & Paid
      </button>
    </div>

    <!-- PO List Table -->
    <div class="table-container">
      <div class="loading-state" *ngIf="loading">Loading purchase catalog...</div>
      
      <table *ngIf="!loading">
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Vendor</th>
            <th>Category</th>
            <th>Items Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of filteredProcurements">
            <td><strong style="color:#9c95ff">{{ p.invoiceNo }}</strong></td>
            <td><strong style="color:#fff">{{ p.vendorName }}</strong></td>
            <td>{{ p.category }}</td>
            <td style="max-width:240px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap" [title]="p.items">{{ p.items }}</td>
            <td>₹{{ p.totalAmount | number:'1.0-0':'en-IN' }}</td>
            <td>{{ p.date | date:'shortDate' }}</td>
            <td>
              <span class="badge" [ngClass]="getBadgeClass(p.status)">{{ p.status }}</span>
            </td>
            <td>
              <div style="display:flex;gap:6px;align-items:center">
                <button *ngIf="p.status === 'Pending' || p.status === 'Pending Approval'" class="action-btn" style="border-color:#00BFA5;color:#00BFA5" title="Approve PO" (click)="quickUpdateStatus(p, 'Approved')">
                  ✓ Approve
                </button>
                <button *ngIf="p.status === 'Approved'" class="action-btn" style="border-color:#9c95ff;color:#9c95ff" title="Mark Shipped" (click)="quickUpdateStatus(p, 'Shipped')">
                  🚚 Ship
                </button>
                <button *ngIf="p.status === 'Shipped'" class="action-btn" style="border-color:#00BFA5;color:#00BFA5" title="Mark Received" (click)="quickUpdateStatus(p, 'Received')">
                  📦 Received
                </button>
                <button *ngIf="p.status === 'Received'" class="action-btn" style="border-color:#ffc107;color:#ffc107" title="Mark Paid" (click)="quickUpdateStatus(p, 'Paid')">
                  💰 Mark Paid
                </button>
                <button class="action-btn edit-btn" title="Edit PO" (click)="startEdit(p)">✏️</button>
                <button class="action-btn delete-btn" title="Delete PO" (click)="deletePO(p._id!)">🗑️</button>
              </div>
            </td>
          </tr>
          <tr *ngIf="!loading && filteredProcurements.length === 0">
            <td colspan="8" style="text-align:center;color:#6b6f82;padding:40px">
              No purchase orders match the selected filter tab.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .form-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
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
    .action-btn:hover { background: rgba(255,255,255,0.15); transform: translateY(-1px); }
    .edit-btn:hover { border-color: #6C63FF; color: #6C63FF; }
    .delete-btn:hover { border-color: #FF6B6B; color: #FF6B6B; }

    .badge-info { background: rgba(108,99,255,0.1); color: #9c95ff; border: 1px solid rgba(108,99,255,0.2); }
    .badge-warning { background: rgba(255,193,7,0.1); color: #ffc107; border: 1px solid rgba(255,193,7,0.2); }
    .badge-success { background: rgba(0,191,165,0.1); color: #00BFA5; border: 1px solid rgba(0,191,165,0.2); }
    .badge-danger { background: rgba(255,107,107,0.1); color: #FF6B6B; border: 1px solid rgba(255,107,107,0.2); }
  `]
})
export class ProcurementComponent implements OnInit {
  procurements: ProcurementOrder[] = [];
  activeFilterTab: 'all' | 'pending' | 'settled' = 'all';
  loading = true;
  saving = false;
  showForm = false;
  isEditing = false;
  editingPOId = '';
  poForm: FormGroup;

  get filteredProcurements(): ProcurementOrder[] {
    if (this.activeFilterTab === 'pending') {
      return this.procurements.filter(p => p.status === 'Pending' || p.status === 'Pending Approval');
    }
    if (this.activeFilterTab === 'settled') {
      return this.procurements.filter(p => p.status === 'Paid' || p.status === 'Approved' || p.status === 'Received');
    }
    return this.procurements;
  }

  constructor(private procurementService: ProcurementService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.poForm = this.fb.group({
      vendorName: ['', Validators.required],
      category: ['Raw Materials', Validators.required],
      items: ['', Validators.required],
      totalAmount: [0, [Validators.required, Validators.min(1)]],
      status: ['Pending', Validators.required],
      invoiceNo: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadProcurements();
  }

  loadProcurements() {
    this.loading = true;
    this.procurementService.getProcurements().subscribe({
      next: (res) => {
        this.procurements = res.success ? res.data : (Array.isArray(res) ? res : res.procurements || []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Failed to load purchase catalog', 'Close', { duration: 3000 });
      }
    });
  }

  toggleForm() {
    if (this.showForm && !this.isEditing) {
      this.showForm = false;
    } else {
      this.isEditing = false;
      this.editingPOId = '';
      this.poForm.reset({
        category: 'Raw Materials',
        status: 'Pending',
        totalAmount: 0,
        date: new Date().toISOString().split('T')[0]
      });
      this.showForm = true;
    }
  }

  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.editingPOId = '';
    this.poForm.reset();
  }

  startEdit(po: ProcurementOrder) {
    this.isEditing = true;
    this.editingPOId = po._id || '';
    this.showForm = true;

    const formattedDate = po.date ? new Date(po.date).toISOString().split('T')[0] : '';

    this.poForm.patchValue({
      vendorName: po.vendorName,
      category: po.category,
      items: po.items,
      totalAmount: po.totalAmount,
      status: po.status,
      invoiceNo: po.invoiceNo,
      date: formattedDate
    });
  }

  savePO() {
    if (this.poForm.invalid) return;
    this.saving = true;

    if (this.isEditing) {
      this.procurementService.updateProcurement(this.editingPOId, this.poForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.isEditing = false;
          this.editingPOId = '';
          this.poForm.reset();
          this.loadProcurements();
          this.snackBar.open('Purchase order updated', 'Close', { duration: 3000 });
        },
        error: (err) => {
          this.saving = false;
          this.snackBar.open(err?.error?.message || 'Failed to update order', 'Close', { duration: 3000 });
        }
      });
    } else {
      this.procurementService.createProcurement(this.poForm.value).subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.poForm.reset();
          this.loadProcurements();
          this.snackBar.open('Purchase order created', 'Close', { duration: 3000 });
        },
        error: (err) => {
          this.saving = false;
          this.snackBar.open(err?.error?.message || 'Failed to create order. Check invoice no duplicates', 'Close', { duration: 3000 });
        }
      });
    }
  }

  deletePO(id: string) {
    if (!confirm('Are you sure you want to delete this purchase order?')) return;
    this.procurementService.deleteProcurement(id).subscribe({
      next: () => {
        this.loadProcurements();
        this.snackBar.open('Purchase order deleted', 'Close', { duration: 3000 });
      },
      error: () => {
        this.snackBar.open('Failed to delete purchase order', 'Close', { duration: 3000 });
      }
    });
  }

  quickUpdateStatus(po: ProcurementOrder, newStatus: string) {
    if (!po._id) return;
    this.procurementService.updateProcurement(po._id, { status: newStatus }).subscribe({
      next: () => {
        this.snackBar.open(`PO #${po.invoiceNo} status updated to ${newStatus}`, 'Close', { duration: 3000 });
        this.loadProcurements();
      },
      error: (err) => {
        this.snackBar.open(`Failed to update PO status: ${err?.error?.message || 'Error'}`, 'Close', { duration: 3000 });
      }
    });
  }

  // --- Statistics Helpers ---
  getPendingCount(): number {
    return this.procurements.filter(p => p.status !== 'Paid').length;
  }

  getPaidCount(): number {
    return this.procurements.filter(p => p.status === 'Paid').length;
  }

  getTotalAmount(): number {
    return this.procurements.reduce((sum, p) => sum + (p.totalAmount || 0), 0);
  }

  getPendingAmount(): number {
    return this.procurements
      .filter(p => p.status !== 'Paid')
      .reduce((sum, p) => sum + (p.totalAmount || 0), 0);
  }

  getBadgeClass(status: string): string {
    const map: Record<string, string> = {
      'pending': 'badge-warning',
      'approved': 'badge-info',
      'shipped': 'badge-info',
      'received': 'badge-success',
      'paid': 'badge-success'
    };
    return map[status?.toLowerCase()] || 'badge-info';
  }
}
