import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchDetailService } from '../../services/search-detail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  details$: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SearchDetailService
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(data => {
        this.details$ = this.service.get(data.id);
      });
  }

}
