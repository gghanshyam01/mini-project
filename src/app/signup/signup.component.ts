import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    showProgressBar = false;
    hide = true;
    constructor() { }

    ngOnInit() {
    }

    getEmailErrorMessage(): string {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getPasswordErrorMessage(): string {
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }

    onSignupClick() {

    }
}
