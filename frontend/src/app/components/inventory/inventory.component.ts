import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService, InventoryItem } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  template: `
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <h1>Material & Inventory</h1>
          <p>Track construction materials, safety thresholds, and log stock consumption.</p>
        </div>
        <button class="btn btn-primary" (click)="toggleAddForm()">
          {{ showAddForm ? 'Close Form' : '+ Register Material' }}
        </button>
      </div>
    </div>

    <!-- Stats Summary Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Material Types</div>
        <div class="stat-value" style="color: #9c95ff;">{{ inventoryItems.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Active items in storage catalog</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Low Stock Alerts</div>
        <div class="stat-value" style="color: #FF6B6B;">{{ getLowStockCount() }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Items below safe buffer limit</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Inventory Value</div>
        <div class="stat-value" style="color: #00BFA5;">₹{{ getInventoryValue().toLocaleString('en-IN') }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Cumulative catalog cost value</div>
      </div>
    </div>

    <!-- Add Material Form Overlay -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px" *ngIf="showAddForm">
      <h3 style="margin-bottom:18px;font-size:15px;color:#fff">Register New Material</h3>
      <form [formGroup]="materialForm" (ngSubmit)="saveMaterial()">
        <div class="form-grid">
          <div class="field-group">
            <label>Material Name *</label>
            <input formControlName="name" placeholder="e.g. Portland Cement (Grade 53)" class="input-field">
          </div>
          <div class="field-group">
            <label>Category *</label>
            <select formControlName="category" class="input-field">
              <option value="Cement">Cement</option>
              <option value="Steel">Steel</option>
              <option value="Bricks">Bricks</option>
              <option value="Sand">Sand</option>
              <option value="Concrete">Concrete</option>
              <option value="Electrical Materials">Electrical Materials</option>
              <option value="Plumbing Materials">Plumbing Materials</option>
            </select>
          </div>
          <div class="field-group">
            <label>Initial Quantity *</label>
            <input type="number" formControlName="quantity" placeholder="e.g. 500" class="input-field" min="0">
          </div>
          <div class="field-group">
            <label>Unit of Measure *</label>
            <input formControlName="unit" placeholder="e.g. Bags, Tons, Cu.m, Coils" class="input-field">
          </div>
          <div class="field-group">
            <label>Safety Threshold Limit *</label>
            <input type="number" formControlName="threshold" placeholder="e.g. 50" class="input-field" min="0">
          </div>
          <div class="field-group">
            <label>Cost Per Unit (₹) *</label>
            <input type="number" formControlName="costPerUnit" placeholder="e.g. 350" class="input-field" min="0">
          </div>
        </div>
        <div style="margin-top:16px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" style="padding:8px 16px;font-size:13px" (click)="showAddForm=false">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px" [disabled]="materialForm.invalid || saving">
            {{ saving ? 'Registering...' : 'Register Item' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Filtering & Searching -->
    <div style="display:flex;gap:16px;margin-bottom:24px;align-items:center;flex-wrap:wrap">
      <input type="text" placeholder="🔍 Search material..." (input)="onSearchChange($event)" class="input-field" style="max-width:300px;padding:8px 12px;flex:1">
      <select (change)="onFilterChange($event)" class="input-field" style="max-width:200px;padding:8px 12px">
        <option value="">All Categories</option>
        <option value="Cement">Cement</option>
        <option value="Steel">Steel</option>
        <option value="Bricks">Bricks</option>
        <option value="Sand">Sand</option>
        <option value="Concrete">Concrete</option>
        <option value="Electrical Materials">Electrical Materials</option>
        <option value="Plumbing Materials">Plumbing Materials</option>
      </select>
    </div>

    <!-- Inventory table -->
    <div class="table-container">
      <div class="loading-state" *ngIf="loading">Loading materials from warehouse database...</div>
      <table *ngIf="!loading">
        <thead>
          <tr>
            <th>Material Name</th>
            <th>Category</th>
            <th>Safety Threshold</th>
            <th>Current Level</th>
            <th>Status</th>
            <th>Unit Cost</th>
            <th>Total Valuation</th>
            <th style="text-align:center">Stock Adjustments</th>
            <th style="text-align:center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of filteredItems">
            <td><strong style="color: #fff;">{{ item.name }}</strong></td>
            <td><span class="badge badge-info" style="font-size:10px">{{ item.category }}</span></td>
            <td>{{ item.threshold }} {{ item.unit }}</td>
            <td>
              <div style="display:flex;align-items:center;gap:10px">
                <span style="font-weight:700;color:#fff;font-family:monospace;font-size:15px">{{ item.quantity }}</span>
                <span style="font-size:12px;color:#a0a3b1">{{ item.unit }}</span>
              </div>
              <div class="progress-bar" style="height:6px;width:130px;background:rgba(255,255,255,0.05);margin-top:5px;border-radius:3px;overflow:hidden">
                <div class="progress-fill" [style.width.%]="getStockFillPercentage(item)" [style.background]="getProgressBarColor(item)"></div>
              </div>
            </td>
            <td>
              <span class="badge" [ngClass]="getBadgeClass(item)">
                {{ getStatusText(item) }}
              </span>
            </td>
            <td>₹{{ item.costPerUnit }}</td>
            <td>₹{{ (item.quantity * item.costPerUnit).toLocaleString('en-IN') }}</td>
            <td style="width:280px">
              <!-- Quick Adjust Action -->
              <div *ngIf="adjustingItemId !== item._id" style="display:flex;gap:8px;justify-content:center">
                <button class="action-btn edit-btn" style="padding:4px 8px" (click)="startAdjustment(item, 'receive')">📥 Receive</button>
                <button class="action-btn delete-btn" style="padding:4px 8px" (click)="startAdjustment(item, 'consume')">📤 Consume</button>
              </div>
              
              <!-- Inline form -->
              <div *ngIf="adjustingItemId === item._id" style="display:flex;gap:6px;align-items:center;justify-content:center">
                <span style="font-size:11px;color:#a0a3b1">{{ adjustmentType === 'receive' ? 'Recv Amt:' : 'Cons Amt:' }}</span>
                <input type="number" #adjustQty class="input-field" style="padding:4px 6px;width:75px;height:28px;font-size:12px;background:rgba(0,0,0,0.3)" min="1" placeholder="Qty">
                <button class="action-btn edit-btn" style="padding:4px 8px;height:28px" (click)="submitAdjustment(item, adjustQty.value)">Save</button>
                <button class="action-btn" style="padding:4px 6px;height:28px;border-color:transparent;color:#FF6B6B" (click)="cancelAdjustment()">✕</button>
              </div>
            </td>
            <td style="width:60px;text-align:center">
              <button (click)="deleteItem(item._id!)" style="background:none;border:none;color:#FF6B6B;cursor:pointer;font-size:16px" title="Delete Material">🗑️</button>
            </td>
          </tr>
          <tr *ngIf="filteredItems.length === 0">
            <td colspan="9" style="text-align:center;color:#6b6f82;padding:32px">No inventory materials match the filters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .field-group {
      display: flex;
      flex-direction: column;
    }
    .field-group label {
      font-size: 12px;
      font-weight: 600;
      color: #a0a3b1;
      margin-bottom: 6px;
    }
    .input-field {
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: #fff;
      font-size: 13px;
      outline: none;
      transition: all 0.2s;
    }
    .input-field:focus {
      border-color: #6C63FF;
    }
    .input-field option {
      background: #1a1d2e;
      color: #fff;
    }
    .action-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
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
      background: rgba(255, 255, 255, 0.12);
    }
    .edit-btn:hover {
      border-color: #00BFA5;
      color: #00BFA5;
    }
    .delete-btn:hover {
      border-color: #FF6B6B;
      color: #FF6B6B;
    }
    .progress-fill {
      height: 100%;
      transition: width 0.4s ease;
    }
    .loading-state {
      padding: 40px;
      text-align: center;
      color: #6b6f82;
    }
  `]
})
export class InventoryComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];
  filteredItems: InventoryItem[] = [];
  
  loading = true;
  saving = false;
  showAddForm = false;
  
  materialForm!: FormGroup;

  // Stock quick adjustment values
  adjustingItemId = '';
  adjustmentType: 'receive' | 'consume' = 'receive';
  
  searchVal = '';
  filterCategory = '';

  constructor(
    private inventoryService: InventoryService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.fetchInventory();
  }

  initForm() {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Cement', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      unit: ['', Validators.required],
      threshold: [0, [Validators.required, Validators.min(0)]],
      costPerUnit: [0, [Validators.required, Validators.min(0)]]
    });
  }

  fetchInventory() {
    this.loading = true;
    this.inventoryService.getInventory().subscribe({
      next: (res) => {
        this.inventoryItems = res.success ? res.data : (Array.isArray(res) ? res : []);
        this.applyFilter();
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load inventory', err);
        this.loading = false;
      }
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.materialForm.reset({ category: 'Cement', quantity: 0, threshold: 0, costPerUnit: 0 });
    }
  }

  saveMaterial() {
    if (this.materialForm.invalid) return;
    this.saving = true;

    this.inventoryService.addInventoryItem(this.materialForm.value).subscribe({
      next: () => {
        this.saving = false;
        this.showAddForm = false;
        this.materialForm.reset();
        this.fetchInventory();
      },
      error: (err) => {
        this.saving = false;
        alert(err?.error?.message || 'Failed to register material.');
      }
    });
  }

  // --- Search & Filter ---
  onSearchChange(event: any) {
    this.searchVal = event.target.value?.toLowerCase() || '';
    this.applyFilter();
  }

  onFilterChange(event: any) {
    this.filterCategory = event.target.value || '';
    this.applyFilter();
  }

  applyFilter() {
    this.filteredItems = this.inventoryItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchVal);
      const matchesCategory = !this.filterCategory || item.category === this.filterCategory;
      return matchesSearch && matchesCategory;
    });
  }

  // --- Quick Stock Adjustments ---
  startAdjustment(item: InventoryItem, type: 'receive' | 'consume') {
    this.adjustingItemId = item._id!;
    this.adjustmentType = type;
  }

  cancelAdjustment() {
    this.adjustingItemId = '';
  }

  submitAdjustment(item: InventoryItem, qtyStr: string) {
    const qty = parseInt(qtyStr, 10);
    if (isNaN(qty) || qty <= 0) {
      alert('Please enter a valid positive number.');
      return;
    }

    let newQty = item.quantity;
    if (this.adjustmentType === 'receive') {
      newQty += qty;
    } else {
      if (qty > item.quantity) {
        alert(`Cannot consume more than available stock (${item.quantity} ${item.unit}).`);
        return;
      }
      newQty -= qty;
    }

    this.inventoryService.updateInventoryItem(item._id!, { quantity: newQty }).subscribe({
      next: () => {
        this.adjustingItemId = '';
        this.fetchInventory();
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to update stock quantity.');
      }
    });
  }

  deleteItem(id: string) {
    if (!confirm('Are you sure you want to delete this material catalog item?')) return;
    this.inventoryService.deleteInventoryItem(id).subscribe({
      next: () => {
        this.fetchInventory();
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to delete material.');
      }
    });
  }

  // --- Statistics & Visual Helpers ---
  getLowStockCount(): number {
    return this.inventoryItems.filter(item => item.quantity < item.threshold).length;
  }

  getInventoryValue(): number {
    return this.inventoryItems.reduce((sum, item) => sum + (item.quantity * item.costPerUnit), 0);
  }

  getStockFillPercentage(item: InventoryItem): number {
    if (item.quantity === 0) return 0;
    if (item.quantity >= item.threshold * 2) return 100;
    const ratio = (item.quantity / (item.threshold * 2)) * 100;
    return Math.min(100, Math.max(5, ratio));
  }

  getProgressBarColor(item: InventoryItem): string {
    if (item.quantity === 0) return '#FF6B6B';
    if (item.quantity < item.threshold) return '#ffc107';
    return '#00BFA5';
  }

  getBadgeClass(item: InventoryItem): string {
    if (item.quantity === 0) return 'badge-danger';
    if (item.quantity < item.threshold) return 'badge-warning';
    return 'badge-success';
  }

  getStatusText(item: InventoryItem): string {
    if (item.quantity === 0) return 'Out of Stock';
    if (item.quantity < item.threshold) return 'Low Stock';
    return 'In Stock';
  }
}
