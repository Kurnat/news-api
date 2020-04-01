import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAdminPermission(): boolean {
    const testAuth: string | null = localStorage.getItem('testAuth');
    return JSON.parse(testAuth);
  }

  setAdminPermission(permission: boolean): void {
    const testAuth: string | null = JSON.stringify(permission);
    localStorage.setItem('testAuth', testAuth);
  }

}
