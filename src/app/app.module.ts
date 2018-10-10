import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import { HttpErrorHandler } from './shared/http-error-handler';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserActivateComponent } from './auth/user-activate/user-activate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserActivateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: HttpErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
