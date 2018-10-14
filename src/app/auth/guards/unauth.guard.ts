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
      // this.router.navigateByUrl('/user-home');
      return false;
    });
    // console.log(this.authService.isLoggedIn);
    // return !this.authService.isLoggedIn;
  }
}
