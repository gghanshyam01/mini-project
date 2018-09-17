import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // email = new FormControl('', [Validators.required, Validators.email]);
    // password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    showProgressBar = false;
    hide = true;
    loginForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }

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
        return emailControl.hasError('required') ? 'You must enter a value' :
            emailControl.hasError('email') ? 'Not a valid email' : '';
    }
    getPasswordErrorMessage(): string {
        const passwdControl = this.loginForm.controls.password;
        return passwdControl.hasError('required') ? 'You must enter a value' :
            passwdControl.hasError('minlength') ? 'Password should be min 5 characters' : '';
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
