import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DocumentItem {
  _id?: string;
  title: string;
  category: 'Blueprints & Drawings' | 'Contracts & Legal' | 'Permits & Approvals' | 'Safety Compliance' | 'Invoices & Receipts' | 'Site Photos' | 'Specifications';
  description?: string;
  fileUrl: string;
  fileType: 'PDF' | 'DWG' | 'PNG' | 'JPG' | 'DOCX' | 'XLSX';
  fileSize?: string;
  uploadedBy?: string;
  projectId?: string;
  procurementId?: string;
  version?: string;
  status: 'Active' | 'Under Review' | 'Archived';
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface DocumentStats {
  total: number;
  blueprints: number;
  contracts: number;
  permits: number;
  invoices: number;
  active: number;
  underReview: number;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = '/api/documents';

  constructor(private http: HttpClient) {}

  getDocuments(filters?: {
    category?: string;
    search?: string;
    projectId?: string;
    procurementId?: string;
    status?: string;
  }): Observable<{ success: boolean; count: number; data: DocumentItem[] }> {
    let params = new HttpParams();
    if (filters) {
      if (filters.category && filters.category !== 'all') {
        params = params.set('category', filters.category);
      }
      if (filters.search) {
        params = params.set('search', filters.search);
      }
      if (filters.projectId) {
        params = params.set('projectId', filters.projectId);
      }
      if (filters.procurementId) {
        params = params.set('procurementId', filters.procurementId);
      }
      if (filters.status && filters.status !== 'all') {
        params = params.set('status', filters.status);
      }
    }
    return this.http.get<{ success: boolean; count: number; data: DocumentItem[] }>(this.apiUrl, { params });
  }

  getStats(): Observable<{ success: boolean; data: DocumentStats }> {
    return this.http.get<{ success: boolean; data: DocumentStats }>(`${this.apiUrl}/stats`);
  }

  createDocument(doc: Partial<DocumentItem>): Observable<{ success: boolean; data: DocumentItem }> {
    return this.http.post<{ success: boolean; data: DocumentItem }>(this.apiUrl, doc);
  }

  updateDocument(id: string, doc: Partial<DocumentItem>): Observable<{ success: boolean; data: DocumentItem }> {
    return this.http.put<{ success: boolean; data: DocumentItem }>(`${this.apiUrl}/${id}`, doc);
  }

  deleteDocument(id: string): Observable<{ success: boolean; msg: string }> {
    return this.http.delete<{ success: boolean; msg: string }>(`${this.apiUrl}/${id}`);
  }
}
