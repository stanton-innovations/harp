import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDetailComponent } from './containers/search-detail/search-detail.component';

const routes: Routes = [
  {
    path: 'detail',
    component: SearchDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDetailRoutingModule { }
