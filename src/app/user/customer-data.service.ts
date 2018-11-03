import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './user-home/data-table/data-table-datasource';
import { MatDialog } from '@angular/material';
import { FeedbackDialogComponent, Feedback } from './user-home/unfinished/feedback-dialog/feedback-dialog.component';

@Injectable()
export class CustomerDataService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getCustomersUnfinished() {
    return this.http.get<Customer[]>(`/api/users/me/customers`);
  }
  getCustomersFinished() {
    return this.http.get<Customer[]>(`/api/users/me/customers/finished`);
  }
  getCustomersNewlyAssigned() {
    return this.http.get<Customer[]>(`/api/users/me/customers/newlyassigned`);
  }

  show(id: string) {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '300px',
      height: '400px',
      data: { id: id }
    });
    return dialogRef.afterClosed();
  }

  enterFeedback(id: string, feedback: Feedback) {
    return this.http.patch(`/api/customers/${id}`, feedback);
  }
}
