import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    showProgressBar = false;
    hide = true;
    constructor() { }

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
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getPasswordErrorMessage(): string {
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }

    onLoginClick() {
        this.showProgressBar = true;
        return setTimeout(() => {
            console.log('Logged In');
            this.showProgressBar = false;
            return true;
        }, 3000);
    }

}
