import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

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
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    getEmailErrorMessage(): string {
        const emailControl = this.signupForm.controls.email;
        return emailControl.hasError('required') ? 'You must enter a value' :
            emailControl.hasError('email') ? 'Not a valid email' : '';
    }

    getPasswordErrorMessage(): string {
        const passwdControl = this.signupForm.controls.password;
        return passwdControl.hasError('required') ? 'You must enter a value' :
            passwdControl.hasError('minlength') ? 'Password should be min 5 characters' : '';
    }

    onSignupClick() {
        console.log(this.signupForm);
    }
}
