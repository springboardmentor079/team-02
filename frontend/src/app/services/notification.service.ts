import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, tap } from 'rxjs';

export interface NotificationItem {
  _id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'danger' | 'success';
  category: 'inventory' | 'procurement' | 'milestone' | 'system' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  recipientRole?: 'all' | 'administrator' | 'project manager' | 'site engineer' | 'contractor' | 'client';
  channel?: 'in_app' | 'email' | 'sms' | 'all';
  read: boolean;
  link?: string;
  metadata?: any;
  createdAt: string | Date;
}

export interface NotificationStats {
  total: number;
  unread: number;
  urgent: number;
  high: number;
  inventory: number;
  procurement: number;
  milestones: number;
  system: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'danger' | 'success';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  link?: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = '/api/notifications';

  private notificationsSubject = new BehaviorSubject<NotificationItem[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  private statsSubject = new BehaviorSubject<NotificationStats | null>(null);
  public stats$ = this.statsSubject.asObservable();

  private toastSubject = new Subject<ToastMessage>();
  public toast$ = this.toastSubject.asObservable();

  public soundEnabled = true;

  constructor(private http: HttpClient) {}

  fetchNotifications(filters?: { search?: string; category?: string; priority?: string; type?: string; read?: string; role?: string }): Observable<any> {
    let params = new HttpParams();
    if (filters) {
      Object.keys(filters).forEach(key => {
        const val = (filters as any)[key];
        if (val !== undefined && val !== null && val !== '') {
          params = params.set(key, val);
        }
      });
    }

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      tap(res => {
        if (res.success && Array.isArray(res.data)) {
          this.notificationsSubject.next(res.data);
          const unread = res.data.filter((n: NotificationItem) => !n.read).length;
          this.unreadCountSubject.next(unread);
          this.refreshStats();
        }
      })
    );
  }

  fetchStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`).pipe(
      tap(res => {
        if (res.success && res.data) {
          this.statsSubject.next(res.data);
        }
      })
    );
  }

  refreshStats() {
    this.fetchStats().subscribe();
  }

  markAsRead(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => this.fetchNotifications().subscribe())
    );
  }

  markAllAsRead(): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => {
        this.triggerToast({
          id: Date.now().toString(),
          title: 'Notifications Cleared',
          message: 'All notifications marked as read.',
          type: 'info'
        });
        this.fetchNotifications().subscribe();
      })
    );
  }

  clearAllRead(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/clear-read`).pipe(
      tap(() => {
        this.triggerToast({
          id: Date.now().toString(),
          title: 'Read Log Cleaned',
          message: 'Cleared all read notification items from memory.',
          type: 'success'
        });
        this.fetchNotifications().subscribe();
      })
    );
  }

  deleteNotification(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.fetchNotifications().subscribe())
    );
  }

  broadcastNotification(payload: {
    title: string;
    message: string;
    type?: 'info' | 'warning' | 'danger' | 'success';
    priority?: 'low' | 'medium' | 'high' | 'urgent';
    category?: 'inventory' | 'procurement' | 'milestone' | 'system' | 'general';
    recipientRole?: string;
    channel?: string;
    link?: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/broadcast`, payload).pipe(
      tap(res => {
        if (res.success && res.data) {
          this.triggerToast({
            id: res.data._id || Date.now().toString(),
            title: `[BROADCAST] ${res.data.title}`,
            message: res.data.message,
            type: res.data.type,
            priority: res.data.priority,
            link: res.data.link
          });
          this.fetchNotifications().subscribe();
        }
      })
    );
  }

  triggerSystemCheck(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/trigger-system-alert`, {}).pipe(
      tap(res => {
        if (res.success && Array.isArray(res.data)) {
          const alertCount = res.data.length;
          this.triggerToast({
            id: Date.now().toString(),
            title: 'System Audit Completed',
            message: `Scanned inventory & milestones. Generated ${alertCount} alert updates.`,
            type: 'success'
          });
          this.fetchNotifications().subscribe();
        }
      })
    );
  }

  triggerToast(toast: ToastMessage) {
    this.toastSubject.next(toast);
    if (this.soundEnabled && (toast.type === 'danger' || toast.type === 'warning' || toast.priority === 'urgent' || toast.priority === 'high')) {
      this.playChime(toast.type === 'danger' ? 'urgent' : 'normal');
    }
  }

  playChime(mode: 'urgent' | 'normal' = 'normal') {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = mode === 'urgent' ? 'sawtooth' : 'sine';
      const freq = mode === 'urgent' ? 880 : 587.33; // A5 or D5 tone
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      if (mode === 'urgent') {
        osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.15);
      } else {
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      }

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch (e) {
      // Ignore browser audio context block if user hasn't interacted yet
    }
  }

  toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }
}
