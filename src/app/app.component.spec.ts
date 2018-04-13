import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
});
