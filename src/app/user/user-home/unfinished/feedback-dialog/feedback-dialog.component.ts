import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

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
export class FeedbackDialogComponent implements OnInit {
  isFinished = false;
  feedbackForm = this.fb.group({
    comment: ['', Validators.required],
    nextCallDate: [''],
    finished: [this.isFinished]
  });
  isValid = false;
  constructor(
    public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: string,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.feedbackForm.statusChanges.subscribe(val => {
      this.isValid = val === 'INVALID' ? false : true;
      this.isValid = this.isValid || this.feedbackForm.controls.finished.value;
      console.log(val);
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
