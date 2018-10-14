import { Injectable, ErrorHandler } from '@angular/core';

import { MongooseError } from './mongoose-error.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  handleError(error) {
    if (!(error instanceof HttpErrorResponse)) {
      return;
    }
    if (error.status === 400) {
      const err: MongooseError = error.error;
      if (err.errors.email) {
        console.log(err.errors.email.message);
      }
      if (err.errors.mobileNumber) {
        console.log(err.errors.mobileNumber.message);
      }
    } else {
      console.log('Unknown error', error);
    }
  }
}
