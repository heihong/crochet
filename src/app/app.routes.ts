import { Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PatternReducer } from './shared/store/pattern.reducer';
import { PatternEffects } from './shared/store/pattern.effect';
import { PatternListComponent } from './features/patterns/pattern-list/pattern-list.component';
import { patternResolver } from './shared/resolvers/pattern.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    resolve: {
      data: patternResolver,
    },
    providers: [
      importProvidersFrom(
        // register feature reducer
        StoreModule.forFeature('PatternState', PatternReducer),
        EffectsModule.forFeature([PatternEffects])
      ),
    ],
    children: [
      {
        path: '',
        component: PatternListComponent,
      },
    ],
  },
];
