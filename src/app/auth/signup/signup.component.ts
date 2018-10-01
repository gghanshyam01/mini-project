import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    // email = new FormControl('', [Validators.required, Validators.email]);
    // password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    showProgressBar = false;
    hide = true;
    signupForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10),
                        Validators.maxLength(10)])],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
    }

    getFNameErrorMessage(): string {
        const firstNameControl = this.signupForm.controls.firstName;
        return firstNameControl.hasError('required') ? 'You must enter a value' : '';
    }

    getLNameErrorMessage(): string {
        const lastNameControl = this.signupForm.controls.lastName;
        return lastNameControl.hasError('required') ? 'You must enter a value' : '';
    }

    getEmailErrorMessage(): string {
        const emailControl = this.signupForm.controls.email;
        return emailControl.hasError('required') ? 'You must enter a value' :
            emailControl.hasError('email') ? 'Not a valid email' : '';
    }

    getMobileErrorMessage(): string {
        const mobileNumberControl = this.signupForm.controls.mobileNumber;
        return mobileNumberControl.hasError('required') ? 'You must enter a value' :
            mobileNumberControl.hasError('minlength') ? 'Should be 10 digits' : '';
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
        const passwdControl = this.signupForm.controls.password;
        return passwdControl.hasError('required') ? 'You must enter a value' :
            passwdControl.hasError('minlength') ? 'Password should be min 5 characters' : '';
    }

    getConfirmPasswordErrorMessage(): string {
        const confirmPasswdControl = this.signupForm.controls.confirmPassword;
        return confirmPasswdControl.hasError('required') ? 'You must enter a value' :
            confirmPasswdControl.hasError('minlength') ? 'Password should be min 5 characters' : '';
    }

    onSignupClick() {
        this.authService.registerUser(this.signupForm.value);
    }
}
