import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Unguard');
    return this.authService.isAuthenticated().then(isAuthenticated => {
      if (!isAuthenticated) {
        return true;
      }
      console.log(this.authService.userIsAdmin);
      if (this.authService.userIsAdmin) {
        this.router.navigateByUrl('/admin-home');
      } else {
        this.router.navigateByUrl('/user-home');
      }
      return false;
    });
  }
}
