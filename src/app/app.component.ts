import { Component } from '@angular/core';
import { TinkerService } from './services/tinker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tinker: TinkerService) {
    this.tinker.get();
  }
}
