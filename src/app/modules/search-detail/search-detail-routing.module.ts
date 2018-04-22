import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDetailComponent } from './containers/search-detail/search-detail.component';
import { navigation } from '../search-results/module.constants';

const routes: Routes = [
  {
    path: `${navigation.details}/:id`,
    component: SearchDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDetailRoutingModule { }
