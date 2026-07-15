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
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects`);
  }

  createProject(project: Project): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects`, project);
  }

  getMilestones(projectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${projectId}/milestones`);
  }

  createMilestone(projectId: string, milestone: Milestone): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects/${projectId}/milestones`, milestone);
  }

  logDailyProgress(logData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/progress-logs`, logData);
  }

  getProgressLogs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/progress-logs`);
  }
}
