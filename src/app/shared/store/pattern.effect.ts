import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as fromActions from './pattern.action';
import { HttpClient } from '@angular/common/http';
import { Pattern } from './pattern.reducer';

@Injectable()
export class PatternEffects {
  http = inject(HttpClient);
  actions$ = inject(Actions);

  loadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadRequest),
      mergeMap(() =>
        this.http.get<Pattern[]>('http://localhost:3000/').pipe(
          tap((x) => console.log(x)),
          map((result: Pattern[]) => {
            return fromActions.loadRequestSuccess({ payload: result });
          }),
          catchError((error) => of(fromActions.loadRequestFailure(error)))
        )
      )
    );
  });
}
