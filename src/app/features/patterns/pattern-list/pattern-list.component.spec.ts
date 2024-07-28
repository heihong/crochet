import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatternListComponent } from './pattern-list.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Patterns, pikachu, pikachu2 } from '../../../shared/mocks/patterns';
import {
  selectLoading,
  selectPatterns,
} from '../../../shared/store/pattern.selectors';
import { Pattern } from '../../../shared/models/pattern.interface';

describe('PatternListComponent', () => {
  let store: MockStore;
  const initialState = { patterns: Patterns, isLoading: false };
  let app: PatternListComponent;
  let fixture: ComponentFixture<PatternListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AsyncPipe],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    fixture = TestBed.createComponent(PatternListComponent);
    store = TestBed.inject(MockStore);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should return pattern = [pikachu, pikachu2]', () => {
    store.overrideSelector(selectPatterns, Patterns);
    fixture.detectChanges();
    let pattern: Pattern[];
    app.patterns$.subscribe((x) => {
      pattern = x;
      expect(pattern).toEqual([pikachu, pikachu2]);
    });
  });

  it('should return loading = false', () => {
    store.overrideSelector(selectLoading, false);
    fixture.detectChanges();
    let loading: boolean;
    app.loading$.subscribe((x) => {
      loading = x;
      expect(loading).toBeFalsy();
    });
  });
});
