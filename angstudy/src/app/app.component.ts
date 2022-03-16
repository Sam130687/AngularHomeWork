import { Component } from '@angular/core';
import { cartProduct } from '../assets/cards/cart-product';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
//	@Input() public product: ICartProduct = {} as ICartProduct;
//Временно пока не прилетает извне    
	
	public product = cartProduct;

	readonly storeName: string = 'Мой магазинчик на коленке';
	basketNum: number = 0;

	public orderGood() {
		this.basketNum++;
	}
}
