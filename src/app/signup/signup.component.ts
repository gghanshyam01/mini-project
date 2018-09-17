import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    showProgressBar = false;
    hide = true;
    signupForm = this.fb.group({
        email: this.email,
        password: this.password
    });
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    getEmailErrorMessage(): string {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getPasswordErrorMessage(): string {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Password should be min 5 characters' : '';
    }

    onSignupClick() {
        console.log(this.signupForm.value);
    }
}
