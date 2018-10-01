import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
