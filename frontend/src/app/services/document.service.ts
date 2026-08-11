import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProjectDocument {
  _id?: string;
  title: string;
  description?: string;
  category: string;
  projectId?: any; // Ref to Project (populated: { _id, name })
  originalName: string;
  storedFileName?: string;
  fileType: string;
  fileSize: number;
  version?: number;
  uploadedBy?: any; // Ref to User (populated: { _id, name, email })
  createdAt?: Date | string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getDocuments(filters?: { projectId?: string; category?: string }): Observable<any> {
    let params = '';
    if (filters) {
      const parts: string[] = [];
      if (filters.projectId) parts.push(`projectId=${filters.projectId}`);
      if (filters.category) parts.push(`category=${filters.category}`);
      if (parts.length) params = `?${parts.join('&')}`;
    }
    return this.http.get<any>(`${this.apiUrl}/documents${params}`);
  }

  uploadDocument(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents`, formData);
  }

  updateDocument(id: string, updates: Partial<ProjectDocument>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/documents/${id}`, updates);
  }

  deleteDocument(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/documents/${id}`);
  }

  // Downloads via blob so the auth token (added by TokenInterceptor) is sent correctly
  downloadDocument(id: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/documents/${id}/download`, { responseType: 'blob' });
  }
}
