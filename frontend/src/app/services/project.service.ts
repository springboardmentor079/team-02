import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  _id?: string;
  name: string;
  category: string;
  client: string;
  budget: number;
  actualExpense: number;
  status: string;
  progress: number;
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface Milestone {
  _id?: string;
  projectId: string;
  title: string;
  phase: string;
  status: string;
  dueDate: Date;
  actualCompletionDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects`);
  }

  getProjectById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${id}`);
  }

  createProject(project: Project): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects`, project);
  }

  updateProject(id: string, project: Partial<Project>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/projects/${id}`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/projects/${id}`);
  }

  getMilestones(projectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${projectId}/milestones`);
  }

  createMilestone(projectId: string, milestone: Milestone): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/milestones`, milestone);
  }

  updateMilestone(milestoneId: string, milestone: Partial<Milestone>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/milestones/${milestoneId}`, milestone);
  }

  deleteMilestone(milestoneId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/milestones/${milestoneId}`);
  }

  logDailyProgress(logData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/progress-logs`, logData);
  }

  getProgressLogs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/progress-logs`);
  }

  getProjectProgressLogs(projectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${projectId}/progress-logs`);
  }

  getProjectBudgets(projectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${projectId}/budgets`);
  }

  createProjectBudget(projectId: string, budget: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/budgets`, budget);
  }

  updateBudget(budgetId: string, budget: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/budgets/${budgetId}`, budget);
  }

  deleteBudget(budgetId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/budgets/${budgetId}`);
  }
}
