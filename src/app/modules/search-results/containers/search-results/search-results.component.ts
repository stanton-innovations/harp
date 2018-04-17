import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSearch from '../../store/';
@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private store: Store<fromSearch.SearchState>) { }

  ngOnInit() {
    this.store.select(fromSearch.getSearchResults).subscribe(data => console.log(data));
  }

}
