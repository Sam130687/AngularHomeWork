import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { IProduct } from 'src/app/interface/product';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input() storeName!: string;

	constructor(private basketService: BasketService) {}

	public basket$ = this.basketService.basket$;	

	getCountProducts(arr: IProduct[]): number {
		let x = 0;
		if (arr.length > 0) {
			let res = arr.map((value) => x += value.count ? value.count : 0, x).reverse()[0];
			return res ? res : 0;
		}

		return 0;
	} 
}
