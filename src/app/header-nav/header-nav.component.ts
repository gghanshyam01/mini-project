import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit, OnDestroy {
  showProgressBar = false;
  loggedIn = true;
  // loggedIn: boolean;
  subs: Subscription;
  logoutSubs: Subscription;
  @ViewChild('drawer')
  drawer: MatDrawer;
  navLinks = [
    {
      name: 'Log In',
      url: 'login'
    },
    {
      name: 'Sign Up',
      url: 'signup'
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.subs = this.authService.loginStatusSource.subscribe(status => {
      this.loggedIn = status;
    });
  }

  onSidenavClick() {
    this.drawer.close();
  }

  onLogoutClick(sidenav = false) {
    this.showProgressBar = true;
    this.logoutSubs = this.authService.logoutUser().subscribe(
      res => {
        if (res.status === 200) {
          this.router.navigateByUrl('/login');
          if (sidenav) {
            this.onSidenavClick();
          }
          this.authService.loginStatusSource.next(false);
          this.showProgressBar = false;
        } else {
          if (sidenav) {
            this.onSidenavClick();
          }
          this.openSnackBar();
          this.showProgressBar = false;
        }
      },
      err => {
        if (sidenav) {
          this.onSidenavClick();
        }
        this.openSnackBar();
        this.showProgressBar = false;
      }
    );
  }

  openSnackBar() {
    this.snackBar.open('Error while logging out. Please try again', '', {
      duration: 3000
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.logoutSubs) {
      this.logoutSubs.unsubscribe();
    }
  }
}
