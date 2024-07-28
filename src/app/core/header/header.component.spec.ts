import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { PatternListComponent } from '../../features/patterns/pattern-list/pattern-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../../shared/store/pattern.reducer';

describe('HeaderComponent', () => {
  let store: MockStore;
  let app: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PatternListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.inject(MockStore);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
