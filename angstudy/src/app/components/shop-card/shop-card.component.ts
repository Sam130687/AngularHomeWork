import {
	Component,
	EventEmitter,
	Input,
	Output,
	ChangeDetectionStrategy,
} from '@angular/core';
import { IProduct } from '../../interface/product';

@Component({
	selector: 'app-shop-card',
	templateUrl: './shop-card.component.html',
	styleUrls: ['./shop-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input() public product: IProduct = {} as IProduct;
	@Output() public orderGood = new EventEmitter();

	constructor() {}

	putOnBusket() {
		this.orderGood.emit();
	}
}
