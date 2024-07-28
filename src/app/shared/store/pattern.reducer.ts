import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import * as fromActions from './pattern.action';
import { Pattern } from '../models/pattern.interface';

export interface PatternState {
  patterns: Pattern[];
  isLoading: boolean;
}

export const initialState: PatternState = {
  patterns: [],
  isLoading: false,
};

const initPatternReducer = createReducer(
  initialState,
  on(fromActions.loadRequest, (state: PatternState) => ({
    ...state,
    isLoading: true,
  })),
  on(
    fromActions.loadRequestSuccess,
    (state: PatternState, action: { payload: Pattern[] }) => ({
      ...state,
      patterns: action.payload,
      isLoading: false,
    })
  )
);

export function PatternReducer(
  state: PatternState | undefined,
  action: Action
) {
  return initPatternReducer(state, action);
}

export const PatternStateSelector =
  createFeatureSelector<PatternState>('PatternState');
