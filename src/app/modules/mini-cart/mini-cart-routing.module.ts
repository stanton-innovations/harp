import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './containers/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    outlet: 'mini-cart'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniCartRoutingModule { }
