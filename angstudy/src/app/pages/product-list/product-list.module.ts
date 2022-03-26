import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ShopCardComponent } from '../../pages/product-list/components/shop-card/shop-card.component';
import { AccordionComponent } from '../../pages/product-list/components/accordion/accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { PipesModule } from '../../pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { CarouselDirective } from '../../directives/carousel.directive';

@NgModule({
  declarations: [
    ProductListComponent,
		ShopCardComponent,
		AccordionComponent,
    StarRatingComponent,		
		CarouselDirective,
  ],
  imports: [
    CommonModule, 
    ProductListRoutingModule,
    CdkAccordionModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatBadgeModule,
		MatMenuModule,
    PipesModule,
    MatFormFieldModule,
  ]
})
export class ProductListModule { }
