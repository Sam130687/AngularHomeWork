import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShopCardComponent } from './components/shop-card/shop-card.component';
import { MatCardModule } from '@angular/material/card';
import { BasketNumComponent } from './components/basket-num/basket-num.component';
import { MatBadgeModule } from '@angular/material/badge';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { GoodsGridComponent } from './components/goods-grid/goods-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopCardComponent,
    BasketNumComponent,
    StarRatingComponent,
    GoodsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
		MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
