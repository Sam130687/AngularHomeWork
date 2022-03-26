import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { stars } from './constants/stars'; 

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	readonly stars = stars;

	@Input() public feedbacksCount?: number = 0;
	@Input() public rate?: number = -1;
	@Input() public readOnly: boolean = false;

	constructor() {}

	selectStar(index: number): void {
		if (this.readOnly) {
			return;
		};

		if (this.rate === -1) {
			this.feedbacksCount ? this.feedbacksCount++ : 1; //this.feedbacksCount может быть undefined
		}

		this.rate = index;
	}

	setRate(rate?: number): number {
		if (typeof(rate) == 'number') {
			return rate;
		}
		else
		{
			return 0;
		}
	}
}
