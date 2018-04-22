import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchDetailService {

  constructor(private http: HttpClient) { }

  get(id: string) {
    console.log(id);
    return this.http.get(`/api/characters/${id}`);
  }
}
