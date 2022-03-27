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
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from '../../pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DirectiveModule } from '../../directives/directives.module';
import { StarRatingModule } from 'src/app/components/star-rating/star-rating.module';

@NgModule({
  declarations: [
    ProductListComponent,
		ShopCardComponent,
		AccordionComponent,
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
    DirectiveModule,
    StarRatingModule,
    MatInputModule,
  ]
})
export class ProductListModule { }
