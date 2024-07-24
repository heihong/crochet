import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, tap, of, Observable, throwError } from 'rxjs';
import { HttpErrorService } from './httpErrorService.service';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  http = inject(HttpClient);
  httpErrorService = inject(HttpErrorService);

  constructor() {}

  getPattern() {
    return this.http.get('http://localhost:3000/').pipe(
      tap(() => console.log('in http.get pipeline ')),
      catchError((err) => this.handleError(err))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formattedMessage = this.httpErrorService.formatError(err);
    return throwError(() => formattedMessage);
    // throw formattedMessage;
  }
}
