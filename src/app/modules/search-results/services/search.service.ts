import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../module.constants';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(api.results);
  }
}
