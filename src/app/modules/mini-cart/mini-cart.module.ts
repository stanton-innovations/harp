import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { MiniCartRoutingModule } from './mini-cart-routing.module';
import { CartComponent } from './containers/cart/cart.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MiniCartRoutingModule
  ],
  declarations: [CartComponent, ItemsComponent]
})
export class MiniCartModule { }
