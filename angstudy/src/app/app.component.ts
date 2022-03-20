import { Component, OnInit } from '@angular/core';
import { products } from './mocks/products.mock';
import { categories } from './mocks/categories';
import { IImage } from './interface/image';
import { images } from './mocks/images';
import { mapTo, Observable, timer } from 'rxjs';
import { Product } from './mocks/product-info-mosk';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
//	@Input() public product: ICartProduct = {} as ICartProduct;
//@Input() public category: ICategory = {} as ICategory;
//Временно пока не прилетает извне    
	
	readonly storeName: string = 'Мой магазинчик на коленке';
	basketNum: number = 0;
	readonly products = products;
	readonly category = categories;
	carouselImage$!: Observable<IImage[]>;
    readonly productCard = Product;
	searchText = '';

	public orderGood() {
		this.basketNum++;
	}
	
	ngOnInit() {
		this.carouselImage$ = this.getCarouselImage$();
	}

	private getCarouselImage$(): Observable<IImage[]> {
		return timer(0).pipe(mapTo(images));
	}

	onInput(element: Event) {
		this.searchText = (element.target as HTMLInputElement).value;
	}
}
