import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchForm } from '../../models/search-result';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createSearchForm();
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      search: new FormControl()
    });
  }

  search(search) {
    this.router.navigate(['search'], {
      skipLocationChange: true,
      queryParams: {
        search: search
      }});
  }
}
