import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface Feedback {
  comment: string;
  nextCallDate: string;
  finished: boolean;
}

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit, OnDestroy {
  isFinished = false;
  feedbackForm = this.fb.group({
    comment: ['', Validators.required],
    nextCallDate: [''],
    finished: [this.isFinished]
  });
  isValid = false;
  feedbackSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: string,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.feedbackSub = this.feedbackForm.statusChanges.subscribe(val => {
      this.isValid =
        !(val === 'INVALID') || this.feedbackForm.controls.finished.value;
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.feedbackSub.unsubscribe();
  }
}
