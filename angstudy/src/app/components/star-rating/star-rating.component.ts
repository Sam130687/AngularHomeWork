import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { stars } from './constants/stars'; 
import { ICartProduct } from '../../../assets/cards/cart-product';

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	selectedRating = -1;
	stars = stars;

	@Input() public product: ICartProduct = {} as ICartProduct;

	constructor() {}

	selectStar(index: number): void {
		if (this.selectedRating === -1) {
			this.product.feedbacksCount++;			
		}
		this.selectedRating = index;
	}
}
