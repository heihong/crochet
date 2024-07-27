import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pattern-details',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>pattern-details works!</p>`,
    styleUrl: './pattern-details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternDetailsComponent { }
