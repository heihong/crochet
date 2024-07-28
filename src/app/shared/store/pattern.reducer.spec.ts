import { Pattern } from '../models/pattern.interface';
import * as fromReducer from './pattern.reducer';
import * as fromActions from './pattern.action';
import { pikachu, pikachu2 } from '../mocks/patterns';

describe('initPatternReducer', () => {
  it('should return the default state', () => {
    const initialState = {
      patterns: [pikachu, pikachu2],
      isLoading: false,
    };
    const action = fromActions.loadRequest();
    const state = fromReducer.PatternReducer(initialState, action);
    expect(state).toEqual({
      patterns: [pikachu, pikachu2],
      isLoading: true,
    });
  });

  it('should retrieve all books and update the state in an immutable way', () => {
    const initialState = {
      patterns: [pikachu, pikachu2],
      isLoading: false,
    };
    const newState: Array<Pattern> = [pikachu, pikachu2];
    const action = fromActions.loadRequestSuccess({ payload: newState });
    const state = fromReducer.PatternReducer(initialState, action);

    expect(state.patterns).toEqual(newState);
  });
});
