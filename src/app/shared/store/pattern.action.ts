import { Action, createAction, props } from '@ngrx/store';
import * as fromReducer from './pattern.reducer';

export const loadRequest = createAction('[Pattern] Load Request');

export const loadRequestSuccess = createAction(
  '[Pattern] Load Request success',
  props<{ payload: fromReducer.Pattern[] }>()
);

export const loadRequestFailure = createAction(
  '[Pattern] Load Request failure',
  props<{ payload: any }>()
);
