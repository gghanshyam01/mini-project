import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html',
  styleUrls: ['./user-activate.component.css']
})
export class UserActivateComponent implements OnInit, OnDestroy {
  status$ = '';
  subs: Subscription;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    this.subs = this.http
      .post(`/api/auth/users/activate`, { token })
      .subscribe((res: any) => {
        this.status$ = res.msg;
      }, err => {
        this.status$ = err.error;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
