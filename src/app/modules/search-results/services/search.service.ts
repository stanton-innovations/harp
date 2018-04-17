import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  get() {
    console.log('GET::::::::::::::::::::::::::::::::::::::::::::::::::')
    return this.http.get('/api/characters');
  }
}
