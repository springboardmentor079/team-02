import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService, InventoryItem } from '../../services/inventory.service';
import { InventoryDeliveryService, InventoryDelivery } from '../../services/inventory-delivery.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-inventory',
  template: `
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
        <div>
          <h1 style="display:flex;align-items:center;gap:10px">
            Material Inventory & Site Verification
            <span class="badge badge-info" style="font-size:11px;font-weight:500">
              Role: {{ getUserRole() }}
            </span>
          </h1>
          <p>Contractors & Admins create stock/inventory dispatches. Site Engineers verify physical condition (OK / Defective / Missing) on site before stock is committed to DB catalog.</p>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap" *ngIf="canEditInventory()">
          <button class="btn btn-outline" style="border-color:#6C63FF;color:#9c95ff" (click)="toggleDispatchModal()">
            {{ showDispatchModal ? 'Close Dispatch Form' : '🚚 + Add Stock / Dispatch (Contractor/Admin)' }}
          </button>
          <button class="btn btn-primary" (click)="toggleAddForm()">
            {{ showAddForm ? 'Close Registration' : '📦 + Register New Inventory Product' }}
          </button>
        </div>
      </div>
    </div>


    <!-- Site Engineer Alert & Action Banner -->
    <div *ngIf="isSiteEngineerOnly()" style="background:linear-gradient(135deg, rgba(0,191,165,0.15), rgba(108,99,255,0.15));border:1px solid rgba(0,191,165,0.4);border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
      <div style="display:flex;align-items:center;gap:12px">
        <span style="font-size:28px">🔍</span>
        <div>
          <h3 style="margin:0;color:#00BFA5;font-size:16px;font-weight:700">Site Engineer Work Portal</h3>
          <p style="margin:2px 0 0 0;font-size:13px;color:#d0d3e0">
            You currently have <strong style="color:#ffc107;font-weight:700;font-size:15px">{{ getPendingVerificationsCount() }}</strong> material dispatches awaiting physical inspection & verification on site.
          </p>
        </div>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-primary" style="background:linear-gradient(135deg, #00BFA5, #6C63FF);padding:8px 16px;font-size:13px" (click)="activeTab = 'deliveries'">
          📋 View Verification Queue ({{ getPendingVerificationsCount() }})
        </button>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="tab-container" style="display:flex;gap:12px;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:12px">
      <button 
        class="tab-btn" 
        [class.active]="activeTab === 'catalog'" 
        (click)="activeTab = 'catalog'"
      >
        📦 Main Inventory Stock Catalog ({{ inventoryItems.length }})
      </button>
      <button 
        class="tab-btn" 
        [class.active]="activeTab === 'deliveries'" 
        (click)="activeTab = 'deliveries'"
      >
        🔍 Contractor Dispatches & Site Verifications
        <span class="tab-badge" *ngIf="getPendingVerificationsCount() > 0">
          {{ getPendingVerificationsCount() }} Pending
        </span>
      </button>
    </div>

    <!-- Stats Summary Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Material Types</div>
        <div class="stat-value" style="color: #9c95ff;">{{ inventoryItems.length }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Active verified items in DB catalog</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Pending Verification</div>
        <div class="stat-value" style="color: #ffc107;">{{ getPendingVerificationsCount() }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Shipments awaiting site engineer inspection</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Low Stock Alerts</div>
        <div class="stat-value" style="color: #FF6B6B;">{{ getLowStockCount() }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Items below safe buffer limit</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Stock Valuation</div>
        <div class="stat-value" style="color: #00BFA5;">₹{{ getInventoryValue().toLocaleString('en-IN') }}</div>
        <div style="font-size:12px;color:#a0a3b1;margin-top:6px">Cumulative verified stock value</div>
      </div>
    </div>

    <!-- Modal / Form: Contractor/Admin Dispatch Stock Addition -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px;border:1px solid rgba(108,99,255,0.4)" *ngIf="showDispatchModal">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div>
          <h3 style="margin:0;font-size:16px;color:#9c95ff">🚚 Add New Stock / Dispatch Shipment</h3>
          <span style="font-size:12px;color:#a0a3b1">Submitted by Contractor/Admin & sent to Site Engineer for physical inspection</span>
        </div>
        <span class="badge badge-info">Step 1: Contractor / Admin Dispatch</span>
      </div>
      <form [formGroup]="dispatchForm" (ngSubmit)="submitDispatch()">
        <div class="form-grid">
          <div class="field-group">
            <label>Material Name *</label>
            <input formControlName="materialName" placeholder="e.g. Fly Ash Red Bricks, Portland Cement" class="input-field">
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
            <label>Contractor / Admin Name *</label>
            <input formControlName="contractorName" placeholder="e.g. UltraTech Building Solutions" class="input-field">
          </div>
          <div class="field-group">
            <label>Target Project *</label>
            <input formControlName="projectName" placeholder="e.g. Metro Station Extension Project" class="input-field">
          </div>
          <div class="field-group">
            <label>Dispatched / Added Quantity *</label>
            <input type="number" formControlName="dispatchedQuantity" placeholder="e.g. 10" class="input-field" min="1">
          </div>
          <div class="field-group">
            <label>Unit of Measure *</label>
            <input formControlName="unit" placeholder="e.g. Units, Bags, Tons, Cu.m" class="input-field">
          </div>
          <div class="field-group">
            <label>Unit Cost (₹) (Optional)</label>
            <input type="number" formControlName="costPerUnit" placeholder="e.g. 15" class="input-field" min="0">
          </div>
          <div class="field-group">
            <label>Safety Threshold Limit (Optional)</label>
            <input type="number" formControlName="threshold" placeholder="e.g. 10" class="input-field" min="0">
          </div>
        </div>
        <div class="field-group" style="margin-top:14px">
          <label>Dispatch Notes / Delivery Details</label>
          <input formControlName="notes" placeholder="e.g. Dispatched 10 bricks via Truck MH-12-AB-9876." class="input-field">
        </div>
        <div style="margin-top:18px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" style="padding:8px 16px;font-size:13px" (click)="showDispatchModal=false">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px;background:linear-gradient(135deg, #6C63FF, #00BFA5)" [disabled]="dispatchForm.invalid || submittingDispatch">
            {{ submittingDispatch ? 'Sending Dispatch...' : '🚀 Submit Dispatch & Notify Site Engineer' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Modal / Form: Register New Inventory Product -->
    <div class="glass-card" style="padding:24px;margin-bottom:28px;border:1px solid rgba(0,191,165,0.3)" *ngIf="showAddForm">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div>
          <h3 style="margin:0;font-size:16px;color:#00BFA5">📦 Register New Inventory Product</h3>
          <span style="font-size:12px;color:#a0a3b1">Contractor / Admin registers new product & dispatches initial stock for Site Engineer verification</span>
        </div>
      </div>
      <form [formGroup]="materialForm" (ngSubmit)="saveMaterial()">
        <div class="form-grid">
          <div class="field-group">
            <label>Product / Material Name *</label>
            <input formControlName="name" placeholder="e.g. Red Building Bricks" class="input-field">
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
            <label>Initial Stock Quantity to Dispatch *</label>
            <input type="number" formControlName="quantity" placeholder="e.g. 10" class="input-field" min="1">
          </div>
          <div class="field-group">
            <label>Unit of Measure *</label>
            <input formControlName="unit" placeholder="e.g. Units, Bags, Tons" class="input-field">
          </div>
          <div class="field-group">
            <label>Safety Threshold Limit *</label>
            <input type="number" formControlName="threshold" placeholder="e.g. 10" class="input-field" min="0">
          </div>
          <div class="field-group">
            <label>Cost Per Unit (₹) *</label>
            <input type="number" formControlName="costPerUnit" placeholder="e.g. 12" class="input-field" min="0">
          </div>
        </div>
        <div style="margin-top:16px;display:flex;gap:12px;justify-content:end">
          <button type="button" class="btn btn-outline" style="padding:8px 16px;font-size:13px" (click)="showAddForm=false">Cancel</button>
          <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px" [disabled]="materialForm.invalid || saving">
            {{ saving ? 'Submitting Request...' : '📩 Request Registration & Send to Site Engineer' }}
          </button>
        </div>
      </form>
    </div>

    <!-- SITE ENGINEER VERIFICATION MODAL OVERLAY -->
    <div class="modal-overlay" *ngIf="selectedDeliveryForVerification" (click)="closeVerificationModal()">
      <div class="modal-card glass-card" (click)="$event.stopPropagation()" style="max-width:620px;width:95%">
        <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:14px;margin-bottom:18px">
          <div>
            <h3 style="margin:0;color:#00BFA5;font-size:18px">🔍 Site Engineer Physical Inspection & Verification</h3>
            <span style="font-size:12px;color:#a0a3b1">Dispatch Tracking #: {{ selectedDeliveryForVerification.dispatchNo }}</span>
          </div>
          <button style="background:none;border:none;color:#a0a3b1;cursor:pointer;font-size:20px" (click)="closeVerificationModal()">✕</button>
        </div>

        <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:10px;margin-bottom:18px;border:1px solid rgba(255,255,255,0.06)">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="color:#a0a3b1;font-size:13px">Material & Supplier:</span>
            <strong style="color:#fff;font-size:13px">{{ selectedDeliveryForVerification.materialName }} (by {{ selectedDeliveryForVerification.contractorName }})</strong>
          </div>
          <div style="display:flex;justify-content:space-between">
            <span style="color:#a0a3b1;font-size:13px">Dispatched Quantity:</span>
            <strong style="color:#9c95ff;font-size:14px;font-family:monospace">{{ selectedDeliveryForVerification.dispatchedQuantity }} {{ selectedDeliveryForVerification.unit }}</strong>
          </div>
          <div style="font-size:12px;color:#a0a3b1;margin-top:8px" *ngIf="selectedDeliveryForVerification.notes">
            <em>Dispatch Note: {{ selectedDeliveryForVerification.notes }}</em>
          </div>
        </div>

        <form [formGroup]="verificationForm" (ngSubmit)="submitVerification()">
          <div class="form-grid" style="grid-template-columns:1fr 1fr">
            <div class="field-group">
              <label>Received Qty at Site *</label>
              <input type="number" formControlName="receivedQuantity" class="input-field" (input)="calculateMissing()" placeholder="e.g. 10" min="0">
              <span style="font-size:10px;color:#a0a3b1;margin-top:2px">Total physical items arrived</span>
            </div>
            <div class="field-group">
              <label>OK / Usable Qty *</label>
              <input type="number" formControlName="okQuantity" class="input-field" placeholder="e.g. 8" min="0">
              <span style="font-size:10px;color:#00BFA5;margin-top:2px">Will be added to DB stock</span>
            </div>
            <div class="field-group">
              <label>Defective / Damaged Qty *</label>
              <input type="number" formControlName="defectiveQuantity" class="input-field" placeholder="e.g. 1" min="0">
              <span style="font-size:10px;color:#FF6B6B;margin-top:2px">Damaged (Not added to stock)</span>
            </div>
            <div class="field-group">
              <label>Missing Quantity (Auto)</label>
              <input type="number" [value]="computedMissingQty" class="input-field" style="background:rgba(0,0,0,0.3);color:#ffc107" readonly>
              <span style="font-size:10px;color:#ffc107;margin-top:2px">Dispatched minus (OK + Defective)</span>
            </div>
          </div>

          <div class="field-group" style="margin-top:14px">
            <label>Site Engineer Name *</label>
            <input formControlName="verifiedByName" placeholder="e.g. Eng. Rajesh Kumar" class="input-field">
          </div>

          <div class="field-group" style="margin-top:14px">
            <label>Inspection Remarks / Quality Notes</label>
            <textarea formControlName="verificationNotes" placeholder="Log physical condition, damaged pieces, batch checks..." class="input-field" style="height:60px;resize:none"></textarea>
          </div>

          <!-- Status Indicator Banner -->
          <div [ngClass]="getPreviewStatusClass()" style="margin-top:16px;padding:12px 14px;border-radius:8px;font-size:13px;display:flex;align-items:center;gap:10px">
            <span style="font-size:18px">{{ getPreviewStatusIcon() }}</span>
            <span style="line-height:1.3">{{ getPreviewStatusText() }}</span>
          </div>

          <div style="margin-top:20px;display:flex;gap:10px;justify-content:flex-end;align-items:center">
            <button type="button" class="btn btn-outline" style="padding:8px 14px;font-size:13px" (click)="closeVerificationModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px;background:linear-gradient(135deg,#00BFA5,#6C63FF)" [disabled]="verificationForm.invalid || submittingVerification">
              {{ submittingVerification ? 'Submitting...' : '✅ Verify' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- EDIT MATERIAL DETAILS & SAFETY THRESHOLD MODAL OVERLAY -->
    <div class="modal-overlay" *ngIf="selectedItemForEdit" (click)="closeEditModal()">
      <div class="modal-card glass-card" (click)="$event.stopPropagation()" style="max-width:540px;width:95%">
        <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:14px;margin-bottom:18px">
          <div>
            <h3 style="margin:0;color:#9c95ff;font-size:18px">✏️ Edit Product Details & Safety Threshold</h3>
            <span style="font-size:12px;color:#a0a3b1">Update threshold limits, pricing, or product specifications</span>
          </div>
          <button style="background:none;border:none;color:#a0a3b1;cursor:pointer;font-size:20px" (click)="closeEditModal()">✕</button>
        </div>

        <form [formGroup]="editForm" (ngSubmit)="submitEdit()">
          <div class="form-grid">
            <div class="field-group">
              <label>Material Name *</label>
              <input formControlName="name" placeholder="Material Name" class="input-field">
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
              <label>Unit of Measure *</label>
              <input formControlName="unit" placeholder="Unit" class="input-field">
            </div>
            <div class="field-group">
              <label>Current Stock Quantity *</label>
              <input type="number" formControlName="quantity" class="input-field" min="0">
            </div>
            <div class="field-group">
              <label>Safety Threshold Limit *</label>
              <input type="number" formControlName="threshold" class="input-field" min="0">
            </div>
            <div class="field-group">
              <label>Cost Per Unit (₹) *</label>
              <input type="number" formControlName="costPerUnit" class="input-field" min="0">
            </div>
          </div>

          <div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;align-items:center">
            <button type="button" class="btn btn-outline" style="border-color:#FF6B6B;color:#FF6B6B;padding:8px 12px;font-size:12px" (click)="deleteCurrentEditingItem()">
              🗑️ Delete Product
            </button>

            <div style="display:flex;gap:10px">
              <button type="button" class="btn btn-outline" style="padding:8px 14px;font-size:13px" (click)="closeEditModal()">Cancel</button>
              <button type="submit" class="btn btn-primary" style="padding:8px 16px;font-size:13px;background:linear-gradient(135deg,#6C63FF,#00BFA5)" [disabled]="editForm.invalid || savingEdit">
                {{ savingEdit ? 'Saving...' : '💾 Save Product Changes' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>


    <!-- TAB 1: MAIN CATALOG VIEW -->
    <div *ngIf="activeTab === 'catalog'">
      <!-- Filtering & Searching -->
      <div style="display:flex;gap:16px;margin-bottom:24px;align-items:center;flex-wrap:wrap">
        <input type="text" placeholder="🔍 Search stock material..." (input)="onSearchChange($event)" class="input-field" style="max-width:300px;padding:8px 12px;flex:1">
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
        <div class="loading-state" *ngIf="loading">Loading verified materials from database...</div>
        <table *ngIf="!loading">
          <thead>
            <tr>
              <th>Material Name</th>
              <th>Category</th>
              <th>Safety Threshold</th>
              <th>Current Stock Level</th>
              <th>Status</th>
              <th>Unit Cost</th>
              <th>Total Valuation</th>
              <th style="text-align:center">Add Stock / Consumption</th>
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
              <td style="width:260px">
                <!-- Quick Adjust Action -->
                <div *ngIf="adjustingItemId !== item._id" style="display:flex;gap:8px;justify-content:center">
                  <button *ngIf="canEditInventory()" class="action-btn edit-btn" style="padding:4px 8px" (click)="startAdjustment(item, 'receive')" title="Request stock dispatch for Site Engineer verification">
                    🚚 + Add Stock
                  </button>
                  <button class="action-btn delete-btn" style="padding:4px 8px" (click)="startAdjustment(item, 'consume')" title="Log site usage/consumption">
                    📤 Consume
                  </button>
                </div>
                
                <!-- Inline form for consume -->
                <div *ngIf="adjustingItemId === item._id && adjustmentType === 'consume'" style="display:flex;gap:6px;align-items:center;justify-content:center">
                  <span style="font-size:11px;color:#a0a3b1">Cons Qty:</span>
                  <input type="number" #adjustQty class="input-field" style="padding:4px 6px;width:75px;height:28px;font-size:12px;background:rgba(0,0,0,0.3)" min="1" placeholder="Qty">
                  <button class="action-btn edit-btn" style="padding:4px 8px;height:28px" (click)="submitAdjustment(item, adjustQty.value)">Save</button>
                  <button class="action-btn" style="padding:4px 6px;height:28px;border-color:transparent;color:#FF6B6B" (click)="cancelAdjustment()">✕</button>
                </div>
              </td>
              <td style="width:90px;text-align:center">
                <button *ngIf="canEditInventory()" (click)="openEditModal(item)" style="background:none;border:none;color:#9c95ff;cursor:pointer;font-size:15px;margin-right:6px" title="Edit Threshold & Details">✏️</button>
                <button *ngIf="canEditInventory()" (click)="deleteItem(item._id!)" style="background:none;border:none;color:#FF6B6B;cursor:pointer;font-size:16px" title="Delete Material">🗑️</button>
                <span *ngIf="!canEditInventory()" style="font-size:11px;color:#6b6f82;font-style:italic">View Only</span>
              </td>
            </tr>
            <tr *ngIf="filteredItems.length === 0">
              <td colspan="9" style="text-align:center;color:#6b6f82;padding:32px">No inventory materials match the filters.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <!-- TAB 2: CONTRACTOR DISPATCHES & SITE VERIFICATIONS VIEW -->
    <div *ngIf="activeTab === 'deliveries'">
      <div class="table-container">
        <div class="loading-state" *ngIf="loadingDeliveries">Loading contractor dispatches & site verifications...</div>
        <table *ngIf="!loadingDeliveries">
          <thead>
            <tr>
              <th>Tracking #</th>
              <th>Material</th>
              <th>Contractor / Admin</th>
              <th>Dispatched Qty</th>
              <th>Verification Breakdown (Received / OK / Defective / Missing)</th>
              <th>Status</th>
              <th>Verified By</th>
              <th style="text-align:center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let d of deliveries">
              <td><strong style="color:#9c95ff">{{ d.dispatchNo }}</strong></td>
              <td>
                <strong style="color:#fff">{{ d.materialName }}</strong>
                <div style="font-size:11px;color:#a0a3b1">{{ d.category }}</div>
              </td>
              <td>{{ d.contractorName }}</td>
              <td>
                <span style="font-weight:700;color:#fff;font-family:monospace;font-size:14px">{{ d.dispatchedQuantity }} {{ d.unit }}</span>
              </td>
              <td>
                <div *ngIf="d.status === 'Pending Verification'" style="color:#ffc107;font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px">
                  <span>⏳</span> Awaiting Site Engineer Inspection
                </div>
                <div *ngIf="d.status !== 'Pending Verification'" style="display:flex;gap:12px;font-size:12px;font-family:monospace">
                  <span style="color:#a0a3b1">Recv: {{ d.receivedQuantity }}</span>
                  <span style="color:#00BFA5;font-weight:700">OK: {{ d.okQuantity }}</span>
                  <span [style.color]="d.defectiveQuantity! > 0 ? '#FF6B6B' : '#a0a3b1'">Def: {{ d.defectiveQuantity }}</span>
                  <span [style.color]="d.missingQuantity! > 0 ? '#ffc107' : '#a0a3b1'">Mis: {{ d.missingQuantity }}</span>
                </div>
                <div *ngIf="d.verificationNotes" style="font-size:11px;color:#a0a3b1;margin-top:2px;max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" [title]="d.verificationNotes">
                  📝 {{ d.verificationNotes }}
                </div>
              </td>
              <td>
                <span class="badge" [ngClass]="getDeliveryBadgeClass(d.status)">
                  {{ d.status }}
                </span>
              </td>
              <td>
                <div *ngIf="d.verifiedByName" style="font-size:12px;color:#fff">{{ d.verifiedByName }}</div>
                <div *ngIf="d.verifiedAt" style="font-size:10px;color:#a0a3b1">{{ d.verifiedAt | date:'short' }}</div>
                <span *ngIf="!d.verifiedByName" style="color:#6b6f82;font-size:12px">—</span>
              </td>
              <td style="text-align:center;width:180px">
                <div style="display:flex;align-items:center;justify-content:center;gap:6px">
                  <ng-container *ngIf="d.status === 'Pending Verification'">
                    <button 
                      *ngIf="isSiteEngineerOnly()" 
                      class="btn btn-primary" 
                      style="padding:6px 10px;font-size:11px;background:linear-gradient(135deg, #00BFA5, #6C63FF)" 
                      (click)="openVerificationModal(d)"
                    >
                      🔍 Verify Stock
                    </button>
                    <span *ngIf="!isSiteEngineerOnly()" style="font-size:11px;color:#a0a3b1;font-style:italic">Engineer Only</span>
                  </ng-container>

                  <button 
                    *ngIf="d.status !== 'Pending Verification'" 
                    class="action-btn" 
                    style="padding:4px 8px;font-size:11px" 
                    (click)="openVerificationModal(d)"
                    title="View / Re-verify details"
                  >
                    ✏️ View
                  </button>

                  <button 
                    class="action-btn delete-btn" 
                    style="padding:4px 8px;font-size:12px;color:#FF6B6B" 
                    (click)="deleteDispatchRecord(d._id!)"
                    title="Delete Dispatch Record from DB"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
            <tr *ngIf="deliveries.length === 0">
              <td colspan="8" style="text-align:center;color:#6b6f82;padding:32px">
                No contractor dispatches logged in database. 
                <button class="btn btn-outline" style="margin-left:10px;font-size:12px" (click)="seedDemoPendingDispatches()">+ Generate Sample Pending Dispatch</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tab-btn {
      background: none;
      border: none;
      color: #a0a3b1;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tab-btn:hover { color: #fff; background: rgba(255,255,255,0.05); }
    .tab-btn.active { color: #9c95ff; background: rgba(108,99,255,0.15); border: 1px solid rgba(108,99,255,0.3); }
    .tab-badge { background: #ffc107; color: #000; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 10px; }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
    .action-btn:hover { background: rgba(255, 255, 255, 0.12); }
    .edit-btn:hover { border-color: #00BFA5; color: #00BFA5; }
    .delete-btn:hover { border-color: #FF6B6B; color: #FF6B6B; }
    .progress-fill { height: 100%; transition: width 0.4s ease; }
    .loading-state { padding: 40px; text-align: center; color: #6b6f82; }

    .modal-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center; z-index: 99999;
    }
    .modal-card { padding: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.6); }

    .preview-ok { background: rgba(0,191,165,0.1); color: #00BFA5; border: 1px solid rgba(0,191,165,0.3); }
    .preview-warning { background: rgba(255,193,7,0.1); color: #ffc107; border: 1px solid rgba(255,193,7,0.3); }
  `]
})
export class InventoryComponent implements OnInit {
  activeTab: 'catalog' | 'deliveries' = 'catalog';

