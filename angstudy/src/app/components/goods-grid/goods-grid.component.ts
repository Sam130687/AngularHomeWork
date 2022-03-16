import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-goods-grid',
	templateUrl: './goods-grid.component.html',
	styleUrls: ['./goods-grid.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsGridComponent {
	constructor() {}
}
