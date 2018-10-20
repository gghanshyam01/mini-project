import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormGroupDirective
} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f')
  myFormRef: FormGroupDirective;
  checked = true;
  showProgressBar = false;
  hide = true;
  error = '';
  message = '';
  fileName = 'No file chosen';
  file: File;

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
      ],
      isAdmin: ['']
    },
    { validator: this.matchPasswordsValidator('password', 'confirmPassword') }
  );
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}

  upload(file: File) {
    this.error = '';
    if (file) {
      this.fileName = file.name;
      this.file = file;
    }
  }

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
    if (!this.file || !this.file.type.match(/image.*/)) {
      return (this.error = 'Please choose a valid ID proof');
    }
    this.message = '';
    this.error = '';
    this.showProgressBar = true;
    const formData = new FormData();
    const form = this.signupForm.value;
    Object.keys(form).forEach(key => formData.append(key, form[key]));
    formData.append('img', this.file);

    this.authService.registerUser(formData).subscribe(
      (res: any) => {
        this.message = res.msg;
        this.showProgressBar = false;
        console.log(this.myFormRef);
        this.myFormRef.resetForm();
        this.fileName = 'No file chosen';
        this.file = undefined;
      },
      err => {
        const monErr = err.error.errors;
        this.showProgressBar = false;
        if (!monErr && err.status >= 500) {
          return (this.error = 'Some error occurred. Please try again');
        } else if (!monErr && err.status >= 400) {
          return (this.error = err.error);
        }
        if (monErr.email) {
          this.error = monErr.email.message;
        } else if (monErr.mobileNumber) {
          this.error = monErr.mobileNumber.message;
        }
      }
    );
  }
}
