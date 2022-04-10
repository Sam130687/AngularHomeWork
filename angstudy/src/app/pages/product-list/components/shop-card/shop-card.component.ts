import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../../../interface/product';

@Component({
	selector: 'app-shop-card',
	templateUrl: './shop-card.component.html',
	styleUrls: ['./shop-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input() public product!: IProduct;
	@Output() addToBasket = new EventEmitter<IProduct>();

	onAddToBasket(event: Event) {
		event.stopPropagation();
		this.addToBasket.emit(this.product);
	}
}
