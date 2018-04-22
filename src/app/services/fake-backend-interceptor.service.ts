import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap, tap } from 'rxjs/internal/operators';

import { Pokemon } from '../api/json';

@Injectable()
export class FakeBackendInterceptorService implements HttpInterceptor {

  constructor() {}

  whichPokemon(id) {
    const details = Pokemon.details;
    return details;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {

        if (request.url.endsWith('/api/characters') && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: Pokemon.list.list.results}));
        }

        if (request.url.match(/\/api\/characters\/\d+$/) && request.method === 'GET') {
          const urlParts = request.url.split('/');
          const id = parseInt(urlParts[urlParts.length - 1]);
          return of(new HttpResponse({ status: 200, body: this.whichPokemon(id) }));
        }
        return next.handle(request);
      }),
      // tap(data => console.log(data)),
      materialize(),
      delay(500),
      dematerialize()
    );
  }
}
export let FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptorService,
  multi: true
};
