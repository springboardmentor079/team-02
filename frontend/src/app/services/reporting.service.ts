import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReportItem {
  id: string;
  module: string;
  title: string;
  category: string;
  reference: string;
  amount: number;
  status: string;
  date: string | Date;
}

export interface ReportFilter {
  module?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  search?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  private apiUrl = '/api/reports/data';

  constructor(private http: HttpClient) {}

  getReportData(filters: ReportFilter = {}): Observable<any> {
    let params = new HttpParams();
    if (filters.module) params = params.set('module', filters.module);
    if (filters.startDate) params = params.set('startDate', filters.startDate);
    if (filters.endDate) params = params.set('endDate', filters.endDate);
    if (filters.status) params = params.set('status', filters.status);
    if (filters.search) params = params.set('search', filters.search);

    return this.http.get<any>(this.apiUrl, { params });
  }

  // Helper method: Export dataset to CSV file download
  exportToCsv(filename: string, rows: ReportItem[]): void {
    if (!rows || !rows.length) return;
    
    const headers = ['ID', 'Module', 'Title', 'Category', 'Reference', 'Amount (INR)', 'Status', 'Date'];
    const csvContent = [
      headers.join(','),
      ...rows.map(r => [
        `"${r.id || ''}"`,
        `"${r.module || ''}"`,
        `"${(r.title || '').replace(/"/g, '""')}"`,
        `"${r.category || ''}"`,
        `"${r.reference || ''}"`,
        r.amount || 0,
        `"${r.status || ''}"`,
        `"${r.date ? new Date(r.date).toLocaleDateString() : ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Helper method: Export dataset to JSON file download
  exportToJson(filename: string, rows: ReportItem[]): void {
    if (!rows) return;
    const jsonStr = JSON.stringify(rows, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Helper method: Export/Print as styled PDF report
  printPdfReport(title: string, rows: ReportItem[]): void {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) return;

    const totalVal = rows.reduce((acc, r) => acc + (r.amount || 0), 0);
    const tableRowsHtml = rows.map((r, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><strong>${r.title}</strong></td>
        <td>${r.module}</td>
        <td>${r.category}</td>
        <td><code>${r.reference}</code></td>
        <td>₹${(r.amount || 0).toLocaleString()}</td>
        <td><span class="badge ${r.status.toLowerCase().includes('low') || r.status.toLowerCase().includes('danger') ? 'badge-danger' : 'badge-success'}">${r.status}</span></td>
        <td>${r.date ? new Date(r.date).toLocaleDateString() : 'N/A'}</td>
      </tr>
    `).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title} - BuildTrack Report</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #222; background: #fff; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #6C63FF; padding-bottom: 16px; margin-bottom: 24px; }
          .header h1 { margin: 0; color: #1a1d2e; font-size: 24px; }
          .meta { color: #666; font-size: 13px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }
          th, td { border: 1px solid #e0e0e0; padding: 10px 12px; text-align: left; }
          th { background: #f4f5f9; color: #333; font-weight: 600; }
          tr:nth-child(even) { background: #fbfbfd; }
          .summary-card { background: #f0f2fe; border: 1px solid #c7c4ff; border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; }
          .summary-card div { font-size: 14px; }
          .badge { padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
          .badge-success { background: #e8f5e9; color: #2e7d32; }
          .badge-danger { background: #ffebee; color: #c62828; }
          .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>🏗 BuildTrack Platform</h1>
            <p style="margin:4px 0 0 0; color:#6C63FF; font-weight:600;">${title}</p>
          </div>
          <div style="text-align:right;">
            <div style="font-size:12px; color:#888;">Generated On</div>
            <div style="font-weight:bold;">${new Date().toLocaleString()}</div>
          </div>
        </div>

        <div class="summary-card">
          <div>Total Report Items: <strong>${rows.length}</strong></div>
          <div>Combined Financial Valuation: <strong>₹${totalVal.toLocaleString()}</strong></div>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Module</th>
              <th>Category</th>
              <th>Reference</th>
              <th>Valuation</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>

        <div class="footer">
          BuildTrack System Analytics & Reporting Engine &bull; Confidential Internal Report
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }
}
