import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input() storeName!: string;

	constructor(private basketService: BasketService) {}

	public basket$ = this.basketService.basket$;	
}
