import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('bt_user');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map(res => {
        if (res && res.token) {
          localStorage.setItem('bt_token', res.token);
          localStorage.setItem('bt_user', JSON.stringify(res.user));
          this.currentUserSubject.next(res.user);
        }
        return res;
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      map(res => {
        if (res && res.token) {
          localStorage.setItem('bt_token', res.token);
          localStorage.setItem('bt_user', JSON.stringify(res.user));
          this.currentUserSubject.next(res.user);
        }
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('bt_token');
    localStorage.removeItem('bt_user');
    this.currentUserSubject.next(null);
  }

  forgotPassword(data: { mobile?: string; email?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, data);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, data);
  }

  sendOtpEmail(email: string, type: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-otp-email`, { email, type });
  }

  hasRole(roles: string[]): boolean {
    const user = this.currentUserValue;
    if (!user) return false;
    return roles.includes(user.role);
  }

  getToken(): string | null {
    return localStorage.getItem('bt_token');
  }
}
