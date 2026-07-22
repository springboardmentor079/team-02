import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  template: `
    <div class="page-header">
      <h1>Inventory</h1>
      <p>Track materials, stock levels, and supply consumption.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Material Categories</div>
        <div class="stat-value" style="color: #9c95ff;">6</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Low Stock Alerts</div>
        <div class="stat-value" style="color: #FF6B6B;">2</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Suppliers</div>
        <div class="stat-value" style="color: #ffc107;">8</div>
      </div>
    </div>

    <!-- Inventory Stock Table -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Material Name</th>
            <th>Category</th>
            <th>Current Stock</th>
            <th>Unit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of inventory">
            <td><strong style="color: #fff;">{{ item.name }}</strong></td>
            <td>{{ item.category }}</td>
            <td><strong>{{ item.stock }}</strong></td>
            <td>{{ item.unit }}</td>
            <td>
              <span class="badge" [ngClass]="getBadgeClass(item.stock, item.minLimit)">
                {{ getStatusText(item.stock, item.minLimit) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    td strong { font-family: monospace; font-size: 15px; }
  `]
})
export class InventoryComponent implements OnInit {
  inventory = [
    { name: 'OPC 43 Grade Cement', category: 'Cement', stock: 1200, minLimit: 200, unit: 'Bags' },
    { name: 'Fe 500 TMT Steel Bars', category: 'Steel', stock: 15, minLimit: 5, unit: 'Tons' },
    { name: 'Ready-Mix Concrete M25', category: 'Concrete', stock: 0, minLimit: 50, unit: 'Cu.m' },
    { name: 'Fine River Sand', category: 'Aggregate', stock: 8, minLimit: 10, unit: 'Brass' },
    { name: 'Coarse Aggregate 20mm', category: 'Aggregate', stock: 45, minLimit: 15, unit: 'Brass' },
    { name: 'Red Clay Bricks', category: 'Masonry', stock: 15000, minLimit: 2000, unit: 'Pieces' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getBadgeClass(stock: number, minLimit: number): string {
    if (stock === 0) return 'badge-danger';
    if (stock < minLimit) return 'badge-warning';
    return 'badge-success';
  }

  getStatusText(stock: number, minLimit: number): string {
    if (stock === 0) return 'Out of Stock';
    if (stock < minLimit) return 'Low Stock';
    return 'In Stock';
  }
}
