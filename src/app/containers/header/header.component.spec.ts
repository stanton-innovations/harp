import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {StoreComponent} from '../../components/store/store.component';
import {StoreLocationComponent} from '../../components/store-location/store-location.component';
import {SearchComponent} from '../../components/search/search.component';
import {ProfileComponent} from '../../components/profile/profile.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        StoreLocationComponent,
        SearchComponent,
        ProfileComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
