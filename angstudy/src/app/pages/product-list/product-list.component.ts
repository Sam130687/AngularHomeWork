import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IImage } from '../../interface/image';
import { IProduct } from '../../interface/product';
import { ICategory } from '../../interface/category';
//import { ProductsService } from '../../services/products.service';
import { CarouselImagesService } from '../../services/carousel-images.service';
import { CategoriesService } from '../../services/categories.service';
import { BasketService } from '../../services/basket.service';
import { ProductsStoreService } from 'src/app/services/products-store.service';
import { select, Store } from '@ngrx/store';
import { IState } from 'src/app/store/reducers';
import { getProducts } from 'src/app/store/reducers/products.reducer';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
	searchText = '';
	products$!: Observable<IProduct[]>;
	carouselImage$!: Observable<IImage[]>;
	categories$!: Observable<ICategory[]>;

	constructor(
		//private productsService: ProductsService,
		private carouselImagesService: CarouselImagesService,
		private categoriesService: CategoriesService,
		private basketService: BasketService,
		private productsStoreService: ProductsStoreService,
		private store: Store<IState>,
	) {}

	ngOnInit(): void {
		this.carouselImage$ = this.carouselImagesService.getImages$();
		//this.products$ = this.productsService.getProducts$();
		this.categories$ = this.categoriesService.getCategories$();
		this.products$ = this.store.pipe(select(getProducts));
		this.productsStoreService.loadProducts();
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}

	addProduct(product: IProduct) {
		this.basketService.addProductToBasket(product);//.subscribe(error => console.log(error));
	}
}
