import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input() storeName!: string;
	@Input() basketNum: number = 0;

	constructor() {}
}
