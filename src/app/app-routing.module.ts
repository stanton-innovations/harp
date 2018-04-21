import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/search-results/search-results.module#SearchResultsModule'
  },
  {
    path: '',
    loadChildren: './modules/search-detail/search-detail.module#SearchDetailModule'
  },
  {
    path: '',
    loadChildren: './modules/mini-cart/mini-cart.module#MiniCartModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
