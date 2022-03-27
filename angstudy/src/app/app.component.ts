import { Component, OnInit } from '@angular/core';
import { IImage } from './interface/image';
import { Observable } from 'rxjs';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { IProduct } from './interface/product';
import { ICategory } from './interface/category';
import { CarouselImagesService } from './services/carousel-images.service';
import { ProductCardService } from './services/product-card.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
	readonly storeName: string = 'Мой магазинчик на коленке';
	basketNum: number = 0;
	products$!: Observable<IProduct[]>;
	carouselImage$!: Observable<IImage[]>;
	categories$!: Observable<ICategory[]>;	
    productCard$!: Observable<IProduct>;
	searchText = '';

	constructor(
		private productsService: ProductsService,
		private carouselImagesService: CarouselImagesService,
		private categoriesService: CategoriesService,
		private productCardService: ProductCardService
		) {}

	public orderGood() {
		this.basketNum++;
	}
	
	ngOnInit() {
		this.carouselImage$ = this.carouselImagesService.getImages$();
		this.products$ = this.productsService.getProducts$();
		this.categories$ = this.categoriesService.getCategories$();
		this.productCard$ = this.productCardService.getProduct$();
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}
}
