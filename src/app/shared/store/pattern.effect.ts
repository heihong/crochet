import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as fromActions from './pattern.action';
import { HttpClient } from '@angular/common/http';
import { Pattern } from '../models/pattern.interface';
import { PatternService } from '../service/pattern.service';

@Injectable()
export class PatternEffects {
  service = inject(PatternService);
  actions$ = inject(Actions);

  loadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadRequest),
      mergeMap(() =>
        this.service.getPattern().pipe(
          map((result: Pattern[]) => {
            return fromActions.loadRequestSuccess({ payload: result });
          }),
          catchError((error) => of(fromActions.loadRequestFailure(error)))
        )
      )
    );
  });
}
