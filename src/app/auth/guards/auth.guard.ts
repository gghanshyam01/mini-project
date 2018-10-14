import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, CanActivate } from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    console.log('CanActivate');
    return this.authService.isAuthenticated().then(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
    });
    // return this.authService.isLoggedIn;
  }
  canLoad() {
    console.log('CanLoad');
    return this.authService.isAuthenticated().then(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
    });

    // return this.authService.isLoggedIn;
  }
}
