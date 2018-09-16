import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {
  @ViewChild('drawer') drawer: MatDrawer;
  constructor(private breakpointObserver: BreakpointObserver) { }
  // navLinks = ['Log In', 'Sign Up'];
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  onSidenavClick() {
    this.drawer.close();
  }


}
