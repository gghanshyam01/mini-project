import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    // console.log(user.confirmPassword);
    this.http.post(`/api/auth/registeruser`, user)
      .subscribe((res) => console.log(res));
  }
}
