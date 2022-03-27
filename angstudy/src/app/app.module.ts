import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { ShopCardComponent } from './components/shop-card/shop-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { BasketNumComponent } from './components/basket-num/basket-num.component';
import { HeaderComponent } from './components/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatMenuModule } from '@angular/material/menu';
import { GoodsCardComponent } from './components/goods-card/goods-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselDirective } from './directives/carousel.directive';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';

/**
 *  NgModule => es6
 *  declarations => let/const
 *  imports => import
 *  exports = export
 */

@NgModule({
	declarations: [
		AppComponent,
		ShopCardComponent,
		StarRatingComponent,
		BasketNumComponent,
		HeaderComponent,
		AccordionComponent,
		GoodsCardComponent,
  CarouselDirective,
  ProductsFilterPipe,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatListModule,
		MatCardModule,
		MatBadgeModule,
		MatGridListModule,
		CdkAccordionModule,
		MatMenuModule,
		MatTabsModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
