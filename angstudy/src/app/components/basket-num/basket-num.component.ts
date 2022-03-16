import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-basket-num',
	templateUrl: './basket-num.component.html',
	styleUrls: ['./basket-num.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketNumComponent {
	@Input() basketNum: number = 0;

	constructor() {}
}
