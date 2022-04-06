import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../../../interface/product';
import { BasketService } from '../../../../services/basket.service';

@Component({
	selector: 'app-goods-card',
	templateUrl: './goods-card.component.html',
	styleUrls: ['./goods-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsCardComponent {
	@Input() public product!: IProduct;

	constructor(private basketService: BasketService) {}

	addProduct(product: IProduct) {
		this.basketService.addProductToBasket(product);//.subscribe(error => console.log(error));
	};
}
