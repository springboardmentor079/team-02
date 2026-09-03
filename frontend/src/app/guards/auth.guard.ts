import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      if (route.data && route.data['roles']) {
        const userRole = currentUser.role?.toLowerCase() || '';
        const allowedRoles: string[] = route.data['roles'];
        const hasAccess = allowedRoles.some((r: string) => r.toLowerCase() === userRole);
        if (!hasAccess) {
          this.router.navigate(['/dashboard']);
          return false;
        }
      }
      // Authorized - allow route execution
      return true;
    }

    // Not logged in - redirect to login page with return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
