import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resources',
  template: `
    <div class="page-header">
      <h1>Resources</h1>
      <p>Manage site workforce, labor, machinery, and equipment allocation.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total Laborers</div>
        <div class="stat-value" style="color: #9c95ff;">48</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Active Equipment</div>
        <div class="stat-value" style="color: #00BFA5;">12</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Utilization Rate</div>
        <div class="stat-value" style="color: #ffc107;">84%</div>
      </div>
    </div>

    <!-- Simple resource list -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Resource ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Allocation / Status</th>
            <th>Current Project</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of resources">
            <td><strong>#{{ r.id }}</strong></td>
            <td><strong style="color: #fff;">{{ r.name }}</strong></td>
            <td>{{ r.type }}</td>
            <td>
              <span class="badge" [ngClass]="r.status === 'Allocated' ? 'badge-success' : 'badge-warning'">
                {{ r.status }}
              </span>
            </td>
            <td>{{ r.project }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    td strong { font-family: monospace; }
  `]
})
export class ResourcesComponent implements OnInit {
  resources = [
    { id: 'RES-001', name: 'JCB Excavator 3DX', type: 'Machinery', status: 'Allocated', project: 'Metro Bridge Phase 2' },
    { id: 'RES-002', name: 'Tower Crane TC-50', type: 'Machinery', status: 'Allocated', project: 'Highrise Residential Complex' },
    { id: 'RES-003', name: 'Concrete Mixer (Heavy Duty)', type: 'Machinery', status: 'Available', project: 'None' },
    { id: 'RES-004', name: 'Rajesh Kumar (Site Supervisor)', type: 'Labor/Staff', status: 'Allocated', project: 'Metro Bridge Phase 2' },
    { id: 'RES-005', name: 'Amit Sharma (Mason)', type: 'Labor/Staff', status: 'Allocated', project: 'Highrise Residential Complex' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
