import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoShareService {
  headerProgressBar = new Subject<boolean>();
  constructor() {}

  showProgressBar() {
    this.headerProgressBar.next(true);
  }

  hideProgressBar() {
    this.headerProgressBar.next(false);
  }
}
