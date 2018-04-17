import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSearch from '../../store/';
import { SearchResult } from '../../models/search-result';
import { Observable } from 'rxjs';
@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Observable<SearchResult[]>;
  constructor(private store: Store<fromSearch.SearchState>) { }

  ngOnInit() {
    this.searchResults = this.store.select(fromSearch.getAllSearchResults);
    this.store.dispatch(new fromSearch.LoadSearchResults());
  }

}
