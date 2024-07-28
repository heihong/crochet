// imports omitted for brevity

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { PatternService } from '../service/pattern.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { pikachu, pikachu2 } from '../mocks/patterns';
import { Observable, of } from 'rxjs';
import { patternResolver } from './pattern.resolver';

describe('patternResolver', () => {
  let router: jasmine.SpyObj<Router>;
  let route: jasmine.SpyObj<ActivatedRoute>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let service: PatternService;
  let store: MockStore;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    route = jasmine.createSpyObj('ActivatedRoute', ['']);
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PatternService();

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideMockStore(), PatternService],
    });

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  it('should return a pattern', (done: DoneFn) => {
    const initialState = {
      patterns: [pikachu, pikachu2],
      isLoading: false,
    };
    httpClient.get.and.returnValue(of([pikachu, pikachu2]));

    const routeStub = {
      paramMap: {
        get: (_key: string) => '1',
      },
    };
    const stateStub = {};

    TestBed.runInInjectionContext(() => {
      const result = patternResolver(
        routeStub as ActivatedRouteSnapshot,
        stateStub as RouterStateSnapshot
      );

      if (result instanceof Observable) {
        result.subscribe((task) => {
          expect(store.dispatch).toHaveBeenCalled();

          done();
        });
      } else {
        fail('patternResolver did not return an Observable');
      }
    });
  });
});
