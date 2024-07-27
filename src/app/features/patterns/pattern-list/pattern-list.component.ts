import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '../../../shared/store/pattern.reducer';
import * as fromSelectors from '../../../shared/store/pattern.selectors';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pattern-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './pattern-list.component.html',
  styleUrl: './pattern-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternListComponent {
  patternStore = inject(Store<fromReducer.PatternState>);

  patterns$ = this.patternStore.select(pipe(fromSelectors.selectPatterns));
  loading$ = this.patternStore.select(pipe(fromSelectors.selectLoading));
}
