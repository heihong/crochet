import { createAction, props } from '@ngrx/store';
import { Pattern } from '../models/pattern.interface';

export const loadRequest = createAction('[Pattern] Load Request');

export const loadRequestSuccess = createAction(
  '[Pattern] Load Request success',
  props<{ payload: Pattern[] }>()
);

export const loadRequestFailure = createAction(
  '[Pattern] Load Request failure',
  props<{ payload: any }>()
);
