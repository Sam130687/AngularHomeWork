import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductCardService } from 'src/app/services/product-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
	productCard$!: Observable<IProduct>;

	constructor(
		private productCardService: ProductCardService,
		private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.productCard$ = this.activatedRoute.paramMap.pipe(
			switchMap((paramMap) => this.productCardService.getProduct$(paramMap.get('id') as string)),
		);
	}
}
