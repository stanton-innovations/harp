import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailComponent } from './search-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchDetailService } from '../../services/search-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchDetailComponent', () => {
  let component: SearchDetailComponent;
  let fixture: ComponentFixture<SearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ SearchDetailComponent ],
      providers: [SearchDetailService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
