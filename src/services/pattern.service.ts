import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatternService {
  http = inject(HttpClient);

  constructor() {}

  getPattern() {
    return this.http.get('http://localhost:3000/');
  }
}
