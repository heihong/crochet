import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { patternResolver } from './shared/resolvers/pattern.resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      pattern: patternResolver,
    },
  },
];
