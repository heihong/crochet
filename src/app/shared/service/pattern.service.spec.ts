import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PatternService } from './pattern.service';
import { pikachu, pikachu2 } from '../mocks/patterns';

describe('PatternService', () => {
  let service: PatternService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = TestBed.inject(PatternService);
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

  it('should get pattern', () => {
    const Patterns = [pikachu, pikachu2];
    (httpSpy.get as jasmine.Spy).and.returnValues(of(Patterns));
    service.getPattern().subscribe((x) => {
      expect(x).toEqual(Patterns);
    });
  });
});
