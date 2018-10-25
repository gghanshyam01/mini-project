import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user.model';
import { InfoShareService } from 'src/app/shared/info-share.service';
// import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  error = '';
  subs: Subscription;
  showProgressBar = false;
  hide = true;
  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ]
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onKeyPress(evt: KeyboardEvent) {
    // console.log(evt);
    if (evt.keyCode === 13) {
      if (this.loginForm.valid) {
        this.onLoginClick();
      }
    }
  }

  getEmailErrorMessage(): string {
    const emailControl = this.loginForm.controls.email;
    return emailControl.hasError('required')
      ? 'You must enter a value'
      : emailControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
  getPasswordErrorMessage(): string {
    const passwdControl = this.loginForm.controls.password;
    return passwdControl.hasError('required')
      ? 'You must enter a value'
      : passwdControl.hasError('minlength')
        ? 'Password should be min 5 characters'
        : '';
  }

  onLoginClick() {
    this.showProgressBar = true;
    this.subs = this.authService.loginUser(this.loginForm.value).subscribe(
      resUser => {
        console.log('Login', resUser.email);
        // this.userService.user = new User(resUser.firstName, resUser.lastName, resUser.emailId)
        this.authService.loginStatusSource.next(true);
        if (resUser.isAdmin) {
          return this.router.navigateByUrl('/admin-home');
        }
        this.router.navigateByUrl('/user-home');
      },
      err => {
        console.log(err.error);
        this.error = err.error;
        this.showProgressBar = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
