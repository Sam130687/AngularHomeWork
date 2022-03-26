import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketNumComponent } from './components/basket-num/basket-num.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { BaseInterceptor } from './services/base.interceptor';
import { CarouselImagesService } from './services/carousel-images.service';
import { CategoriesService } from './services/categories.service';
import { ProductCardService } from './services/product-card.service';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

/**
 *  NgModule => es6
 *  declarations => let/const
 *  imports => import
 *  exports = export
 */

@NgModule({
	declarations: [
		AppComponent,	
		BasketNumComponent,
		HeaderComponent,
	],	
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		MatIconModule,
		MatBadgeModule,
		MatToolbarModule,
		MatCardModule,		
	],
	providers: [
		ProductsService,
		CarouselImagesService,
		CategoriesService,
		ProductCardService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
