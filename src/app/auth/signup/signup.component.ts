import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../auth.service';
import { MongooseError } from 'src/app/shared/mongoose-error.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showProgressBar = false;
  hide = true;
  error = '';
  message = '';

  signupForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobileNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ])
      ],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      confirmPassword: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    },
    { validator: this.matchPasswordsValidator('password', 'confirmPassword') }
  );
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  getFNameErrorMessage(): string {
    const firstNameControl = this.signupForm.controls.firstName;
    return firstNameControl.hasError('required')
      ? 'You must enter a value'
      : '';
  }

  getLNameErrorMessage(): string {
    const lastNameControl = this.signupForm.controls.lastName;
    return lastNameControl.hasError('required') ? 'You must enter a value' : '';
  }

  getEmailErrorMessage(): string {
    const emailControl = this.signupForm.controls.email;
    return emailControl.hasError('required')
      ? 'You must enter a value'
      : emailControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }

  getMobileErrorMessage(): string {
    const mobileNumberControl = this.signupForm.controls.mobileNumber;
    return mobileNumberControl.hasError('required')
      ? 'You must enter a value'
      : mobileNumberControl.hasError('minlength')
        ? 'Should be 10 digits'
        : '';
  }

  getGenderErrorMessage(): string {
    const genderControl = this.signupForm.controls.gender;
    return genderControl.hasError('required') ? 'You must select a value' : '';
  }

  getDobErrorMessage(): string {
    const dobControl = this.signupForm.controls.dob;
    return dobControl.hasError('required') ? 'You must select a value' : '';
  }

  getPasswordErrorMessage(): string {
    const passwordControl = this.signupForm.controls.password;
    return passwordControl.hasError('required')
      ? 'You must enter a value'
      : passwordControl.hasError('minlength')
        ? 'Password should be min 5 characters'
        : '';
  }

  getConfirmPasswordErrorMessage(): string {
    const confirmPasswdControl = this.signupForm.controls.confirmPassword;
    return confirmPasswdControl.hasError('required')
      ? 'You must enter a value'
      : confirmPasswdControl.hasError('minlength')
        ? 'Password should be min 5 characters'
        : confirmPasswdControl.hasError('passwordsMatchError')
          ? 'Passwords do not match'
          : '';
  }

  matchPasswordsValidator(password: string, confirmPassword: string) {
    return (group: FormGroup) => {
      const confirmPasswdControl = group.controls[confirmPassword];
      const passwdControl = group.controls[password];
      if (confirmPasswdControl.value !== passwdControl.value) {
        return confirmPasswdControl.setErrors({ passwordsMatchError: true });
      } else {
        confirmPasswdControl.setErrors(
          confirmPasswdControl.validator(confirmPasswdControl)
        );
      }
    };
  }

  onSignupClick() {
    this.message = '';
    this.showProgressBar = true;
    this.authService.registerUser(this.signupForm.value).subscribe(
      (res: any) => {
        this.message = res.msg;
        this.showProgressBar = false;
      },
      err => {
        const monErr = err.error.errors;
        this.showProgressBar = false;
        if (monErr.email) {
          this.error = monErr.email.message;
        } else if (monErr.mobileNumber) {
          this.error = monErr.mobileNumber.message;
        }
      }
    );
  }
}
