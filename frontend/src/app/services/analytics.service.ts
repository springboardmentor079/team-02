import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardAnalytics {
  summary: {
    totalBudget: number;
    activeProjects: number;
    completedProjects: number;
    totalProjects: number;
    inventoryTotalValue: number;
    lowStockCount: number;
    poTotalSpent: number;
    pendingPoCount: number;
    totalWorkers: number;
    attendanceRate: number;
  };
  charts: {
    projectSpend: Array<{ name: string; budget: number; spent: number }>;
    procurementCategories: Record<string, number>;
    projectStatuses: { active: number; completed: number; onHold: number; cancelled: number };
    inventoryStockStatus: { adequate: number; lowStock: number };
  };
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiUrl = '/api/analytics';

  constructor(private http: HttpClient) {}

  getDashboardAnalytics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard`);
  }
}
