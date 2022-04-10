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

	getCountProducts(basketGoods: IProduct[]): number {
		if (basketGoods.length > 0) {
			return basketGoods.reduce((summ, value) => summ + (value?.count || 0), 0)
		}

		return 0;
	} 
}
