import {
	Component,
	EventEmitter,
	Input,
	Output,
	ChangeDetectionStrategy,
} from '@angular/core';
import { ICartProduct } from '../../../assets/cards/cart-product';

@Component({
	selector: 'app-shop-card',
	templateUrl: './shop-card.component.html',
	styleUrls: ['./shop-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input() public product: ICartProduct = {} as ICartProduct;
	@Output() public orderGood = new EventEmitter();

	constructor() {}

	putOnBusket() {
		this.orderGood.emit();
	}
}
