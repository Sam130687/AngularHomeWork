import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card.component';
import { GoodsCardComponent } from './components/goods-card/goods-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ProductCardComponent,
    GoodsCardComponent,
  ],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
  ]
})
export class ProductCardModule { }
