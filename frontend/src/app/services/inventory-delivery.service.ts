import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InventoryDelivery {
  _id?: string;
  dispatchNo: string;
  materialName: string;
  category: string;
  contractorName: string;
  contractorId?: string;
  projectName?: string;
  dispatchedQuantity: number;
  unit: string;
  costPerUnit?: number;
  threshold?: number;
  dispatchDate?: string | Date;
  notes?: string;

  status: 'Pending Verification' | 'Verified' | 'Discrepancy Reported' | 'Rejected';
  receivedQuantity?: number;
  okQuantity?: number;
  defectiveQuantity?: number;
  missingQuantity?: number;
  verificationNotes?: string;
  verifiedByName?: string;
  verifiedBy?: string;
  verifiedAt?: string | Date;
  createdAt?: string | Date;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryDeliveryService {
  private apiUrl = '/api/inventory/deliveries';

  constructor(private http: HttpClient) {}

  getDeliveries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createDispatch(delivery: Partial<InventoryDelivery>): Observable<any> {
    return this.http.post<any>(this.apiUrl, delivery);
  }

  verifyDelivery(id: string, verificationData: {
    receivedQuantity: number;
    okQuantity: number;
    defectiveQuantity: number;
    verificationNotes?: string;
    verifiedByName?: string;
    rejectShipment?: boolean;
  }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/verify`, verificationData);
  }

  deleteDelivery(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
