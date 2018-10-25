import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  showProgressBar = false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getEmailErrorMessage(): string {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
}

}
