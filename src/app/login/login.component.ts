import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    showProgressBar = false;
    hide = true;
    loginForm = this.fb.group({
        email: this.email,
        password: this.password
    });
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

    onKeyPress(evt: KeyboardEvent) {
        // console.log(evt);
        if (evt.keyCode === 13) {
            if (!(this.email.invalid || this.password.invalid)) {
                this.onLoginClick();
            }
        }
    }

    getEmailErrorMessage(): string {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    }
    getPasswordErrorMessage(): string {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Password should be min 5 characters' : '';
    }

    onLoginClick() {
        this.showProgressBar = true;
        console.log(this.loginForm.value);
        return setTimeout(() => {
            console.log('Logged In');
            this.showProgressBar = false;
            return true;
        }, 3000);
    }

}
