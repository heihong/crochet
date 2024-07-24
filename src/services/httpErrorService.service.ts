import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor() {}

  formatError(err: HttpErrorResponse): string {
    return this.httpErrorFormater(err);
  }

  private httpErrorFormater(err: HttpErrorResponse): string {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `an error occurred ${err.error.message}`;
    } else {
      errorMessage = `server return code ${err.status}, error message is ${err.statusText}`;
    }
    return errorMessage;
  }
}
