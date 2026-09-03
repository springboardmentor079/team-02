import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InventoryItem {
  _id?: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  threshold: number;
  costPerUnit: number;
  createdAt?: string | Date;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = '/api/inventory';

  constructor(private http: HttpClient) {}

  getInventory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addInventoryItem(item: InventoryItem): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateInventoryItem(id: string, item: Partial<InventoryItem>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteInventoryItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
