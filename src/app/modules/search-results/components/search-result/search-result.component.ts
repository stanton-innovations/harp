import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() result;
  constructor() { }

  ngOnInit() {
  }

}