  inventoryItems: InventoryItem[] = [];
  filteredItems: InventoryItem[] = [];
  deliveries: InventoryDelivery[] = [];
  
  loading = true;
  loadingDeliveries = true;
  saving = false;
  submittingDispatch = false;
  submittingVerification = false;

  showAddForm = false;
  showDispatchModal = false;
  selectedDeliveryForVerification: InventoryDelivery | null = null;
  computedMissingQty = 0;
  
  materialForm!: FormGroup;
  dispatchForm!: FormGroup;
  verificationForm!: FormGroup;
  editForm!: FormGroup;
  selectedItemForEdit: InventoryItem | null = null;
  savingEdit = false;

  // Stock quick adjustment values
  adjustingItemId = '';
  adjustmentType: 'receive' | 'consume' = 'receive';
  
  searchVal = '';
  filterCategory = '';

  constructor(
    private inventoryService: InventoryService,
    private deliveryService: InventoryDeliveryService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {
    this.initForms();
  }

  ngOnInit(): void {
    if (this.isSiteEngineerOnly()) {
      this.activeTab = 'deliveries';
    }
    this.fetchInventory();
    this.fetchDeliveries();
  }

  getUserRole(): string {
    return this.authService.currentUserValue?.role || 'Contractor / Admin';
  }

  canEditInventory(): boolean {
    const role = this.authService.currentUserValue?.role;
    return role === 'Contractor' || role === 'Administrator';
  }

  isSiteEngineerOnly(): boolean {
    const role = this.authService.currentUserValue?.role;
    return role === 'Site Engineer';
  }

  openEditModal(item: InventoryItem) {
    if (!this.canEditInventory()) {
      alert('Editing inventory details and threshold limits can only be done by Contractors or Administrators.');
      return;
    }
    this.selectedItemForEdit = item;
    this.editForm.reset({
      name: item.name,
      category: item.category || 'Cement',
      quantity: item.quantity || 0,
      unit: item.unit || 'Units',
      threshold: item.threshold !== undefined ? item.threshold : 10,
      costPerUnit: item.costPerUnit !== undefined ? item.costPerUnit : 0
    });
  }

  closeEditModal() {
    this.selectedItemForEdit = null;
  }

  submitEdit() {
    if (this.editForm.invalid || !this.selectedItemForEdit) return;
    this.savingEdit = true;
    const targetId = this.selectedItemForEdit._id!;

    this.inventoryService.updateInventoryItem(targetId, this.editForm.value).subscribe({
      next: () => {
        this.savingEdit = false;
        this.closeEditModal();
        this.fetchInventory();
        this.notificationService.triggerToast({
          id: Date.now().toString(),
          type: 'success',
          title: 'Product Updated',
          message: 'Material details and safety threshold limit saved to database.'
        });
      },
      error: (err) => {
        this.savingEdit = false;
        alert(err?.error?.message || 'Failed to update material details.');
      }
    });
  }

  deleteCurrentEditingItem() {
    if (!this.selectedItemForEdit) return;
    const targetId = this.selectedItemForEdit._id!;
    this.closeEditModal();
    this.deleteItem(targetId);
  }

  initForms() {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Cement', Validators.required],
      quantity: [10, [Validators.required, Validators.min(1)]],
      unit: ['Units', Validators.required],
      threshold: [10, [Validators.required, Validators.min(0)]],
      costPerUnit: [0, [Validators.required, Validators.min(0)]]
    });

