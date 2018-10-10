import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  registerUser(user: User) {
    // console.log(user.confirmPassword);
    user.confirmPassword = undefined;
    return this.http.post(`/api/auth/users/register`, user);
  }
}
