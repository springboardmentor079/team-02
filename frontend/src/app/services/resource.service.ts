import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Resource {
  _id?: string;
  name: string;
  category: string;
  status: string;
  currentProjectId?: any; // Ref to Project
  lastServiceDate?: Date | string;
  nextServiceDate: Date | string;
}

export interface Worker {
  _id?: string;
  name: string;
  category: string;
  phone: string;
  dailyWage: number;
  status: string;
  currentProjectId?: any; // Ref to Project
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  // --- Machinery/Equipment API ---
  getResources(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/resources`);
  }

  createResource(resource: Resource): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/resources`, resource);
  }

  updateResource(id: string, resource: Partial<Resource>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/resources/${id}`, resource);
  }

  deleteResource(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/resources/${id}`);
  }

  allocateResource(id: string, projectId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/resources/${id}/allocate`, { projectId });
  }

  releaseResource(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/resources/${id}/release`, {});
  }

  // --- Workforce/Workers API ---
  getWorkers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/workers`);
  }

  createWorker(worker: Worker): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/workers`, worker);
  }

  updateWorker(id: string, worker: Partial<Worker>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/workers/${id}`, worker);
  }

  deleteWorker(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/workers/${id}`);
  }

  allocateWorker(id: string, projectId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/workers/${id}/allocate`, { projectId });
  }

  releaseWorker(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/workers/${id}/release`, {});
  }

  // --- Attendance API ---
  getAttendance(date: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/attendance?date=${date}`);
  }

  submitAttendance(date: string, presentWorkers: string[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/attendance`, { date, presentWorkers });
  }

  deleteAttendance(date: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/attendance?date=${date}`);
  }
}