    this.editForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Cement', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      unit: ['Units', Validators.required],
      threshold: [10, [Validators.required, Validators.min(0)]],
      costPerUnit: [0, [Validators.required, Validators.min(0)]]
    });

    const currentUserName = this.authService.currentUserValue?.name || 'Contractor / Admin';
    this.dispatchForm = this.fb.group({
      materialName: ['', Validators.required],
      category: ['Cement', Validators.required],
      contractorName: [currentUserName, Validators.required],
      projectName: ['Metro Station Extension Project', Validators.required],
      dispatchedQuantity: [10, [Validators.required, Validators.min(1)]],
      unit: ['Units', Validators.required],
      costPerUnit: [0],
      threshold: [10],
      notes: ['']
    });

    const engName = this.authService.currentUserValue?.name || 'Site Engineer';
    this.verificationForm = this.fb.group({
      receivedQuantity: [0, [Validators.required, Validators.min(0)]],
      okQuantity: [0, [Validators.required, Validators.min(0)]],
      defectiveQuantity: [0, [Validators.required, Validators.min(0)]],
      verifiedByName: [engName, Validators.required],
      verificationNotes: ['']
    });

    this.verificationForm.valueChanges.subscribe(() => {
      this.calculateMissing();
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

  fetchDeliveries() {
    this.loadingDeliveries = true;
    this.deliveryService.getDeliveries().subscribe({
      next: (res) => {
        this.deliveries = res.success ? res.data : (Array.isArray(res) ? res : []);
        this.loadingDeliveries = false;
      },
      error: (err) => {
        console.error('Failed to load deliveries', err);
        this.loadingDeliveries = false;
      }
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.materialForm.reset({ category: 'Cement', quantity: 10, threshold: 10, costPerUnit: 0, unit: 'Units' });
    }
  }

  toggleDispatchModal() {
    this.showDispatchModal = !this.showDispatchModal;
    if (this.showDispatchModal) {
      const currentUserName = this.authService.currentUserValue?.name || 'Contractor / Admin';
      this.dispatchForm.reset({
        category: 'Cement',
        contractorName: currentUserName,
        projectName: 'Metro Station Extension Project',
        dispatchedQuantity: 10,
        unit: 'Units',
        costPerUnit: 0,
        threshold: 10,
        notes: ''
      });
    }
  }

  submitDispatch() {
    if (this.dispatchForm.invalid) return;
    this.submittingDispatch = true;

    this.deliveryService.createDispatch(this.dispatchForm.value).subscribe({
      next: (res) => {
        this.submittingDispatch = false;
        this.showDispatchModal = false;
        this.notificationService.triggerToast({ 
          id: Date.now().toString(), 
          type: 'info', 
          title: 'Dispatch Created', 
          message: res.msg || 'Stock dispatch recorded! Site Engineer notified for physical verification.' 
        });
        this.fetchDeliveries();
        this.activeTab = 'deliveries';
      },
      error: (err) => {
        this.submittingDispatch = false;
        alert(err?.error?.msg || 'Failed to record stock dispatch.');
      }
    });
  }

  openVerificationModal(delivery: InventoryDelivery) {
    if (delivery.status === 'Pending Verification' && !this.isSiteEngineerOnly()) {
      alert('Physical stock verification can ONLY be performed by a Site Engineer on site.');
      return;
    }
    this.selectedDeliveryForVerification = delivery;
    const defaultRecv = delivery.receivedQuantity !== undefined ? delivery.receivedQuantity : delivery.dispatchedQuantity;
    const defaultOk = delivery.okQuantity !== undefined ? delivery.okQuantity : delivery.dispatchedQuantity;
    const engName = this.authService.currentUserValue?.name || delivery.verifiedByName || 'Site Engineer';

    this.verificationForm.reset({
      receivedQuantity: defaultRecv,
      okQuantity: defaultOk,
      defectiveQuantity: delivery.defectiveQuantity || 0,
      verifiedByName: engName,
      verificationNotes: delivery.verificationNotes || ''
    });
    this.calculateMissing();
  }

  closeVerificationModal() {
    this.selectedDeliveryForVerification = null;
  }

  calculateMissing() {
    if (!this.selectedDeliveryForVerification) return;
    const ok = parseFloat(this.verificationForm.get('okQuantity')?.value) || 0;
    const def = parseFloat(this.verificationForm.get('defectiveQuantity')?.value) || 0;
    const dispatched = this.selectedDeliveryForVerification.dispatchedQuantity || 0;
    this.computedMissingQty = Math.max(0, dispatched - (ok + def));
  }

  submitVerification() {
    if (this.verificationForm.invalid || !this.selectedDeliveryForVerification) return;
    if (!this.isSiteEngineerOnly()) {
      alert('Physical stock verification can ONLY be performed by a Site Engineer on site.');
      return;
    }
    this.submittingVerification = true;

    const payload = {
      ...this.verificationForm.value,
      rejectShipment: false
    };

    this.deliveryService.verifyDelivery(this.selectedDeliveryForVerification._id!, payload).subscribe({
      next: (res) => {
        this.submittingVerification = false;
        this.closeVerificationModal();
        this.notificationService.triggerToast({ 
          id: Date.now().toString(), 
          type: 'success', 
          title: 'Stock Verified', 
          message: res.msg || 'Physical verification recorded! OK quantity committed to main DB stock catalog.' 
        });
        this.fetchDeliveries();
        this.fetchInventory(); // Reload main stock catalog to display newly verified stock!
      },
      error: (err) => {
        this.submittingVerification = false;
        alert(err?.error?.msg || 'Failed to submit verification.');
      }
    });
  }

  rejectShipment() {
    if (!this.selectedDeliveryForVerification) return;
    if (!confirm(`Are you sure you want to REJECT shipment #${this.selectedDeliveryForVerification.dispatchNo}?`)) return;

    this.submittingVerification = true;
    const payload = {
      ...this.verificationForm.value,
      rejectShipment: true
    };

    this.deliveryService.verifyDelivery(this.selectedDeliveryForVerification._id!, payload).subscribe({
      next: (res) => {
        this.submittingVerification = false;
        this.closeVerificationModal();
        this.notificationService.triggerToast({ 
          id: Date.now().toString(), 
          type: 'danger', 
          title: 'Shipment Rejected', 
          message: res.msg || 'Shipment marked as Rejected.' 
        });
        this.fetchDeliveries();
      },
      error: (err) => {
        this.submittingVerification = false;
        alert(err?.error?.msg || 'Failed to reject shipment.');
      }
    });
  }

  getPreviewStatusClass(): string {
    const def = parseFloat(this.verificationForm?.get('defectiveQuantity')?.value) || 0;
    if (def > 0 || this.computedMissingQty > 0) return 'preview-warning';
    return 'preview-ok';
  }

  getPreviewStatusIcon(): string {
    const def = parseFloat(this.verificationForm?.get('defectiveQuantity')?.value) || 0;
    if (def > 0 || this.computedMissingQty > 0) return '⚠️';
    return '✅';
  }

  getPreviewStatusText(): string {
    const def = parseFloat(this.verificationForm?.get('defectiveQuantity')?.value) || 0;
    const ok = parseFloat(this.verificationForm?.get('okQuantity')?.value) || 0;
    if (def > 0 || this.computedMissingQty > 0) {
      return `Discrepancy Logged: ${ok} OK item(s) will be added to DB stock. ${def} defective item(s) & ${this.computedMissingQty} missing item(s) will NOT be added to DB stock.`;
    }
    return `Full Verification Pass: All ${ok} item(s) are OK. DB stock catalog will automatically be updated with +${ok} units.`;
  }

  saveMaterial() {
    if (this.materialForm.invalid) return;
    this.saving = true;

    const currentUserName = this.authService.currentUserValue?.name || 'Contractor / Admin';
    const formVal = this.materialForm.value;

    const dispatchData = {
      materialName: formVal.name,
      category: formVal.category || 'Cement',
      contractorName: currentUserName,
      projectName: 'Metro Station Extension Project',
      dispatchedQuantity: parseFloat(formVal.quantity) || 1,
      unit: formVal.unit || 'Units',
      costPerUnit: parseFloat(formVal.costPerUnit) || 0,
      threshold: parseFloat(formVal.threshold) || 10,
      notes: 'New Product Registration Request'
    };

    this.deliveryService.createDispatch(dispatchData).subscribe({
      next: (res) => {
        this.saving = false;
        this.showAddForm = false;
        this.materialForm.reset();
        this.notificationService.triggerToast({
          id: Date.now().toString(),
          type: 'info',
          title: 'Verification Request Created',
          message: 'New inventory item request submitted! Site Engineer notified to verify OK, Defective & Missing quantities before stock is added to DB catalog.'
        });
        this.fetchDeliveries();
        this.activeTab = 'deliveries';
      },
      error: (err) => {
        this.saving = false;
        alert(err?.error?.msg || err?.error?.message || 'Failed to submit registration request.');
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

  // --- Stock Adjustments ---
  startAdjustment(item: InventoryItem, type: 'receive' | 'consume') {
    if (type === 'receive') {
      // Opening receive modal pre-populates dispatch form for Site Engineer verification
      const currentUserName = this.authService.currentUserValue?.name || 'Contractor / Admin';
      this.dispatchForm.reset({
        materialName: item.name,
        category: item.category,
        contractorName: currentUserName,
        projectName: 'Metro Station Extension Project',
        dispatchedQuantity: 10,
        unit: item.unit,
        costPerUnit: item.costPerUnit,
        threshold: item.threshold,
        notes: `Additional stock dispatch for ${item.name}`
      });
      this.showDispatchModal = true;
      this.notificationService.triggerToast({
        id: Date.now().toString(),
        type: 'info',
        title: 'Dispatch Stock Form Opened',
        message: `Set quantity of ${item.name} to dispatch. Site Engineer will inspect & verify before stock hits DB.`
      });
    } else {
      this.adjustingItemId = item._id!;
      this.adjustmentType = type;
    }
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

    if (qty > item.quantity) {
      alert(`Cannot consume more than available stock (${item.quantity} ${item.unit}).`);
      return;
    }

    const newQty = item.quantity - qty;

    this.inventoryService.updateInventoryItem(item._id!, { quantity: newQty }).subscribe({
      next: () => {
        this.adjustingItemId = '';
        this.fetchInventory();
        this.notificationService.triggerToast({
          id: Date.now().toString(),
          type: 'warning',
          title: 'Stock Consumed',
          message: `Logged consumption of ${qty} ${item.unit} of ${item.name}.`
        });
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to update stock quantity.');
      }
    });
  }

  deleteItem(id: string) {
    if (!this.canEditInventory()) {
      alert('Editing or deleting inventory materials can only be done by Contractors or Administrators.');
      return;
    }
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

  deleteDispatchRecord(id: string) {
    if (!confirm('Are you sure you want to delete this dispatch record from the database? It will be removed permanently.')) return;
    this.deliveryService.deleteDelivery(id).subscribe({
      next: () => {
        this.notificationService.triggerToast({
          id: Date.now().toString(),
          type: 'info',
          title: 'Dispatch Deleted',
          message: 'Dispatch record permanently removed from database.'
        });
        this.fetchDeliveries();
      },
      error: (err) => {
        alert(err?.error?.msg || err?.error?.message || 'Failed to delete dispatch record.');
      }
    });
  }

  seedDemoPendingDispatches() {
    this.deliveryService.createDispatch({
      materialName: 'Portland Cement (Grade 53)',
      category: 'Cement',
      contractorName: 'UltraTech Building Solutions Ltd.',
      projectName: 'Horizon Commercial Complex',
      dispatchedQuantity: 500,
      unit: 'Bags',
      costPerUnit: 8,
      threshold: 50,
      notes: 'Demo pending dispatch created for Site Engineer physical verification testing.'
    }).subscribe({
      next: () => {
        this.notificationService.triggerToast({
          id: Date.now().toString(),
          type: 'success',
          title: 'Sample Dispatch Created',
          message: 'Created new sample pending dispatch for Site Engineer verification testing.'
        });
        this.fetchDeliveries();
        this.activeTab = 'deliveries';
      },
      error: (err) => {
        alert(err?.error?.msg || 'Failed to create sample dispatch.');
      }
    });
  }

  // --- Statistics & Visual Helpers ---
  getPendingVerificationsCount(): number {
    return this.deliveries.filter(d => d.status === 'Pending Verification').length;
  }

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

  getDeliveryBadgeClass(status: string): string {
    switch (status) {
      case 'Pending Verification': return 'badge-warning';
      case 'Verified': return 'badge-success';
      case 'Discrepancy Reported': return 'badge-info';
      case 'Rejected': return 'badge-danger';
      default: return 'badge-info';
    }
  }
}

