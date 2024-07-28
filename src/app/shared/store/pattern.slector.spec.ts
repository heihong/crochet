import { pikachu, pikachu2 } from '../mocks/patterns';
import { PatternState } from './pattern.reducer';
import { selectLoading, selectPatterns } from './pattern.selectors';

describe('Selectors', () => {
  const initialState: PatternState = {
    patterns: [pikachu, pikachu2],
    isLoading: false,
  };

  it('should select loading', () => {
    const result = selectLoading.projector(initialState.isLoading as any);
    expect(result).toBeFalsy();
  });

  it('should select pattern list', () => {
    const result = selectPatterns.projector(initialState.patterns as any);
    expect(result.length).toEqual(2);
    expect(result[1].id).toEqual('pikachu2');
  });
});
