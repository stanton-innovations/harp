import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSearchDetails from '../../../search-detail/store';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  details$: Observable<any>;
  constructor(
    private store: Store<fromSearchDetails.LoadSearchDetailResult>,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(data => {
        console.log('data', data);
        this.details$ = this.store.select(fromSearchDetails.getSearchDetailResult);
        this.store.dispatch(new fromSearchDetails.LoadSearchDetailResult(data.id));
      });
  }

}
