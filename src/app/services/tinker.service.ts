import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TinkerService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('/api/characters/5').subscribe(data => console.log(data));
  }
}
