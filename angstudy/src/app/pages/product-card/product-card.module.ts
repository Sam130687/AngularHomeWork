import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card.component';
import { GoodsCardComponent } from './components/goods-card/goods-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { DirectiveModule } from 'src/app/directives/directives.module';
import { StarRatingModule } from 'src/app/components/star-rating/star-rating.module';


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
    DirectiveModule,
    StarRatingModule,
  ]
})
export class ProductCardModule { }
