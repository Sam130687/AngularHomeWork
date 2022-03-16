import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { ShopCardComponent } from './components/shop-card/shop-card.component';
import { GoodsGridComponent } from './components/goods-grid/goods-grid.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { BasketNumComponent } from './components/basket-num/basket-num.component';
import { HeaderComponent } from './components/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';

//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseURL = environment.baseUrl;

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
		GoodsGridComponent,
		StarRatingComponent,
		BasketNumComponent,
		HeaderComponent,
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
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
