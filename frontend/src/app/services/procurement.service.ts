import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProcurementOrder {
  _id?: string;
  vendorName: string;
  category: string;
  items: string;
  totalAmount: number;
  status: string;
  invoiceNo: string;
  date?: string | Date;
  createdAt?: string | Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {
  private apiUrl = '/api/procurements';

  constructor(private http: HttpClient) {}

  getProcurements(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createProcurement(po: ProcurementOrder): Observable<any> {
    return this.http.post<any>(this.apiUrl, po);
  }

  updateProcurement(id: string, po: Partial<ProcurementOrder>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, po);
  }

  deleteProcurement(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
