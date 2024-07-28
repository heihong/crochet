import type { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import * as fromReducer from '../store/pattern.reducer';
import * as fromActions from '../store/pattern.action';
import { Store } from '@ngrx/store';

export const patternResolver: ResolveFn<any> = (route, state) => {
  const patternStore = inject(Store<fromReducer.PatternState>);
  patternStore.dispatch(fromActions.loadRequest());
  return state;
};
