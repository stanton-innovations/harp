import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromSearch from '../../store/';
import { SearchResult } from '../../models/search-result';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Observable<SearchResult[]>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromSearch.SearchState>) { }

  ngOnInit() {
    this.activatedRoute
      .queryParamMap
      .subscribe((query: any) => {
        if (query.params.search) {
          this.searchResults = this.store.select(fromSearch.getAllSearchResults);
          this.store.dispatch(new fromSearch.LoadSearchResults(query.params.search));
        }
    });
  }

  showDetail(result: any) {
    this.router.navigate(['detail'], {
      skipLocationChange: true,
      queryParams: {
        id: result.id
      }
    });
  }
}
