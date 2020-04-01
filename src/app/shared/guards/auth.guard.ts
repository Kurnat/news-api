import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
        private authService: AuthService,
        private router: Router,
  ) { }
  canActivate( ): Observable<boolean> | Promise<boolean> | boolean {
    // check if user authorized in localStorage
     if (this.authService.getAdminPermission()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { auth: false }
      });
    }
  }
}
