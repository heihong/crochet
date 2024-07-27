import { createSelector } from '@ngrx/store';
import * as fromReducer from './pattern.reducer';

export const selectPatterns = createSelector(
  fromReducer.PatternStateSelector,
  (state: fromReducer.PatternState) => state.patterns
);
export const selectLoading = createSelector(
  fromReducer.PatternStateSelector,
  (state: fromReducer.PatternState) => state.isLoading
);
