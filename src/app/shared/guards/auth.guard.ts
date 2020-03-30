import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // check if user authorized in localStorage
        if (localStorage.getItem('testAuth') === 'true') {
            return true;
        } else {
            this.router.navigate(['/login'], {
                queryParams: {auth: false}
            });
        }
    }
}
