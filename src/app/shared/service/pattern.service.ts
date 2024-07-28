import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pattern } from '../models/pattern.interface';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  http = inject(HttpClient);

  getPattern() {
    return this.http.get<Pattern[]>('http://localhost:3000/');
  }
}
