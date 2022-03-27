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

	@Input() public feedbacksCount: number | undefined = 0;
	@Input() public rate: number | undefined = -1;
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

		return 0;
	}
}
