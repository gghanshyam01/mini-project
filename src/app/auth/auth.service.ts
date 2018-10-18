import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { User } from '../shared/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatusSource = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  registerUser(user: FormData) {
    return this.http.post(`/api/auth/users/register`, user);
  }

  loginUser(user: User) {
    return this.http.post(`/api/auth/users/login`, user);
  }

  logoutUser() {
    return this.http.delete(`/api/auth/users/me/logout`, {
      observe: 'response'
    });
  }

  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get(`/api/users/me`, { observe: 'response' }).subscribe(
        (res: HttpResponse<any>) => {
          if (res.status === 200) {
            this.loginStatusSource.next(true);
            resolve(true);
          } else {
            this.loginStatusSource.next(false);
            return resolve(false);
          }
        },
        err => {
          this.loginStatusSource.next(false);
          return resolve(false);
        }
      );
    });
  }
}
